import Nav from "./Nav";

export default function Header() {
  return (
    <header className="header">
      <a href="/">
        <img
          className="logo"
          src={require("../assets/nav-logo.png")}
          alt="Little Lemon Logo"
        />
      </a>
      <Nav />
    </header>
  );
}
