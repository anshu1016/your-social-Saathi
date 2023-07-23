import React,{useEffect, useState} from 'react';
import "./thirdProfile.css";
import { useParams } from "react-router-dom";
import { useData } from '../../../context/DataContext';
import { getFollowHandler, getUnfollowHandler } from '../../../services/DataService';
import ShowFollowing from '../showFollowing/ShowFollowing';
import ShowFollower from '../showFollower/ShowFollower';
import SinglePost from '../../../components/singlePost/SinglePost';
const ThirdProfile = () => {
    const { userHandler } = useParams();
    const {
      dataState: { users, posts },
      dataDispatch,
      setIsLoading,
      darkMode,
    } = useData();
    const [showFollowing, setShowFollowing] = useState("");
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInUser = users?.find((el) => el.username === socialUser.username);
  const foundUser = users?.find((el) => el.userHandler === userHandler);

  const handleFollow = (followUserId, socialToken, dataDispatch) => {
    getFollowHandler(followUserId, socialToken, dataDispatch);
  };
  const handleUnfollow = (followUserId, socialToken, dataDispatch) => {
    getUnfollowHandler(followUserId, socialToken, dataDispatch);
  };
  const userToken = localStorage.getItem("userToken");
  const foundUsersPosts = posts?.filter(
    (post) => post.username === foundUser?.username
  );
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  const followingHandle = () => {
    if (foundUser?.following.length > 0) {
      setShowFollowing("following");
    }
  };
  const followerHandle = () => {
    if (foundUser?.followers.length > 0) {
      setShowFollowing("followers");
    }
  };
  return (
    <div className="mainContainer">
    <div className="innerContainer">
      <div className="imageContainer">
        <img src={foundUser?.profilePic} alt="profilePic" />
      </div>
      <div className="details">
        <div className="header">
          <div className="username">
            <h4>
              {" "}
              {foundUser?.firstName} {foundUser?.lastName}
            </h4>
            <h6> @{foundUser?.userHandler}</h6>
          </div>
          {loggedInUser?.following?.some(
                  (el) => el.username === foundUser?.username
                ) ? (
                  <button
                    onClick={() =>
                      handleUnfollow(foundUser?._id, userToken, dataDispatch)
                    }
                    className="EditBtn"
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      handleFollow(foundUser?._id, userToken, dataDispatch)
                    }
                    className="EditBtn" style={{ color:"white",padding:"5px",backgroundColor:"blue",cursor:"pointer",fontSize:"18px",borderRadius:"4px"}}
                  >
                    Follow
                  </button>
                )}
         
        </div>
        <div className="bio">
        <p>{foundUser?.bio}</p>
        </div>
        <div className="links">
          <div className="website">
          <a href={foundUser?.url} target="_blank" rel="noreferrer">
                https://{foundUser?.userHandler}.netlify.app/
              </a>
          </div>
          <div className="calendar">Calendar</div>
        </div>
        <div className="followTable">
          <div className="posts"> {foundUsersPosts?.length} Posts</div>
          <div className="following" onClick={followingHandle}>
            {" "}
            {foundUser?.following.length} Following
          </div>
          <div className="follower" onClick={followerHandle}>
          {foundUser?.followers.length} Followers
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
      <div className="posts">
        {foundUsersPosts?.map((post) => (
          <SinglePost key={post?._id} data={post} />
        ))}
        </div>
    </div>
  </div>
  )
}

export default ThirdProfile;
