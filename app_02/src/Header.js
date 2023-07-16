import { Link } from "react-router-dom";

function Header() {
  return (
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
    </>
  );
}

export default Header;
