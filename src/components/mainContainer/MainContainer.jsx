// MainContainer.js
import React from 'react';
// import "./main.css";
import { useData } from '../../context/DataContext';
import RequireAuth from '../../Auth/RequireAuth';
import NavBar from '../navBar/NavBar';
import LeftBar from '../leftBar/LeftBar';
import AddPost from '../addPost/AddPost';
import CommentBox from '../commentBox/CommentBox';
import EditProfile from '../../features/profile/editProfile/EditProfile';
import RightBar from '../rightBar/RightBar';

const MainContainer = ({ children }) => {
  const { commentToggle, setEditBtn, editBtn, btnAddPost, darkMode } = useData();

  return (
    <div className="mainnContainer">
      <RequireAuth>
        <NavBar />
        <div className="contentContainer">
          <div className="leftBarr"><LeftBar/></div>
          
          <div className="feedContainer">
            <div className="feed">{children}</div>
            {btnAddPost && <AddPost />}
            {commentToggle && (
              <div className="overComment">
                <CommentBox />
              </div>
            )}
            {editBtn && <div className="editBox-bottom"></div>}
            {editBtn && (
              <div className="editBox-Main">
                <EditProfile setEditBtn={setEditBtn} editBtn={editBtn} />
              </div>
            )}
          </div>
          <div className="rightBarr"><RightBar/></div>
          
        </div>
      </RequireAuth>
    </div>
  );
};

export default MainContainer;
