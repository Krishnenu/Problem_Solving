import { useState } from "react";
import "./styles.css";
import { useDebounce } from "./useDebounce";

export default function App() {
  const [text, setText] = useState("");
  const { debounceText } = useDebounce(text);
  const onChangehandler = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <input type="text" onChange={onChangehandler} />
      <h1>{debounceText}</h1>
    </div>
  );
}
