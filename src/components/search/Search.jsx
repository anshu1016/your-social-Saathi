import React from 'react'
import "../navBar/navBar.css"
import { useData } from '../../context/DataContext';
import { FaSearch } from 'react-icons/fa';
const Search = () => {
    const { userSearch, setUserSearch } = useData();
  return (
    <div>
       <input type="text" placeholder="Search"  onChange={(e) => setUserSearch(e.target.value)}
        value={userSearch} />
          <FaSearch className="search-icon" />
    </div>
  )
}

export default Search
