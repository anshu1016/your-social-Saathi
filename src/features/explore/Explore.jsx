import React, { useEffect } from 'react';
import "./explore.css";
import { useData } from '../../context/DataContext';
import SinglePost from '../../components/singlePost/SinglePost';

const Explore = () => {
    const { dataState: { posts } ,setIsLoading,darkMode} = useData();

    useEffect(()=>{
      window.scrollTo(0, 0)
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 300)
    },[])
  return (
    <div>
       {
        [...posts]?.reverse()?.map(post =>  <SinglePost key={post._id} data={post}/>)
      }
    </div>
  )
}
// <SinglePost key={post._id} data={post}
export default Explore;
