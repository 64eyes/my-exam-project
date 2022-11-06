import UseCounter from "./UseCounter";

function HomePage() {
  const [state, increment, decrement, reset] = UseCounter();
  return (
    <>
      <div>Count: {state.count}</div>
      <button onClick={decrement}>-</button>

      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default HomePage;
