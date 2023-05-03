import { Link } from "react-router-dom";
import '../style/ProfilDropDown.css';
import { supabase } from '../lib/supabaseClient';
import {  useNavigate } from 'react-router-dom';
import {LoginFunction} from './LoginFunction.js';

export const ProfilDropDown = () =>{
    const [modal, setModal] = LoginFunction();
    const navigate = useNavigate();

    const logOut = async() => {
        await supabase.auth.signOut();
        setModal()
        navigate("/")
    } 

    return(
        <div className="dropdow">
           <Link to="/profil"><div className="korisnickiprofil">Profil</div></Link>
            <div className="logout" onClick={()=>{logOut()}}>LogOut</div>
        </div>
    );
};