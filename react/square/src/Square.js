import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';

//const getTitle = () => 'Function Title';
export default class Square extends React.Component {
    constructor(props) {
        // props = for immutable properties, the ones that don't change within the component
        super(props);
        // state = for mutable values, when the component has to change the variables
        // as an analogy: state - local variables of a function, that have to be modified during it's execution
        this.state = {
            currentColor: this.props.initialColor,
            isHidden: this.props.isHidden
        }
        //this.setCurrentColor = this.setCurrentColor.bind(this);
    }

    setCurrentColor (currentColor) {
        // setState() updates the state AND causes a rerender
        this.setState({
            currentColor
        })
    }

    toggleSquareDisplay () {
        // to avoid unexpected behavior when react does internal batching?
        this.setState((currentState) => {
            return {
                isHidden: !currentState.isHidden,
            };
        })
        // this.setState({
        //     isHidden: !this.state.isHidden
        // })
    }

    render () {
        console.log(this.state);
        //const title = <strong>Bold Square</strong>;
        // const letters = [
        //     <p>a</p>,
        //     <p>b</p>,
        //     <p>c</p>
        // ];
        let textInput;

        const visibilityStyle = this.state.isHidden ? 'hidden' : 'visible';
        //const displayStyle = this.state.isHidden ? 'none' : 'block'; 
        const size = `${this.props.size}px`;
        const style = {
            width: size,
            height: size,
            backgroundColor: this.state.currentColor,
            border: '2px solid black',
            visibility: visibilityStyle
            //display: displayStyle
            // display: 'table-cell',
            // verticalAlign: 'middle'
        }
        return (
                <div className="SquareContainer">
                    <div className="Square" style={style} />
                    <div className="SquareControls">
                        <input type='text' placeholder='Color...' ref={(element) => { textInput = element; }}/>
                        <button onClick={() => { this.setCurrentColor(textInput.value) }}>OK</button>
                        <button onClick={() => this.toggleSquareDisplay() }>{this.state.isHidden ? 'SHOW' : 'HIDE'}</button>
                    </div>
                    <div className="clear" />    
                </div>                            
        );
    }
}

Square.propTypes = {
    initialColor: PropTypes.string,
    size: PropTypes.number.isRequired,
    isHidden: PropTypes.bool
};
Square.defaultProps = {
    initialColor: 'red',
    isHidden: false
}