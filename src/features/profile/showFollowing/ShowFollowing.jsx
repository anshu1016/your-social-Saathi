import React from "react";
import "./showFollowing.css";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import {
  getFollowHandler,
  getUnfollowHandler,
} from "../../../services/DataService";
import { useData } from "../../../context/DataContext";

const ShowFollowing = ({ setShowFollowing, foundUser }) => {
  const {
    dataState: { users },
    dataDispatch,
    darkMode,
  } = useData();
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInUser = users?.find(
    (user) => user.username === socialUser.username
  );

  const userToken = localStorage.getItem("userToken");

  const handleFollow = (_id, userToken, dataDispatch) => {
    getFollowHandler(_id, userToken, dataDispatch);
  };

  const handleUnfollow = (followUserId, userToken, dataDispatch) => {
    getUnfollowHandler(followUserId, userToken, dataDispatch);
  };

  const navigate = useNavigate();
  const handleNavigate = (data) => {
    console.log(data);
    if (data !== socialUser.userHandler) {
      navigate(`/profile/${data}`);
    } else {
      navigate("/profile");
    }
  };

  return (
    <div className="mainBox">
      <div className="headerBox">
        <div className="heading">Following</div>
        <div className="cross" onClick={() => setShowFollowing(false)}>
          <RxCross2 />
        </div>
      </div>
      {foundUser?.following.length === 0 && (
        <div className="headingFollowing">
          <h3>No Following</h3>
        </div>
      )}
      {foundUser?.following?.map((data) => {
        return (
          <div className="followers">
            <div className="users">
              <div
                className="image"
                onClick={() => handleNavigate(data.userHandler)}
              >
                <img src={data?.profilePic} alt="profilePic" />
              </div>
              <div
                className="userName"
                onClick={() => handleNavigate(data.userHandler)}
              >
                <p>
                  {data?.firstName} {data?.lastName}
                </p>
              </div>
            </div>
            <div className="followButtons">
              {loggedInUser.username !== data.username &&
                (foundUser?.following?.some(
                  (el) => el.username === data?.username
                ) ? (
                  <button
                    onClick={() =>
                      handleUnfollow(data?._id, userToken, dataDispatch)
                    }
                    className="EditBtn"
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      handleFollow(data?._id, userToken, dataDispatch)
                    }
                    className="EditBtn"
                  >
                    Follow
                  </button>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowFollowing;
