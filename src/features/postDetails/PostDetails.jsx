import React, { useEffect } from 'react';
import "./postDetails.css";
import { useData } from '../../context/DataContext';
import { useParams } from 'react-router-dom';
import SinglePost from '../../components/singlePost/SinglePost';

const PostDetails = () => {
    const {
        dataState: { posts },
      } = useData();
      const { _id } = useParams();
    
      const { setIsLoading } = useData();
    
      useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }, []);
    
      const postDeatils = posts?.find(
        (post) => post.id.toString() === _id.toString()
      );
    
  return (
    <div>
      <SinglePost data={postDeatils} showComment />
    </div>
  )
}

export default PostDetails;
