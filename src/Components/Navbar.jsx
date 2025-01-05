// import "./Website.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-2" to={"/"}>
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link fw-bold fs-5" aria-current="page" to={"/about"}>
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold fs-5" to={"/portfolio"}>
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold fs-5" to={"/contact"}>
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
