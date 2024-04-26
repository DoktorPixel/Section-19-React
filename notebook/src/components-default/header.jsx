import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
      <Link to="/">Task list default</Link>

      <Link to="/new-page">Task list by Reducer</Link>
    </div>
  );
};

export default Header;
