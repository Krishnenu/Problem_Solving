// Write a React code that call function for every 5 seconds until some conditions will
// be satisfied.

import { useState, useEffect, useRef } from "react";

function IntervalComponent() {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const intervalRef = useRef(null);

  // Function to be called periodically
  const checkCondition = () => {
    setCounter((prev) => prev + 1);
  };

  // Condition checking function
  const conditionMet = () => {
    return counter >= 5; // Example condition: stop after 5 executions
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      checkCondition();
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (conditionMet()) {
      clearInterval(intervalRef.current);
      setIsActive(false);
    }
  }, [counter]);

  return (
    <div>
      <h2>Interval Execution Example</h2>
      <p>Executions: {counter}</p>
      <p>Status: {isActive ? "Active" : "Stopped"}</p>
      <p>Condition: {conditionMet() ? "Met" : "Not met"}</p>
    </div>
  );
}

export default IntervalComponent;
