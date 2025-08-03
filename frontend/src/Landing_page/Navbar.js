import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom fixed-top" style={{ backgroundColor: "#fff" }}>
      <div className="container py-2 d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link className="navbar-brand" to={"/"}>
          <img src="media/images/logo.svg" alt="Logo"/>
        </Link>

        {/* Toggler button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Nav */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item nav-item-mb">
              <Link className="nav-link" to={"/signup"}>Signup</Link>
            </li>
            <li className="nav-item nav-item-mb">
              <Link className="nav-link" to={"/about"}>About</Link>
            </li>
            <li className="nav-item nav-item-mb">
              <Link className="nav-link" to={"/products"}>Products</Link>
            </li>
            <li className="nav-item nav-item-mb">
              <Link className="nav-link" to={"/pricing"}>Pricing</Link>
            </li>
            <li className="nav-item nav-item-mb">
              <Link className="nav-link" to={"/support"}>Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
