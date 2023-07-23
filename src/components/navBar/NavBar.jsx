import React from "react";
import { FaSearch, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext";
import Search from "../search/Search";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
const NavBar = () => {
  const {
    userSearch,
    setUserSearch,
    dataState: { users },
    darkMode,
  } = useData();
  const { setIsLogIn } = useAuth();
  console.log(userSearch);
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const navigate = useNavigate();
  const searchValue = userSearch
    ? users?.filter((item) =>
        item.username === socialUser.username
          ? null
          : item.userHandler.toLowerCase().includes(userSearch.toLowerCase())
      )
    : [];
  const handleClick = (userHandler) => {
    setUserSearch("");
    navigate(`/profile/${userHandler}`);
  };
  const handleLogout = () => {
    setIsLogIn(false);
    localStorage.removeItem("socialUser");
    localStorage.removeItem("socialToken");
    setTimeout(() => {
      toast.success("Logout successful!");
    }, 200);
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="logo-container">
        <img
          src="https://as1.ftcdn.net/v2/jpg/01/06/75/14/1000_F_106751452_inBFbZxQepwgq9BzSxel0Mfly54opnkN.jpg"
          alt="Saathi Logo"
          className="logo"
        />
        <p>S A A T H I 🤝</p>
      </div>
      <div className="search-bar">
        <Search />
      </div>
      <ul className={`searchResults ${darkMode && "bgDarkmode"}`}>
        {searchValue?.map((data) => (
          <li
            className={`searchResult-item ${darkMode && "bgDarkmode"}`}
            key={data._id}
          >
            <div
              className={`profile-container ${
                darkMode && "bgSecondaryDarkMode"
              }`}
            >
              <img
                src={data.profilePic}
                alt="profile1"
                className="profileImg"
                onClick={() => handleClick(data.userHandler)}
              />
              <div
                className={`profile-info ${darkMode && "bgSecondaryDarkMode"}`}
              >
                <p
                  className={`user-follow-name ${
                    darkMode && "bgSecondaryDarkMode"
                  }`}
                  onClick={() => handleClick(data.userHandler)}
                >
                  {data.firstName} {data.lastName}
                </p>
                <span
                  className={`userId ${darkMode && "btnDarkUsernname"}`}
                  onClick={() => handleClick(data.userHandler)}
                >
                  {data.userHandler}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="profile-icons">
        <NavLink to="/profile" activeClassName="active">
          <FaUser className="profile-icon" />
        </NavLink>
        <NavLink to="/login" activeClassName="actve">
          <FaSignOutAlt className="logout-icon" onClick={() => handleLogout} />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
