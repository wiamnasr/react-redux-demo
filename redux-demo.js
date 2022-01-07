// importing redux, node style lol
const redux = require("redux");

// Reducer function
// we should give a default value for state, in case it was undefined
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// Store => needs to know which reducer is responsible for changing the store, so we pass the reducer function here
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  // getState() is a method that is available on the store created with createStore()
  // it will give us the latest state snapshot after it was updated
  const latestState = store.getState();
  console.log(latestState);
};

// Subscribing
store.subscribe(counterSubscriber);

// Dispatching an increment/decrement action types
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
