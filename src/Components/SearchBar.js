import React, { useState } from "react";
import "../App.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.productName.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  return (
    <div className="search-container">
      <div className="search-input">
        <input
          type="text"
          id="input"
          placeholder={placeholder}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {" "}
          <SearchIcon />{" "}
        </div>
        <button>Search</button>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return <div className="dataItem"> {value.productName} </div>;
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
