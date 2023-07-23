import React, { useState } from "react";
import "./editProfile.css";
import { AiFillCamera } from "react-icons/ai";
import { useData } from "../../../context/DataContext";
import { RxCross2 } from "react-icons/rx";
import { editUserHandler } from "../../../services/DataService";
import { toast } from "react-toastify";

const EditProfile = ({ setEditBtn, editBtn }) => {
  const {
    dataState: { users },
    dataDispatch,
  } = useData();

  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const userToken = localStorage.getItem("userToken");
  const loggedInUser = users?.find((el) => el.username === socialUser.username);

  const [updatedProfile, setUpdatedProfile] = useState({
    profilePic: loggedInUser.profilePic,
    firstName: loggedInUser.firstName,
    lastName: loggedInUser.lastName,
    link: loggedInUser.link,
    bio: loggedInUser.bio,
  });

  const handleImageUpload = (e) => {
    const selectedImg = e.target.files[0];
    setUpdatedProfile((prev) => ({
      ...prev,
      profilePic: URL.createObjectURL(selectedImg),
    }));
  };

  const handleClose = () => {
    setEditBtn(!editBtn);
  };

  const handleUpdate = () => {
    editUserHandler(updatedProfile, userToken, dataDispatch);
    setEditBtn(!editBtn);
    toast.success("Post Updated!");
  };

  const updateDetails = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prev) => ({ ...prev, [name]: value }));
  };

  const { firstName, lastName, link, bio } = updatedProfile;

  return (
    <div className="editBox">
      <div className="headerBox">
        <div className="text">Edit</div>
        <div className="button" onClick={handleClose}><RxCross2/></div>
      </div>
      <div className="form">
        <div className="groups">
          <p>Avatar:</p>
          <label htmlFor="file-upload" className="btn-upload">
            <img
              src={updatedProfile.profilePic}
              alt=""
              className="edit-profile-icon"
            />
            <span className="edit-profile-camera-icon">
              <AiFillCamera />
            </span>
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleImageUpload}
          />
        </div>
        <div className="row">
          <div className="groups">
            <label className="labelUpdateProfile">
              First Name:
              <input
                type="text"
                name="firstName"
                onChange={updateDetails}
                value={firstName}
                className="inputp"
              />
            </label>
          </div>
          <div className="groups">
            <label className="labelUpdateProfile">
              Last Name:
              <input
                type="text"
                name="lastName"
                onChange={updateDetails}
                value={lastName}
                className="inputp"
              />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="groups">
            <label className="labelUpdateProfile">
              Link:
              <input
                type="text"
                name="link"
                onChange={updateDetails}
                value={link}
                className="inputp"
              />
            </label>
          </div>
          <div className="groups">
            <label className="labelUpdateProfile">Bio:</label>
            <textarea
              placeholder="bio"
              className="editPost-input"
              onChange={updateDetails}
              name="bio"
              value={bio}
            />
          </div>
        </div>
        <div className="button">
          <button className="updateBtn" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
