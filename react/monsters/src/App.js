import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      filter: ``,
      counter: 42
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(users => {
        this.setState({ ...this.state, monsters: users });
        console.log(this.state);
      });
  }

  handleOnChange = e => {
    this.setState(
      { ...this.state, filter: e.target.value.toLowerCase() },
      () => console.log(this.state) //second param = callback to execute
      // after the state has been updated. BAAAD PRACTICE because of batching! :p
    );
    this.setState(
      (prevState, prevProps) => ({
        counter: prevState.counter + prevProps.increment
      }),
      () => console.log(this.state)
    );
  };

  render() {
    const { monsters, filter, counter } = this.state;
    const monstersToDisplay = monsters.filter(monster =>
      monster.name.toLowerCase().includes(filter)
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <p className="counter-text">{counter}</p>
        <SearchBox onChange={this.handleOnChange} />
        <CardList monsters={monstersToDisplay} />
      </div>
    );
  }
}

export default App;
