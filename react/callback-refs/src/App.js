import React from 'react';
import MessageView from './components/MessageView';
import MessageInput from './components/MessageInput';
import {store} from './components/store';
import { addMsgAction } from './components/actions';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    //this.txtFieldRef = React.createRef();
    this.txtFieldRef = null;
    // callbacks refs are preferred to createRef() method
    //this.txtFieldCallbackRef = e => this.txtFieldRef = e;
  }

  componentDidMount () {
    store.subscribe(() => this.forceUpdate());
  }

  handleBtnClick = () => {
    store.dispatch(addMsgAction(this.txtFieldRef.value));
    this.txtFieldRef.value = '';
  }

  render () {
    return (
      <div id='listContainer'>
        <MessageView />
        <MessageInput handleBtnClick={this.handleBtnClick} txtFieldRef={e => this.txtFieldRef = e} />
      </div>
    );
  }  
}