import React from 'react';
import './commentBox.css';
import { BiArrowBack } from 'react-icons/bi';
import { useData } from '../../context/DataContext';
import { addCommentHandle } from '../../services/DataService';

const CommentBox = () => {
  const {
    commentToggle,
    setCommentToggle,
    commentText,
    setCommentText,
    dataDispatch,
    commentId,
    darkMode,
  } = useData();
  const userToken = localStorage.getItem('userToken');

  const handleAddComment = () => {
    if (commentText) {
      const postid = commentId;
      addCommentHandle(postid, commentText, userToken, dataDispatch);
      setCommentText('');
      setCommentToggle(!commentToggle);
    }
  };

  const handleBack = () => {
    setCommentToggle(!commentToggle);
  };

  return (
    <div className={`commentBoxContainer ${darkMode && 'darkMode'}`}>
      <div className="commentBoxHeader">
        <BiArrowBack className="backIcon" onClick={handleBack} />
      </div>
      <input
        placeholder="Write your comment"
        className="commentInput"
        onChange={(e) => setCommentText(e.target.value)}
        value={commentText}
        autoFocus
      />
      <button className="commentButton" onClick={handleAddComment}>
        COMMENT
      </button>
    </div>
  );
};

export default CommentBox;
