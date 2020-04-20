import React from 'react';
import { store } from './store';
import { delMsgAction } from './actions';

export default function MessageView () {
    const handleMsgClick  = (e) => store.dispatch(delMsgAction(e.target.id));
    return (
        <div id='messageView' 
             onClick={handleMsgClick}>
             {store.getState().messages.map( (item, id) => <div id={id} key={id}> {item} </div>)}
        </div>
    );
}