const initialState = { messages: ['John: How is it going?', 'Peter: Doing well, hbu?', 'John: I am inside a react component', ] };

export const store = createStore(reducer, initialState);

const listener = () => {
    console.log('Current state: ');
    console.log(store.getState());
}
  
store.subscribe(listener);

function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = [];
  
  const subscribe = (listener) => listeners.push(listener);

  const getState = () => (state);

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(l => l());
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
}

function reducer(state, action) {
  if (action.type === 'ADD_MESSAGE') {
<<<<<<< HEAD
    if (action.message == '') {
=======
    if (action.message === '') {
>>>>>>> added binary tree height and callback refs
        return state;
    }
    return {
      ...state,
      messages: state.messages.concat(action.message),
    }
  } else if (action.type === 'DELETE_MESSAGE') {
    let messagesShallow = state.messages;
    messagesShallow.splice(action.index, 1);
    return {
      ...state,
      messages: messagesShallow,
    }
  } else {
    return state;
  }
}




