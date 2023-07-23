import React from "react";
import "./bookmark.css";
import { useEffect } from "react";
import { useData } from "../../context/DataContext";
import SinglePost from "../../components/singlePost/SinglePost";
 const BookMark = () => {
  const {
    dataState: { users, posts },
    setIsLoading,
    darkMode,
  } = useData();
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));

  const loggedInUser = users?.find(
    ({ username }) => username === socialUser.username
  );
  const newBookmark = posts?.filter(({ _id }) =>
    loggedInUser?.bookmarks.includes(_id)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);
  return (
    <div className="bookMarkContainer">
      {newBookmark?.length > 0 ? (
        newBookmark.map((data) => <SinglePost data={data} key={data._id} />)
      ) : (
        <p className="heading">
          No bookmarks available.
        </p>
      )}
    </div>
  );
};

export {BookMark}