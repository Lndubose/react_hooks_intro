import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [status, setStatus] = useState(navigator.onLine);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const toggleLight = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.pageX, y: event.pageY });
  };

  const handleOnline = () => {
    setStatus(true);
  };

  const handleOffline = () => {
    setStatus(false);
  };

  useEffect(() => {
    document.title = `You have clicked ${count} times`;

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("mouseover", handleMouseMove);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
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

      <h2>Network Status</h2>
      <p>
        You are <strong>{status ? "online" : "offline"}</strong>
      </p>
    </div>
  );
}

export default App;
