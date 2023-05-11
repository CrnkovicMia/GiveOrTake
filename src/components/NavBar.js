import "../style/Navigation.css";
import "../style/Login.css";
import "../style/Swiper.css";

import { Link, useSearchParams, NavLink } from "react-router-dom";
import { LoginFunction } from "./LoginFunction.js";
import { ProfilDropDown } from "./ProfilDropDown";
import { SearchBarSmallScreen } from "./SerchBarSmallScreen";

import { Login } from "./Login";
import { Hamburger } from "./Menu";

import { useEffect, useState } from "react";

export const NavBar = (props) => {
  const [modal, setModal] = LoginFunction();

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState();

  const [searchDrop, setSearchDrop] = useState(false);
  const handleSearchClick = () => {
    setSearchDrop(!searchDrop);
  };

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

  const [profilClick, setProfilClick] = useState(false);
  const handeProfilClick = () => {
    setProfilClick(!profilClick);
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  const [iteWidth, setItemWidth] = useState(126);
  const outerContainer = document.getElementsByClassName("outer-container")[0];

  const handleNextClick = () => {
    outerContainer.scrollBy(iteWidth, 0);
  };
  const handlePrevClikc = () => {
    outerContainer.scrollBy(-iteWidth, 0);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 480 && window.innerWidth < 559.99) {
        setItemWidth(153);
      }
      if (window.innerWidth >= 560 && window.innerWidth < 768.99) {
        setItemWidth(165);
      }
      if (window.innerWidth >= 768 && window.innerWidth < 849.99) {
        setItemWidth(98);
      }
      if (window.innerWidth >= 850 && window.innerWidth < 1023.99) {
        setItemWidth(110);
      }
      if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
        setItemWidth(120);
      }
      if (window.innerWidth >= 1280) {
        setItemWidth(125);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navigacija">
      {modal && <Login />}
      {searchDrop && <SearchBarSmallScreen />}
      <div className="header">
        <div className="navTop">
          <Link to={"/"}>
            <div className="logoSection">
              <img
                src={require("../images/logo.png")}
                className="logoImage"
                alt="logo"
              />
            </div>
          </Link>
          <div className="loginNewPostSection">
            <span
              onClick={() => {
                handleSearchClick();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="searchIconHide"
                viewBox="0 0 24 24"
              >
                <path d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z" />
              </svg>
            </span>
            <Hamburger user={props.sessionUser} />
            <label className="pagesLink pagesLinkNaslovnica">
              <NavLink to="/" id="gumb" activeClassName="active">
                Naslovnica
              </NavLink>
            </label>
            <label className="pagesLink pagesLinkOnama">
              {" "}
              <NavLink to="/onama" activeClassName="active">
                O nama
              </NavLink>
            </label>
            <label className="pagesLink">
              <Link to="/novaObjava">
                {" "}
                <button className="novaObjavaButton cursors">
                  <span className="plusSignIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
                    </svg>
                  </span>
                  <span>Nova objava</span>
                </button>
              </Link>
            </label>
            {props.sessionUser ? (
              <div
                className="loginImageDiv"
                /*onClick={setModal}*/ onClick={() => {
                  handeProfilClick();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m15 12l-4-4m4 4l-4 4m4-4H5m5 9a9 9 0 1 0 0-18"
                  />
                </svg>
                {profilClick && <ProfilDropDown />}
              </div>
            ) : (
              <div className="loginImageDiv" onClick={setModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="loginImage cursors"
                  viewBox="0 0 256 256"
                >
                  <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24ZM74.08 197.5a64 64 0 0 1 107.84 0a87.83 87.83 0 0 1-107.84 0ZM96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32Zm97.76 66.41a79.66 79.66 0 0 0-36.06-28.75a48 48 0 1 0-59.4 0a79.66 79.66 0 0 0-36.06 28.75a88 88 0 1 1 131.52 0Z" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="categoryHeader">
        <div className="navBottom">
          <div className="categoryList">
            <label className="categoryLink">
              <Link to="/?kategorija=Odjeća">Odjeća</Link>
            </label>
            <label className="categoryLink">
              <Link to="/?kategorija=Obuća">Obuća</Link>
            </label>
            <label className="categoryLink">
              <Link to="/?kategorija=Igračke">Igračke</Link>
            </label>
            <label className="categoryLink">
              <Link to="/?kategorija=Za dom">Za dom</Link>
            </label>
            <label className="categoryLink">
              <Link to="/?kategorija=Tehnologija">Tehnologija</Link>
            </label>
            <label className="categoryLink">
              <Link to="/?kategorija=Novorođenčad">Novorođenčad</Link>
            </label>
            <label className="categoryLink">
              <Link to="/?kategorija=Sport i oprema">Sport i oprema</Link>
            </label>
            <label className="categoryLink">
              <Link to="/?kategorija=Kućni ljubimci">Kućni ljubimci</Link>
            </label>
            <label className="categoryLink">
              <Link to="/?kategorija=Literatura">Literatura</Link>
            </label>
            <label className="categoryLink">
              <Link to="/?kategorija=Ostalo">Ostalo</Link>
            </label>
          </div>
          <div className="slideList">
            <div className="bar">
              <button
                type="button"
                className="button"
                id="button-prev"
                onClick={handlePrevClikc}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m11 18l-6-6l6-6l1.4 1.4L7.825 12l4.575 4.6L11 18Zm6.6 0l-6-6l6-6L19 7.4L14.425 12L19 16.6L17.6 18Z"
                  />
                </svg>
              </button>
              <div className="outer-container">
                <div className="category">
                  {" "}
                  <Link to="/?kategorija=Odjeća">Odjeća</Link>
                </div>
                <div className="category">
                  {" "}
                  <Link to="/?kategorija=Obuća">Obuća</Link>
                </div>
                <div className="category">
                  {" "}
                  <Link to="/?kategorija=Igračke">Igračke</Link>
                </div>
                <div className="category">
                  {" "}
                  <Link to="/?kategorija=Za dom">Za dom</Link>
                </div>
                <div className="category">
                  {" "}
                  <Link to="/?kategorija=Tehnologija">Tehnologija</Link>
                </div>
                <div className="category">
                  {" "}
                  <Link to="/?kategorija=Novorođenčad">Novorođenčad</Link>
                </div>
                <div className="category">
                  {" "}
                  <Link to="/?kategorija=Sport i oprema">Sport i oprema</Link>
                </div>
                <div className="category">
                  {" "}
                  <Link to="/?kategorija=Kućni ljubimci">Kućni ljubimci</Link>
                </div>
                <div className="category">
                  <Link to="/?kategorija=Literatura">Literatura</Link>
                </div>
                <div className="category">
                  {" "}
                  <Link to="/?kategorija=Ostalo">Ostalo</Link>
                </div>
              </div>
              <button
                type="button"
                className="button"
                id="button-next"
                onClick={() => {
                  handleNextClick();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.4 18L5 16.6L9.575 12L5 7.4L6.4 6l6 6l-6 6Zm6.6 0l-1.4-1.4l4.575-4.6L11.6 7.4L13 6l6 6l-6 6Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Pretraživanje..."
              className="searchInputElement"
              onKeyDown={handleKeyPress}
              onChange={handleChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="searchIcon"
              viewBox="0 0 15 15"
            >
              <path d="m8.5 8.5l2 2M7 9.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
