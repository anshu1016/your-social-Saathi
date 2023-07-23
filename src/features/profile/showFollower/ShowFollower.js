import React from "react";
import "./showFollower.css";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import {
  getFollowHandler,
  getUnfollowHandler,
} from "../../../services/DataService";
import { useData } from "../../../context/DataContext";

const ShowFollower = ({ setShowFollowing, foundUser }) => {
  const {
    dataState: { users },
    darkMode,
    dataDispatch,
  } = useData();
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInUser = users?.find(
    (user) => user.username === "tomcat@gmail.com"
  );
  const userToken = localStorage.getItem("userToken");
  const navigate = useNavigate();
  const handleNavigate = (data) => {
    console.log(data);
    if (data !== socialUser.userHandler) {
      navigate(`/profile/${data}`);
    } else {
      navigate("/profile");
    }
  };
  const handleFollow = (_id, userToken, dataDispatch) => {
    console.log({ _id, userToken, dataDispatch });
    getFollowHandler(_id, userToken, dataDispatch);
  };

  const handleUnfollow = (followUserId, userToken, dataDispatch) => {
    console.log({ followUserId, userToken });
    getUnfollowHandler(followUserId, userToken, dataDispatch);
  };

  return (
    <div className="mainBox">
      <div className="headerBox">
        <div className="heading">Follower</div>
        <div className="cross" onClick={() => setShowFollowing(false)}>
          <RxCross2 />
        </div>
      </div>
      {foundUser?.followers.length === 0 && (
        <div className="headingFollowing">
          <h3>No Followers</h3>
        </div>
      )}
      {foundUser?.followers?.map((data) => {
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
                (foundUser?.follower?.some(
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

export default ShowFollower;
