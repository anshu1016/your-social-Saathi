// LeftBar.js
import React from "react";
import "./leftBar.css";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { toast } from "react-toastify";
import {
  MdOutlineExplore,
} from "react-icons/md";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";

const LeftBar = () => {
  const { setIsLogIn } = useAuth();
  const {
    dataState: { users },
    darkMode,
    setDarkMode,
  } = useData();
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInUser = users?.find(
    ({ username }) => username === socialUser.username
  );
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLogIn(false);
    localStorage.removeItem("socialUser");
    localStorage.removeItem("socialToken");
    setTimeout(() => {
      toast.success("Logout successful!");
    }, 200);
    navigate("/");
  };

  const handleNavigate = () => {
    navigate("/profile");
  };

  return (
    <div className="leftBar">
      <div className="innerLeftBar">
        <ul>
          <NavLink to="/" exact activeClassName="active" className="group">
            <div className="icon">
              <ImHome />
            </div>
            <div className="itemName">Home</div>
          </NavLink>
          <NavLink to="/explore" activeClassName="active" className="group">
            <div className="icon">
              <MdOutlineExplore />
            </div>
            <div className="itemName">Explore</div>
          </NavLink>
          <NavLink to="/bookmark" activeClassName="active" className="group">
            <div className="icon">
              <BsFillBookmarkHeartFill />
            </div>
            <div className="itemName">Bookmark</div>
          </NavLink>
          <NavLink to="/profile" activeClassName="active" className="group">
            <div className="icon">
              <CgProfile />
            </div>
            <div className="itemName">Profile</div>
          </NavLink>
          <NavLink
            to="/logout"
            activeClassName="active"
            className="group"
            onClick={handleLogout}
          >
            <div className="icon">
              <IoMdLogOut />
            </div>
            <div className="itemName">Logout</div>
          </NavLink>
        </ul>
      </div>
      <div className="user" onClick={handleNavigate}>
        <div className="image">
          <img src={loggedInUser?.profilePic} alt="profilePic" />
        </div>
        <div className="userDetails">
          <p className="userName">
            {loggedInUser?.firstName} {loggedInUser?.lastName}
          </p>
          <p className="userHandler">@{loggedInUser?.userHandler}</p>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
