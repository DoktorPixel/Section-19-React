function Header(props) {
  return (
    <header>
      <h1>{props.data.site_name}</h1>
      <h2>{props.data.second_header}</h2>
      <Nav nav={props.data.nav} />
    </header>
  );
}

function Nav(props) {
  let data = props.nav;
  const listItem = data.map((item, index) => (
    <li key={index}>
      <a href={item.link}>{item.text}</a>
    </li>
  ));
  return (
    <nav>
      <ul>{listItem}</ul>
    </nav>
  );
}

export default Header;
