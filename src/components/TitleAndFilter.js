import { useState } from "react";
import "../style/TitleAndFilter.css";
import { Filter } from "./Filter";
export const TitleAndFilter = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="naslovFilterSection">
      <div className="naziv">
        <h2>NAJNOVIJI PROIZVODI</h2>
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
