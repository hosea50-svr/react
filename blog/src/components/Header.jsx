import './Header.css' 
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">

        <Link className="navbar-brand text-warning-hover" to="/">
          <span className="brand">MyBlog</span>
          <i className="bi bi-mortarboard text-primary"></i>
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

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">

            <Link className="nav-link" to="/">
              Home
            </Link>

            <Link to='/register' className="text-warning nav-link">
                  Register
            </Link>

            <Link className="nav-link" to="/contact">
              Contact
            </Link>

            <Link
              className="nav-link fw-bold text-warning"
              to="/login"
            >
              Login
            </Link>

            <Link
              className="nav-link"
              to="/about"
            >
              About
            </Link>

            <Link
              className="nav-link text-danger"
              to="/login"
            >
              Log-out
            </Link>

          </div>
        </div>

      </div>
    </nav>
  );
}
