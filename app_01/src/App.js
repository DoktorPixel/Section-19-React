import "./App.css";
import Test from "./Test";
import Test2 from "./Test2";
import Header from "./Header/Header";
import Goods from "./Goods";

const headerData = {
  site_name: "my test site name",
  nav: [
    { link: "nav1", text: "my link" },
    { link: "nav1", text: "my link" },
    { link: "nav1", text: "my link" },
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
      {goods.map((item) => (
        <Goods title={item.title} cost={item.cost} image={item.image} />
      ))}
    </>
  );
}

export default App;
