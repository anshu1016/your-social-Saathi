import React, { useEffect, useState } from "react";
import "./addpost.css";
import { v4 as uuid } from "uuid";

import { useData } from "../../context/DataContext";
import { FiUpload } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { createPostHandler, editPostHandler } from "../../services/DataService";
import { toast } from "react-toastify";
import { AiFillMinusCircle } from "react-icons/ai";

const AddPost = () => {
  const {
    dataState: { postId, posts },
    darkMode,
    dataDispatch,
    setBtnAddPost,
    btnAddPost,
    setIsLoading,
  } = useData();

  const [postDetails, setPostDetails] = useState({
    _id: uuid(),
    content: "",
    file: "",
    comments: [],
  });

  const userToken = localStorage.getItem("userToken");

  const addNoteHandler = () => {
    if (postId) {
      if (postDetails.content.length > 0 || postDetails.file) {
        editPostHandler(postId, postDetails, dataDispatch, userToken);

        dataDispatch({ type: "EDIT_POST", payload: null });
        setBtnAddPost(!btnAddPost);
        toast.success("Post Updated!");
      } else {
        toast.warn("Please add post or photo/gif!");
      }
    } else {
      if (postDetails.content.length > 0 || postDetails.file) {
        createPostHandler(postDetails, userToken, dataDispatch);
        toast.success("Post Added!");
        setBtnAddPost(btnAddPost);

        setPostDetails({
          _id: uuid(),
          content: "",
          file: "",
          comments: [],
        });
      } else {
        toast.warn("Please add post or photo/gif!");
      }
    }
  };

  const fileUploadHandle = (e) => {
    const file = e.target.files[0];

    setIsLoading(false);
    setPostDetails({ ...postDetails, file: URL.createObjectURL(file) });
    toast.success("Post Selected!");
  };

  useEffect(() => {
    const postData = posts?.find(({ _id }) => postId === _id);
    if (postId) {
      setPostDetails(postData);
    } else {
      setPostDetails({
        _id: uuid(),
        content: "",
        file: "",
        comments: [],
      });
    }
  }, [postId]);

  const handleImageRemove = () => {
    setPostDetails({ ...postDetails, file: "" });
    toast.success("Post Removed!");
  };

  const handleBack = () => {
    dataDispatch({ type: "EDIT_POST", payload: null });
    setBtnAddPost(!btnAddPost);
  };

  return (
    <div className="addPostContainer">
      <div className={`addPostCardContainer ${darkMode && "darkMode"}`}>
        <div className="addPostCardBody">
          <textarea
            className="postTextarea"
            placeholder="What's on your mind?"
            value={postDetails.content}
            autoFocus
            onChange={(e) =>
              setPostDetails({ ...postDetails, content: e.target.value })
            }
          ></textarea>
          {postDetails.file && (
            <div className="image-preview-container">
              <div className="image-preview">
                <img src={postDetails.file} alt="img2221" />
                <button
                  className="image-preview-button"
                  onClick={handleImageRemove}
                >
                  <AiFillMinusCircle />
                </button>
              </div>
            </div>
          )}
          <div className="addPostCardOptions">
            <label htmlFor="uploadInput" className="addPostCardOptionButton">
              <FiUpload />
              Upload Photo
            </label>
            <input
              type="file"
              id="uploadInput"
              className="uploadInput"
              onChange={fileUploadHandle}
            />
          </div>
        </div>
        <div className="addPostCardFooter">
          <button className="deleteButton">
            <RiDeleteBinLine />
            Delete
          </button>
          <button className="postButton" onClick={addNoteHandler}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
