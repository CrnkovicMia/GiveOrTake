import { useState } from "react";
import "../style/TitleAndFilter.css";
import { Filter } from "./Filter";

export const TitleAndFilter = () => {
  const [active, setActive] = useState(false);
  const [bellClick, setBellClick] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="naslovFilterSection">
      <div className="naziv">
        <h2>NAJNOVIJI PROIZVODI</h2>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={bellClick ? "bellIconClick" : "bellIcon"}
            onClick={() => {
              setBellClick(!bellClick);
            }}
            viewBox="0 0 24 24"
          >
            <path d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6l2 2m-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2" />
          </svg>
        </span>
      </div>
      <div className="filter">
        <button className="filterButton cursors">
          <img
            src={require("../images/filter.png")}
            alt="filter"
            className="slikaFilter"
          />
          <div
            className="filterSortDiv"
            onClick={() => {
              handleClick();
            }}
          >
            Filter&Sort
          </div>
        </button>
      </div>
      {active && <Filter />}
    </div>
  );
};
