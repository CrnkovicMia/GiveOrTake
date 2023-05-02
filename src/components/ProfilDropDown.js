import { Link } from "react-router-dom";
import '../style/ProfilDropDown.css';

export const ProfilDropDown = () =>{
    return(
        <div className="dropdow">
           <Link to="/profil"><div className="korisnickiprofil">Profil</div></Link>
            <div className="logout">LogOut</div>
        </div>
    );
};