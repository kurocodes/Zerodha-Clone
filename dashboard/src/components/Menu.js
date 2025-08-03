import { useState } from "react";
import { Link } from "react-router-dom";
import { useGeneralContext } from "./GeneralContext";
import axios from "axios";

const Menu = () => {
  const backendURL = process.env.REACT_APP_BACKEND_URL;
  const frontendURL = process.env.REACT_APP_FRONTEND_URL;
  const { userData, setUserData, toggleSideBar } = useGeneralContext();
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileCLick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      setUserData(null);
      window.location.href = frontendURL;
    } catch (error) {
      console.log(error);
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img
        onClick={toggleSideBar}
        src="logo.png"
        style={{ width: "50px", cursor: "pointer" }}
      />

      <div className="menus">
        {isMenuOpen && (
          <ul>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/"
                onClick={() => handleMenuClick(0)}
              >
                <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                  Dashboard
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/orders"
                onClick={() => handleMenuClick(1)}
              >
                <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                  Orders
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/holdings"
                onClick={() => handleMenuClick(2)}
              >
                <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                  Holdings
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/positions"
                onClick={() => handleMenuClick(3)}
              >
                <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                  Positions
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/funds"
                onClick={() => handleMenuClick(4)}
              >
                <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                  Funds
                </p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/apps"
                onClick={() => handleMenuClick(5)}
              >
                <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                  Apps
                </p>
              </Link>
            </li>
          </ul>
        )}
        <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i class="fa-solid fa-bars"></i>
        </div>
        <hr />

        <div
          className="profile"
          onClick={handleProfileCLick}
          style={{ cursor: "pointer", position: "relative" }}
        >
          <div className="avatar">
            {userData?.username.charAt(0).toUpperCase()}
          </div>
          <p className="username">{userData?.username}</p>

          {/* Profile Dropdown */}
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <Link className="dropdown-item">Profile</Link>
              <Link className="dropdown-item">Settings</Link>
              <button onClick={handleLogout} className="dropdown-item">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
