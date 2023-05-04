import "../style/Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footerDiv">
        <div className="socialMedia">
          <h4>Zapratite nas na društvenim mrežama</h4>
          <div className="SocialMediaIcon">
            <Link to="">
              <img
                src={require("../images/facebook.png")}
                alt="facebook"
                className="facebookImage cursors"
              />
            </Link>
            <Link to="">
              <img
                src={require("../images/instagram.png")}
                alt="instagram"
                className="instagramImage cursors"
              />
            </Link>
          </div>
        </div>
        <div className="SiteMap">
          <ul className="SiteMapUl">
            <li>
              <h4 className="siteMapName">SiteMap</h4>
            </li>
            <li>
              <Link to="/" className="footerSiteMap cursors">
                Naslovnica
              </Link>
            </li>
            <li>
              <Link to="/login" className="footerSiteMap cursors">
                Registracija/Login
              </Link>
            </li>
            <li>
              <Link to="/onama" className="footerSiteMap cursors">
                O Nama
              </Link>
            </li>
          </ul>
        </div>
        <div className="kontakt">
          <h4 className="siteMapName">Kontakt</h4>
          <p className="emailFooter footerSiteMap">email: got@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
