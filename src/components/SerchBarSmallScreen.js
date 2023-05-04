import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import "../style/SmallScreenSearch.css";

export const SearchBarSmallScreen = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchParams({ search: searchInput });
      window.location.reload(false);
    }
  };

  const handleChange = (event) => {
    setSearchInput((prevFormData) => {
      return event.target.value;
    });
  };

  return (
    <div className="smallDiv">
      <div className="searchSmallDiv">
        <input
          type="text"
          placeholder="Pretraživanje..."
          className="searchInputElementSmall"
          onKeyDown={handleKeyPress}
          onChange={handleChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="searchIconTwo"
          viewBox="0 0 15 15"
        >
          <path d="m8.5 8.5l2 2M7 9.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z" />
        </svg>
      </div>
    </div>
  );
};
