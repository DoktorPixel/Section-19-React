import React, { useState } from "react";

function TodoAppFunctional() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    const newItem = {
      text: text,
      id: Date.now(),
    };
    setItems((prevItems) => [...prevItems, newItem]);
    setText("");
  }

  return (
    <div>
      <h3>Список дел (функциональный компонент)</h3>
      <TodoList items={items} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">Что нужно сделать?</label>
        <input id="new-todo" onChange={handleChange} value={text} />
        <button>Добавить #{items.length + 1}</button>
      </form>
    </div>
  );
}

function TodoList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export default TodoAppFunctional;
