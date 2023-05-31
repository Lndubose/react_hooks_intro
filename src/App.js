import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const toggleLight = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  useEffect(() => {
    document.title = `You have clicked ${count} times`;
  });

  return (
    <div className="App">
      <h2>Counter</h2>
      <button onClick={incrementCount}>I was clicked {count} times</button>
      <i class="fas fa-flashlight"></i>
      <h2>Toggle Light</h2>
      <img
        src={
          isOn
            ? "https://img.icons8.com/flash-light"
            : "https://img.icons8.com/FFF176/flash-light"
        }
        style={{
          height: "50px",
          width: "50px",
        }}
        alt="Flashlight"
        onClick={toggleLight}
      />
    </div>
  );
}

export default App;
