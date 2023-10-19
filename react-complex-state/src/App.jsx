import { useContext, useEffect, useState } from "react";
import "./App.css";
import History from "./components/History";
import Display from "./components/Display";
import Button from "./components/Button";

// If your line of code has more than a 100 lines, extract it into another component folder | start refactoring your code

// This is a last resort and is not a bad practice
// Put it at the top if ever you need to do this resolution/workaround
// Always create a component and import it every time
// Not a bad practice but not a good thing to do
function Display(props) {
  return <div>(props.value)</div>;
}

function App() {
  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);

  // This formatting is okay - this is the only way to use hooks
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  // // This formatting is not okay
  // if (total > 10) {
  //   const [foobar, setFoobar] = useState("");
  // }

  // This is also not good
  // for (let i = 0; i < total: i++) {
  //   const [rightway, setRightWay] = useState(false)
  // }

  // const notGood = () => {
  //   const [x, setX] = useState(-1000)
  // }

  // Do not use hooks inside a loop, function, nor a conditional.
  // useRef useMemo useEffect etc - other hooks

  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0);
  // const [theme, setTheme] = useContext("dark");

  useEffect(() => {
    console.log("the effect has been run!");
  }, []);

  // Event Handlers Logic
  const handleLeftClick = () => {
    const newClicks = { ...clicks, left: clicks.left + 1 }; // "..." copy all the state from this object | this is a SPREAD OPERATOR

    setClicks(newClicks);
    setAllClicks(allClicks.concat("L")); // We don't use push in react, only concat
    setTotal(newClicks.left + newClicks.right);
  };

  const handleRightClick = () => {
    const newClicks = { ...clicks, right: clicks.right + 1 };

    setClicks(newClicks);
    setAllClicks(allClicks.concat("R"));
    setTotal(newClicks.left + newClicks.right);
  };

  // A component is just another function that uses a prop
  // Do not define components inside another component
  // This is a bad practice
  // const Display = (props) => <div>{props.value}</div>;

  // What we're doing here is rendering - we are rendering this on the screen/display
  return (
    <div>
      <Display value={clicks.left} />
      {/* <p>{clicks.left}</p> */}
      {/* <button onClick={() => setLeft(left + 1)}>Left</button> */}
      {/* <button onClick={handleLeftClick}>Left</button> */}
      <Button onClick={handleLeftClick} text="Left Button" />
      {/* <p>{clicks.right}</p> */}
      <Display value={clicks.right} />
      {/* <button onClick={() => setRight(right + 1)}>Right</button> */}
      {/* <button onClick={handleRightClick}>Right</button> */}
      <Button onClick={handleRightClick} text="Right Button" />
      <p>{allClicks.join(" ")}</p>
      <History allClicks={allClicks} />
      <Display value={total} />
      {/* <p>Total: {total}</p> */}
    </div>
  );
}

export default App;
