import "./styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img
        src={require("../images/logo.png")}
        className="navbar--logo"
        alt="Outline of an open book"
      />
      <h1 className="navbar--name">eBookz</h1>
    </div>
  );
}

export default Navbar;
