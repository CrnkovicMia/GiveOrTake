import '../style/Navigation.css';
import '../style/Login.css';
import {Link} from "react-router-dom";
import {LoginFunction} from './LoginFunction.js';
import { Login } from './Login';

export const NavBar = () =>{
    const [modal, setModal] = LoginFunction();

    return(
    <div className="navigacija">
             {modal && <Login/>} 
        <div className="header">
        <div className="navTop">
            <div className="logoSection">
                <img src={require('../images/logo.png')} className="logoImage" alt="logo"/>
            </div>
            <div className="loginNewPostSection">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        class="hamburgerMenu"
                         viewBox="0 0 16 16">
                     <path d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/>
                    </svg>
                <label className="pagesLink pagesLinkNaslovnica"><Link to="/">Naslovnica</Link></label> 
                <label className="pagesLink pagesLinkOnama"> <Link to="/">O nama</Link></label>
                <label className="pagesLink">
                    <button className="novaObjavaButton cursors">
                        <span className="plusSignIcon">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24">
                            <path d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/></svg>
                        </span>
                    <span>Nova objava</span>
                    </button>
                </label>
                <div className="loginImageDiv" onClick={setModal}>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="loginImage cursors"
                    viewBox="0 0 256 256">
                    <path
                        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24ZM74.08 197.5a64 64 0 0 1 107.84 0a87.83 87.83 0 0 1-107.84 0ZM96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32Zm97.76 66.41a79.66 79.66 0 0 0-36.06-28.75a48 48 0 1 0-59.4 0a79.66 79.66 0 0 0-36.06 28.75a88 88 0 1 1 131.52 0Z"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div className="categoryHeader">
        <div className="navBottom">
            <div className="categoryList">
                <label className="categoryLink"><Link to="/">Odjeća</Link></label>
                <label className="categoryLink"><Link to="/">Obuća</Link></label>
                <label className="categoryLink"><Link to="/">Igračke</Link></label>
                <label className="categoryLink"><Link to="/">Za dom</Link></label>
                <label className="categoryLink"><Link to="/">Tehnologija</Link></label>
                <label className="categoryLink"><Link to="/">Novorođenčad</Link></label>
                <label className="categoryLink"><Link to="/">Sport i oprema</Link></label>
                <label className="categoryLink"><Link to="/">Kućni ljubimci</Link></label>
                <label className="categoryLink"><Link to="/">Literatura</Link></label>
                <button className="showMoreButton"><img src={require('../images/showMoreArrow.png')} alt="showMore" className="showMoreImage"/></button>
            </div>
            <div className="searchInput">
                <input type="text" placeholder="Pretraživanje..." className="searchInputElement"/>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="searchIcon"
                    viewBox="0 0 15 15">
                        <path d="m8.5 8.5l2 2M7 9.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"/>
                </svg>
            </div>
        </div>
    </div> 
    </div>
    );
};