import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
      <Link to="/">Task list default</Link>
      <br />
      <Link to="/new-page">Task list new</Link>
    </div>
  );
};

export default Header;
