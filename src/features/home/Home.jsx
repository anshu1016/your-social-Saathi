import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useData } from "../../context/DataContext";
import AddPost from "../../components/addPost/AddPost";
import { FaTrophy, FaSort } from "react-icons/fa";
import "./home.css";
import SinglePost from "../../components/singlePost/SinglePost";
import { MdOutlineTune } from "react-icons/md";
import RightBar from "../../components/rightBar/RightBar";

const Home = () => {
  const {
    dataState: { posts, users },
    setBtnAddPost,
    btnAddPost,
    setIsLoading,
    darkMode,
  } = useData();
  const [postsType, setPostsType] = useState("latest");
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInUser = users?.find((el) => el.username === socialUser.username);

  const loggedInUserPosts = posts?.filter(
    (post) => post?.username === loggedInUser?.username
  );

  const homePosts = posts?.filter((post) =>
    loggedInUser?.following?.some((el) => el.username === post.username)
  );

  const likedPosts = [...loggedInUserPosts, ...homePosts]?.filter(
    (post) => post?.likes?.likedBy?.length > 0
  );

  const sortPostsByLikes = [...likedPosts]?.sort(
    (a, b) => a.likes.likedBy.length - b.likes.likedBy.length
  );
  const combinedData = [...loggedInUserPosts.reverse(), ...homePosts].reverse();
  const postsByType =
    postsType === "latest"
      ? combinedData.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      : postsType === "oldest"
      ? combinedData.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        )
      : sortPostsByLikes;

  const handleAddPost = () => {
    setBtnAddPost(true);
  };

  const HandleSortBy = (e) => {
    setPostsType(e.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  return (
    <div className="homeContainer">
      <div className="addPostContainer">
        <AddPost />
      </div>
     
      <div className="filters">
        <div className="text">
          {postsType === "trending" && <p>Trending posts</p>}
          {postsType === "latest" && <p>Latest posts</p>}
          {postsType === "oldest" && <p>Oldest posts</p>}
        </div>
        <div className="options">
          <MdOutlineTune className="filter-icon" />
          <select
            name="filter"
            id="filter"
            onClick={HandleSortBy}
            onChange={HandleSortBy}
          >
            <option value="likes" onClick={() => setPostsType("trending")}>
              Trending
            </option>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
      {postsByType.length > 0 ? (
        <div className="postPart">
          {postsByType.map((post) => (
            <SinglePost key={post._id} data={post} />
          ))}
        </div>
      ) : (
        <h2>Please follow some users to see their feeds.</h2>
      )}
    </div>
  );
};

export default Home;
