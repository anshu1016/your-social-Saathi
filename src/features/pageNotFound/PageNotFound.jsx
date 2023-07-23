import React from 'react';
import { Link } from 'react-router-dom';
import "./pageNotFound.css";
// import './PageNotFound.css';
import { useData } from '../../context/DataContext';

export const PageNotFound = () => {
  const {darkMode} =useData()
  return (
    <div className='main'>
        <h2>THis URL doesn't exit.</h2>
        <h1>
            <Link to="/"> Go to HomePage</Link>
           
        </h1>
    </div>
  );
};