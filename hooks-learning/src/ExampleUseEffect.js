import React, { useState, useEffect } from "react";

function ExampleUseEffect() {
  const [count, setCount] = useState(0);

  // Аналогично componentDidMount и componentDidUpdate:
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    document.title = `Вы нажали ${count} раз`;
  });

  return (
    <div className="wrapper">
      <h1>"ExampleUseEffect"</h1>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
}
export default ExampleUseEffect;
