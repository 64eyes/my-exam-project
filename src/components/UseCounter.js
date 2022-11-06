import React, { useReducer } from "react";

function UseCounter() {
  // Set up Reducer state variables along with its method...
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
    }
  }
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function increment() {
    dispatch({ type: "increment" });
  }
  function decrement() {
    dispatch({ type: "decrement" });
  }
  function reset() {
    dispatch({ type: "reset" });
  }
  return [state, increment, decrement, reset];
}

export default UseCounter;
