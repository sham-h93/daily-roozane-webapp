import "./header.css";
import dailyLogo from "../../assets/daily-logo.svg";
const Header = () => {
  return (
    <div className="app-header">
      <div className="header-logo-container">
        <img className="header-logo" src={dailyLogo} alt="Daily" />
      </div>
      <div className="header-menu-container">
        <ul className="header-menu">
          <li>
            <a href="">خانه</a>
          </li>
          <li>
            <a href="">درباره ما</a>
          </li>
          <li>
            <a href="">تماس با ما</a>
          </li>
          <li>
            <a id="header-download-btn" href="">
              دانلود از کافه بازار
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
