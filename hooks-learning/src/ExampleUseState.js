import React, { useState } from "react";

function ExampleUseState() {
  const [count, setCount] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setCount(count + 1);
    setButtonClicked(true);
  };

  return (
    <div className="wrapper">
      <h1>"ExampleUseState"</h1>
      <p>Вы кликнули {count} раз</p>
      {buttonClicked ? (
        <p>Кнопка была нажата!</p>
      ) : (
        <p>Кнопка еще не была нажата</p>
      )}
      <button onClick={handleButtonClick}>Нажми на меня</button>
      <br />
    </div>
  );
}

export default ExampleUseState;
