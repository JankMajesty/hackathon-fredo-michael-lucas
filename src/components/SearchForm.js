import React, { useState, useEffect } from "react";


export default function SearchForm({ SearchForm }) {
  const [searchTerm, setSearchTerm] = useState ("");
  const [searchResults, setSearchResults] = useState([])
 
  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return(
    <div>
    <form onSubmit={handleSubmit}>
      <label>Search</label>
        <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange}></input>
    </form>
  </div>
  );
}