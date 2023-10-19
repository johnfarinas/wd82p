// passing data to a component into another
/*  import "./App.css";
import Hello from "./components/hello";

function App() {
  const name = "Peter";
  const age = 10;

  return (
    <div>
      <Hello name="Carlo" age="28" />
      <Hello name="Adrian" age="20" />
      <Hello name="Allison" age="18" />
      <Hello name={name} age={age + 5} />
    </div>
  );
}

export default App;  */

// component state - state is a variable where data is stored
// virtual DOM
// event handlers
// useState makes static data to dyanmic data
import "./App.css";
import { useState } from "react";
import Button from "./components/Button";

function App() {
  // [0, function() ]
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => {
    if (counter < 1) return;
    setCounter(counter - 1);
  };
  const reset = () => setCounter(0);

  return (
    <div>
      <h1>{counter}</h1>
      <Button handler={increment} text="Increment" />
      <Button handler={decrement} text="Decrement" />
      <Button handler={reset} text="Reset" />
    </div>
  );
}

export default App;
