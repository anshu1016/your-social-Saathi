import React from "react";
import "./rightBar.css";
import { useData } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
import { getFollowHandler } from "../../services/DataService";

const RightBar = () => {
  const {
    dataState: { users },
    dataDispatch,
    darkMode,
  } = useData();
  const userToken = localStorage.getItem("userToken");
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const navigate = useNavigate();

  const handleClick = (userHandler) => {
    navigate(`/profile/${userHandler}`);
  };

  const handleFollow = (_id, userToken, dataDispatch) => {
    getFollowHandler(_id, userToken, dataDispatch);
  };

  const user = users?.find((el) => el.username === socialUser?.username);
  const followingArray = user?.following.map((el) => el?.username);
  const notFollowedUsers = users?.filter(
    (el) =>
      el?.username !== socialUser?.username &&
      !followingArray?.includes(el?.username)
  );

  return (
    <div className={`rightBar ${darkMode && "darkMode"}`}>
      <div className="rightBarContainer">
        <div className="rightBarHeader">
          <h3>Suggestions For You</h3>
        </div>
        <div className="rightBarContent">
          {notFollowedUsers.length === 0 ? (
            <div className="followBarHeading">Nothing to Suggest</div>
          ) : (
            notFollowedUsers.map((data) => (
              <div
                className="rightBarCard"
                key={data._id}
              >
                <div className="rightBarUser"  onClick={() => handleClick(data.userHandler)}>
                  <div className="rightBarImageContainer">
                    <img src={data.profilePic} alt="profilePic" />
                  </div>
                  <div className="rightBarUserDetails">
                    <p>{`${data.firstName} ${data.lastName}`}</p>
                    <p>@{data.userHandler}</p>
                  </div>
                </div>
                <div className="rightBarButton">
                  <button
                    onClick={() =>
                      handleFollow(data._id, userToken, dataDispatch)
                    }
                  >
                    Add Friend
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
