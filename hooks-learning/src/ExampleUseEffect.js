import React, { useState, useEffect } from "react";

function ExampleUseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // 1)Обновляем заголовок документа с помощью API браузера
    document.title = `Вы нажали ${count} раз`;
  }); //  при каждом нажатии на кнопку заголовок документа будет изменяться

  useEffect(() => {
    console.log("Компонент отрендерился!"); // 2) Каждый раз, когда вы будете обновлять состояние count, компонент будет рендериться снова, и функция в useEffect будет вызываться снова, выводя сообщение о рендеринге в консоль.

    // Функция обработчик события, которая будет вызываться при нажатии клавиши
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        setCount(count + 1);
      }
    };

    // Добавляем слушателя события клавиатуры
    document.addEventListener("keydown", handleKeyPress);

    // Возвращаем функцию очистки, которая будет вызвана при размонтировании компонента
    return () => {
      console.log("Компонент размонтирован!");

      // Удаляем слушателя события клавиатуры при размонтировании компонента
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [count]); // Передаем count как зависимость

  return (
    <div className="wrapper">
      <h1>"ExampleUseEffect"</h1>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
}
export default ExampleUseEffect;
