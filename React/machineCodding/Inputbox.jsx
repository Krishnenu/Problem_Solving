import React, { useState, useRef } from "react";
import "./styles.css";
function ChipsInput() {
  const [list, setList] = useState([]);
  const inputRef = useRef(null);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const text = inputRef.current.value;
      if (text) {
        setList((prev) => [...prev, text]);
        inputRef.current.value = "";
      }
    }
  };
  const deleteItemHandler = (index) => {
    setList((prev) => prev.filter((item) => prev.indexOf(item) !== index));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <div style={{marging:"20px",display:'flex',flexWrap:"wrap",alignItems:"center",width:"80%"}}>
      {list?.length > 0 &&
        list.map((item, index) => {
          return (
            <div key={index} style={{ display: "flex", alignItems:"center",margin:"5px",backgroundColor:'lightgrey',borderRadius:"20px",padding:'5px 10px' }}>
              <span>{item}</span>
              <button onClick={() => deleteItemHandler(index)}>x</button>
            </div>
          );
        })}
        </div>
    </div>
  );
}

export default ChipsInput;
