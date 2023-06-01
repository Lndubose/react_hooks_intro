import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const toggleLight = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.pageX, y: event.pageY });
  };

  useEffect(() => {
    document.title = `You have clicked ${count} times`;

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mouseover", handleMouseMove);
    };
  }, [count]);

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

      <h2>Mouse Position</h2>
      {JSON.stringify(mousePosition, null, 2)}
      <p>X position: {mousePosition.x}</p>
      <p>Y position: {mousePosition.y}</p>

      <br />
    </div>
  );
}

export default App;
