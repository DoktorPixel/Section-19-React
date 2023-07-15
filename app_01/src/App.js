import "./App.css";
import Test from "./Test";
import Test2 from "./Test2";
import Header from "./Header/Header";
import Goods from "./Goods";

const headerData = {
  site_name: "my test site name",
  second_header: "second header",
  nav: [
    { link: "https://www.google.com/", text: "my link to google" },
    { link: "https://www.facebook.com/", text: "my link to facebook" },
    { link: "https://www.instagram.com/", text: "my link to insagram" },
  ],
};

const goods = [
  {
    title: "apple",
    cost: 330,
    image: "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-256.png",
  },
  {
    title: "pear",
    cost: 530,
    image: "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Pear-512.png",
  },
];
function App() {
  return (
    <>
      <Header data={headerData} />

      <br />
      <hr />
      <h1> Hello</h1>
      <button> I'm a button </button>
      <br />
      <select>
        <option value="1">one</option>
        <option value="2">two</option>
      </select>
      <hr />
      <img src="/images/react_icon.png" alt="react" title="react" />
      <br />
      <hr />
      <Test />
      <br />
      <Test2 />
      <br />
      {goods.map((item, index) => (
        <Goods
          key={index} // должен быть уникальный ключ (key) в каждом элементе массива в цикле map!!!
          title={item.title}
          cost={item.cost}
          image={item.image}
        />
      ))}
      {/* <Goods
        title={goods[0].title}
        cost={goods[0].cost}
        image={goods[0].image}
      /> */}
    </>
  );
}

export default App;
