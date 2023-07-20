import React, { useState } from "react";

function ExampleUseState() {
  // Объявление переменной состояния, которую мы назовём "count"
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <h1>"ExampleUseState"</h1>
      <p>Вы кликнули {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
      <br />
    </div>
  );
}

export default ExampleUseState;
