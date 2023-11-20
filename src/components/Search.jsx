import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Search = () => {
    const searchData=[{component:"texts",to:"/components/texts"},{component:"images",to:"/components/images"},{component:"cards",to:"/components/cards"},{component:"Avatars",to:"/components/avatars"},{component:"Buttons",to:"/components/buttons"},{component:"Headings",to:"/components/headings"}]
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = searchData.filter(item =>
      item.component.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };
  useEffect(()=>{
    handleSearch();
  },[searchTerm,setSearchTerm])

  return (
    <div className="search-modal">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    
      <div className="search-results">
        {searchTerm && searchResults.map((result, index) => (
          <div key={index} className="search-result">
            <Link to={result.to}>{result.component}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};


