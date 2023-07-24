import React, { useState } from "react";

function App() {
  let textInput = React.createRef();

  const [output, setOutput] = useState("hello");

  function f1(arg) {
    console.log("f1 work" + arg);
  }

  function f2() {
    console.log("f2 move");
  }

  function showInput(event) {
    console.log("input");
    // console.log(event.target.value);
    console.log(textInput.current.value);
  }

  function handleChange(event) {
    setOutput(event.target.value);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Button</h2>
        <button onClick={() => f1(1)}>Push</button>
      </section>
      <section>
        <h2>Double click + mouse move</h2>
        <div
          className="test"
          onDoubleClick={() => f1(2)}
          onMouseMove={f2}
        ></div>
      </section>
      <section>
        <h2>Input</h2>
        <input
          type="text"
          onInput={showInput}
          ref={textInput}
          onChange={handleChange}
        />
        <h3>{output}</h3>
      </section>
    </>
  );
}

export default App;
