import { useEffect, useState } from "react";
import { posts } from "./post";
import "./styles.css";

export default function App() {
  console.log("test 1");

  const [count, setCount] = useState(0);
  console.log("test 2:", count);

  useEffect(() => {
    console.log("test 3: useEffect - No Dependency");

    return () => {
      console.log("test 4: Cleanup - No Dependency");
    };
  });

  useEffect(() => {
    console.log("test 5: useEffect - Empty Dependency []");

    return () => {
      console.log("test 6: Cleanup - Empty Dependency []");
    };
  }, []);

  useEffect(() => {
    console.log("test 7: useEffect - [count] Dependency");

    return () => {
      console.log("test 8: Cleanup - [count] Dependency");
    };
  }, [count]);

  const handleClick = () => {
    console.log("test 9: Button Clicked, Updating State...");
    setCount((prev) => prev + 1);
  };

  console.log("test 10");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
