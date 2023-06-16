import { useEffect, useState } from "react";
import "../style/TitleAndFilter.css";
import { Filter } from "./Filter";
import { useSearchParams } from "react-router-dom";
import { BellClick } from "./BellClick";

export const TitleAndFilter = () => {
  const [active, setActive] = useState(false);
  const [bellClick, setBellClick] = useState(false);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("kategorija");
  const [showBell, setShowBell] = useState(false);
  const [bellPopUp, setBellPopUp] = useState(false);
  const [title, setTitle] = useState(null);

  const handleClick = () => {
    setActive(!active);
  };
  useEffect(() => {
    if (category) {
      setShowBell(true);
      setTitle(category);
    } else {
      setTitle("");
    }
  }, [category]);
  return (
    <div className="naslovFilterSection">
      <div className="naziv">
        {title === "" ? (
          <h2>OBJAVLJENI PROIZVODI</h2>
        ) : (
          category && <h2>{category.toUpperCase()}</h2>
        )}
        {category && (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={bellClick ? "bellIconClick" : "bellIcon"}
              onClick={() => {
                console.log(bellPopUp);
                setBellPopUp(true);
                console.log(bellPopUp);
              }}
              viewBox="0 0 24 24"
            >
              <path d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6l2 2m-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2" />
            </svg>
          </span>
        )}
        {bellPopUp && (
          <BellClick
            category={category}
            bellClick={bellClick}
            setBellClick={setBellClick}
            setBellPopUp={setBellPopUp}
          />
        )}
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
