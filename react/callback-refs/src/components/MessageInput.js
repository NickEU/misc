import React from 'react';

const MessageInput = ({ txtFieldRef, handleBtnClick }) => {
    return (
        <div id='messageInput'>
          <input ref={txtFieldRef} 
                 type='text' 
                 placeholder='Start Typing...'/>
          <button onClick={() => handleBtnClick()}>Click me</button>
        </div>
    );
}

export default MessageInput;