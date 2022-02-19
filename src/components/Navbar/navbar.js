import { NavLink as Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg container">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <AiOutlineMenu className="burger-menu-btn" />
      </button>

      <Link to="/" className="navbar-brand">
        <img src="/icons/bosta_red_logo.svg" alt="Bosta"></img>
      </Link>

      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              الرئيسية
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className="nav-link mx-lg-2 mx-0">
              الأسعار
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-sales" className="nav-link">
              كلم المبيعات
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link to="/tracking-shipment" className="nav-link">
              تتبع شحنتك
            </Link>
          </li>
          <span className="vr"></span>
          <li className="nav-item">
            <Link to="/sign-in" className="nav-link">
              تسجيل الدخول
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link lang">
              ENG
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
