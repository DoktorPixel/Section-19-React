import { useLocation } from "react-router-dom";

function Users() {
  let url = useLocation();
  return (
    <>
      <h1>Users</h1>
      <ul>
        <li>
          <a href={`${url.pathname}/Ivanov`}>Ivanov</a>
        </li>
        <li>
          <a href={`${url.pathname}/Petov`}>Petrov</a>
        </li>
      </ul>
    </>
  );
}

export default Users;
