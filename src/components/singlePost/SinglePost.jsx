import React, { useState, useEffect } from "react";
import "./singlePost.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiFillHeart, AiOutlineDelete, AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { FaEdit, FaRegComment, FaTrash } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import {
  deleteCommentHandle,
  deletePostHandle,
  getBookMark,
  getDislikeData,
  getRemoveBookmarkData,
  getlikeData,
} from "../../services/DataService";
import { useData } from "../../context/DataContext";

const SinglePost = ({ data, showComment }) => {
  const [menuBtn, setMenuBtn] = useState(false);

  const {
    dataState: { users },
    dataDispatch,
    setBtnAddPost,
    btnAddPost,
    setCommentText,
    commentToggle,
    setCommentToggle,
    setCommentId,
    darkMode,
  } = useData();

  const userToken = localStorage.getItem("userToken");
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInuser = users?.find(
    ({ username }) => username === socialUser.username
  );

  const isBookmark = loggedInuser?.bookmarks?.includes(data?._id);
  const handleLike = () => {
    getlikeData(data._id, dataDispatch, userToken);
  };
  const handledisLike = () => {
    getDislikeData(data._id, dataDispatch, userToken);
  };
  const btnLike = data?.likes?.likedBy?.some(
    (ele) => ele.username === socialUser.username
  );
  const navigate = useNavigate();

  const handleClick = (userHandler) => {
    const viewUser = userHandler === socialUser.userHandler;
    console.log(userHandler, "userHandler");
    if (!viewUser) {
      navigate(`/profile/${userHandler}`);
    } else {
      navigate(`/profile`);
    }
  };
  const handleBookmark = () => {
    getBookMark(dataDispatch, userToken, data?._id, socialUser.username);
    toast.success("Added To Bookmark Successfully");
  };
  const handleRemoveBookmark = () => {
    getRemoveBookmarkData(
      dataDispatch,
      userToken,
      data?._id,
      socialUser.username
    );
    toast.success("Removed from Bookmark!");
  };
  const handleProductDetailClick = (postId) => {
    navigate(`/post/${data.id}`);
  };

  const handleDeleteComment = (commentId, commentData) => {
    deleteCommentHandle(
      data?._id,
      commentId,
      commentData,
      userToken,
      dataDispatch
    );
    setCommentText("");
  };
  const handleDeletePost = (postId) => {
    deletePostHandle(postId, dataDispatch, userToken);
    setMenuBtn(!menuBtn);
    toast.success("Post Deleted successful!");
  };

  const handleEditPost = (postId) => {
    dataDispatch({ type: "EDIT_POST", payload: postId });
    setBtnAddPost(!btnAddPost);
    setMenuBtn(!menuBtn);
  };
  const handleShare = () => {
    navigator.clipboard.writeText(
      `https://speedysocial.netlify.app/post/${data?.id}`
    );

    toast.success("Copied To Clipboard");
  };

  const handleMenuClick = () => {
    setMenuBtn(!menuBtn);
  };
  const handleCommentEnable = () => {
    setCommentId(data._id);
    setCommentToggle(!commentToggle);
  };
  const handleBack = () => {
    setBtnAddPost(false);
    navigate("/");
  };

  const userDetails = users?.find((el) => el.username === data.username);
  const formattedCreatedAt = new Date(data?.createdAt).toLocaleDateString();
  const createTime = new Date(data?.createdAt).toLocaleTimeString();

  return (
    <div className="mainPostContainer">
      
      <div className="innerBlock">
      {showComment && (
              <div>
                <IoMdArrowRoundBack
                  className="logo-back-addPost"
                  onClick={handleBack}
                  style={{cursor:"pointer",fontSize:"28px"}}
                />
              </div>
            )}
        <div className="headingBlock">
       
          <div className="userDetails">
            <div className="user">
              <img
                src={userDetails?.profilePic}
                alt="profilePic"
                onClick={() => handleClick(userDetails?.userHandler)}
              />
              <div
                className="userName"
                onClick={() => handleClick(userDetails?.userHandler)}
              >
                <h4>
                  {userDetails?.firstName} {userDetails?.lastName}
                </h4>
                <p onClick={() => handleClick(userDetails?.userHandler)}>
                  @{userDetails?.userHandler}
                </p>
                <div className="calendar">
                  <p>
                    {formattedCreatedAt} {createTime}
                  </p>
                </div>
              </div>
            </div>
            </div>
            <div className="menuIcon">
            {socialUser.username === userDetails?.username && (
              <div className={`setting  ${darkMode && "bgSecondaryDarkMode"}`}>
                {menuBtn ? (
                  <RxCross2
                    onClick={() => setMenuBtn(!menuBtn)}
                    className={`setting-icon  ${
                      darkMode && "bgSecondaryDarkMode"
                    }`}
                  />
                ) : (
                  <CiMenuKebab
                    onClick={handleMenuClick}
                    className={`setting-icon  ${
                      darkMode && "bgSecondaryDarkMode"
                    }`}
                  />
                )}
              </div>
            )}
            {menuBtn && (
              <div
                className={`btn-postEdit  ${darkMode && "bgSecondaryDarkMode"}`}
              >
                <button
                  className={`post-delete  ${
                    darkMode && "bgSecondaryDarkMode"
                  }`}
                  onClick={() => handleDeletePost(data?._id)}
                >
                  <AiOutlineDelete />
                </button>
                <button
                  className={`post-edit  ${darkMode && "bgSecondaryDarkMode"}`}
                  onClick={() => handleEditPost(data?._id)}
                >
                  <FaEdit />
                </button>
              </div>
            )}
            
          </div>
        </div>
        <div className="text">
          <p onClick={() => handleProductDetailClick(data?._id)}>
            {data?.content}
          </p>
        </div>
        {data?.file&&
        <div
          className="imageContainer"
          onClick={() => handleProductDetailClick(data?._id)}
        >
          <img src={data?.file} alt="postImage" />
        </div>}
        <hr />
        <div className="postBottom">
          <div className="buttons">
            {btnLike ? (
              <span onClick={handledisLike}>
                <AiFillHeart />
                {data?.likes.likeCount}
              </span>
            ) : (
              <span onClick={handleLike}>
                <AiOutlineHeart />
                {data?.likes?.likeCount}
              </span>
            )}
          </div>
          <div className="buttons" onClick={handleCommentEnable}>
            <FaRegComment />
            {data?.comments?.length}
          </div>
          <div className="buttons">
            {isBookmark ? (
              <span onClick={handleRemoveBookmark}>
                <BsBookmarkFill />
              </span>
            ) : (
              <span onClick={handleBookmark}>
                <BsBookmark />
              </span>
            )}
          </div>
          <div className="buttons" onClick={handleShare}>
            <BiShareAlt />
          </div>
        </div>
        {!showComment && (
          <p
            className={`allComments flex pointer ${
              darkMode && "bgSecondaryDarkMode"
            }`}
            onClick={() => handleProductDetailClick(data?._id)}
          >
            view {data?.comments?.length} comments
          </p>
        )}
        {showComment && (
          <div>
            {data?.comments?.map((comment) => {
              const currentUser = users?.find(
                (user) => user?.username === comment?.username
              );
              const deleteOnlyYoursCmnt =
                socialUser?.username === comment?.username;
              return (
                <div
                  className={`comments-added ${darkMode && "bgDarkmode"}`}
                  key={comment._id}
                >
                  <img
                    src={currentUser.profilePic}
                    alt="img1"
                    className={`single-profile-photo-comment ${
                      darkMode && "bgDarkmode"
                    }`}
                  />
                  <div
                    className={`comments-add-by-user ${
                      darkMode && "bgDarkmode"
                    }`}
                  >
                    <div className={`deleteFlex ${darkMode && "bgDarkmode"}`}>
                      <p className={`user-name ${darkMode && "bgDarkmode"}`}>
                        {currentUser.firstName} {currentUser.lastName}
                      </p>
                      {deleteOnlyYoursCmnt && (
                        <FaTrash
                          className={`delete-icon ${darkMode && "bgDarkmode"}`}
                          onClick={() =>
                            handleDeleteComment(comment._id, comment.text)
                          }
                        />
                      )}
                    </div>
                    <p className={`comment-text ${darkMode && "bgDarkmode"}`}>
                      {comment?.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
