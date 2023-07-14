import "./header.css";
import dailyLogo from "../../assets/daily-logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
const Header = () => {
  const { loggedIn, setLoggedIn } = useContext(AppContext);

  function handleLogout() {
    if (loggedIn) {
      localStorage.removeItem("token");
      setLoggedIn(false);
    }
  }

  return (
    <header className="app-header">
      <div className="header-logo-container">
        <img className="header-logo" src={dailyLogo} alt="Daily" />
      </div>
      <nav className="header-menu-container">
        <ul className="header-menu">
          <li>
            <Link to="/">خانه</Link>
          </li>
          <li>
            <Link to="/about-us">درباره ما</Link>
          </li>
          <li>
            <Link to="/contact-us">تماس با ما</Link>
          </li>
          {loggedIn && (
            <li>
              <a onClick={handleLogout}>خروج</a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
