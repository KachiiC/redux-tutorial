const counterReducer = (state = 0, action) => {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1
    default:
      return state
  }
}

export default counterReducer

// let store = createStore(counter);

// // Display it in console
// store.subscribe(() => console.log(store.getState()));
// // DISPATCH
// store.dispatch(increment());