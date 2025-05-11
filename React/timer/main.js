import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(20);
  const timeRef = useRef(null);
  useEffect(() => {
    if (!timeRef.current) {
      timeRef.current = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      clearInterval(timeRef.current);
    }
  }, [timer]);

  const onClickHandler = () => {
    setCount((prev) => prev + 1);
    return () => {
      if (timer <= 0) {
        clearInterval(timeRef.current);
      }
    };
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={onClickHandler} disabled={timer == 0}>
        INC
      </button>
      <p>{timer}</p>
    </div>
  );
}
