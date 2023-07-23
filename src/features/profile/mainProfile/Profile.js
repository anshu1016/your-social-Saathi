import React, { useState, useEffect } from "react";
import "./profile.css";
import { useData } from "../../../context/DataContext";
import ShowFollower from "../showFollower/ShowFollower";
import ShowFollowing from "../showFollowing/ShowFollowing";
import SinglePost from "../../../components/singlePost/SinglePost";

const Profile = () => {
  const {
    dataState: { users, posts },
    editBtn,
    setEditBtn,
    setIsLoading,
    darkMode,
  } = useData();
  const [showFollowing, setShowFollowing] = useState("");
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInUser = socialUser
    ? users?.find((user) =>user.username === socialUser.username)
    : null;

  const profileUserPosts = posts?.filter(
    (post) => post.username === socialUser.username
  );
  const handleEdit = () => {
    setEditBtn(!editBtn);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  const followingHandle = () => {
    if (loggedInUser?.following.length > 0) {
      setShowFollowing("following");
    }
  };
  const followerHandle = () => {
    if (loggedInUser?.followers.length > 0) {
      setShowFollowing("followers");
    }
  };
  return (
    <div className="mainContainer">
      <div className="innerContainer">
        <div className="imageContainer">
          <img src={loggedInUser?.profilePic} alt="profilePic" />
        </div>
        <div className="details">
          <div className="header">
            <div className="username">
              <h4>
                {" "}
                {loggedInUser?.firstName} {loggedInUser?.lastName}
              </h4>
              <h6> @{loggedInUser?.userHandler}</h6>
            </div>
            <div className="headerFunctionality">
              <div className="edit">
                <button onClick={handleEdit}>Edit</button>
              </div>
              <div className="logout">
                <button>LogOut</button>
              </div>
            </div>
          </div>
          <div className="bio">
            <p>{loggedInUser?.bio}</p>
          </div>
          <div className="links">
            <div className="website">
              <a
                href={loggedInUser?.link}
                target="_blank"
                rel="noreferrer"
                className="profile-link"
              >
                {loggedInUser?.link}
              </a>
            </div>
            <div className="calendar">Calendar</div>
          </div>
          <div className="followTable">
            <div className="posts">{profileUserPosts.length} Posts</div>
            <div className="following" onClick={followingHandle}>
              {" "}
              {loggedInUser?.following.length} Following
            </div>
            <div className="follower" onClick={followerHandle}>
              {loggedInUser?.followers.length} Followers
            </div>
          </div>
          {showFollowing === "following" && (
            <div className="modalFollowing">
              <div className="modalContent">
                <ShowFollowing
              setShowFollowing={setShowFollowing}
              foundUser={loggedInUser}
            />
              </div>
            </div>
          )}
          {showFollowing === "followers" && (
            <div className="modalFollowing">
              <div className="modalContent">
                <ShowFollower
                  setShowFollowing={setShowFollowing}
                  foundUser={loggedInUser}
                />
              </div>
            </div>
          )}
          </div>
           <div className="post">  {profileUserPosts?.reverse().map((post) => (
          <SinglePost key={post?._id} data={post} />
        ))}
        </div>
      </div>
     
    
    </div>
  );
};

export default Profile;
