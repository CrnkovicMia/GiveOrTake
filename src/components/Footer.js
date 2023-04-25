import '../style/Footer.css';
import {Link} from "react-router-dom";

export const Footer = () =>{
    return (<div class="footer">
    <div class="footerDiv">
        <div class="socialMedia">
            <h4>Zapratite nas na društvenim mrežama</h4>
            <div class="SocialMediaIcon">
                <Link to=""><img src={require('../images/facebook.png')} alt="facebook" class="facebookImage cursors"/></Link>
                <Link to=""><img src={require('../images/instagram.png')} alt="instagram" class="instagramImage cursors"/></Link>
            </div>
        </div>
        <div class="SiteMap">
            <ul class="SiteMapUl">
                <li><Link to="/"><h4 class="siteMapName">SiteMap</h4></Link></li>
                <li><Link to="/" class="footerSiteMap cursors">Naslovnica</Link></li>
                <li><Link to="/" class="footerSiteMap cursors">Proizvod</Link></li>
                <li><Link to="/" class="footerSiteMap cursors">Registracija/Login</Link></li>
                <li><Link to="/" class="footerSiteMap cursors">O Nama</Link></li>
            </ul>
        </div>
        <div class="kontakt">
            <h4 class="siteMapName">Kontakt</h4>
            <p class="emailFooter footerSiteMap">email: got@gmail.com</p>
        </div>
    </div>
</div>);
}