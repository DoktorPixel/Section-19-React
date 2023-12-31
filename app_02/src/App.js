import Header from "./Header";
import About from "./About";
import Users from "./Users";
import Main from "./Main";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserId from "./UserId";
import Error from "./Error";
import TodoAppClass from "./TodoAppClass";
import TodoAppFunc from "./TodoAppFunc";

function App() {
  return (
    <BrowserRouter>
      <>
        <nav>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </nav>
        <hr />
        <br />
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/users" element={<Users />} />
          <Route path="/users/:userName" element={<UserId />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <hr />
        <br />
        <TodoAppClass />
        <hr />
        <br />
        <TodoAppFunc />
      </>
    </BrowserRouter>
  );
}

export default App;
