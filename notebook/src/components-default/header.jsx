import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
      <Link to="/">Task list default</Link>

      <Link to="/task-app-reducer">Task list by Reducer</Link>

      <Link to="/task-app-context">Task list by Context</Link>
    </div>
  );
};

export default Header;
