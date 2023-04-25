import '../style/Login.css'
import {LoginFunction} from './LoginFunction.js';
import { useState } from 'react';

export const Login = () =>{
    const [modal, setModal] = LoginFunction();
    const [log, setLog] = useState(false);

    return (<div>
        {!modal &&
        <div>
        {
            !log ? 
            <div className="modal">
                 <div onClick={setModal} className="overlay"></div>
                 <div className="modal-content">
                 <div class="popup">
               <div className="type">Prijava</div> 
               <div className="typeButton">
                   <button className="prijavaButton">Prijava</button>
                   <button className="registracijaButton" onClick={()=>{setLog(!log)}}>Registracija</button>
               </div>
               <div className="googleSignUp">
                   <button className="googleButton">
                       <span className="googleImage"><img src={require('../images/google.png')} className="googleImageImg"/></span>
                      <span className="googleText">Continue with Google</span>
                   </button>
               </div>
               <h5><span>ili putem maila</span></h5>
               <div className="input">
                   <input type="email" placeholder="Email" className="emailInput"/>
                   <input type="password" placeholder="Lozinka" className="passInput"/>
               </div>
               <div className="loginButton">
                   <button className="loginButtonB">Prijavi se</button>
               </div>
           </div>
                 </div>
               </div>
               :
               <div className="modal">
               <div onClick={setModal} className="overlay"></div>
               <div className="modal-content">
               <div className="popup">
             <div className="type">Registracija</div>
             <div className="typeButton">
                 <button className="prijavaButtonReg" onClick={()=>{setLog(!log)}}>Prijava</button>
                 <button className="registracijaButtonReg">Registracija</button>
             </div>
             <div className="googleSignUp">
                 <button className="googleButton">
                     <span className="googleImage"><img src={require('../images/google.png')} className="googleImageImg"/></span>
                    <span className="googleText">Continue with Google</span>
                 </button>
             </div>
             <h5><span>ili putem maila</span></h5>
             <div className="inputPersonal">
                 <input type="text" placeholder="Ime" className="emailInput"/>
                 <input type="text" placeholder="Prezime" className="passInput"/>
             </div>
             <div className="input">
                 <input type="email" placeholder="Email" className="emailInput"/>
                 <input type="password" placeholder="Lozinka" className="passInput"/>
             </div>
             <div className="loginButton">
                 <button className="loginButtonB">Registriraj se</button>
             </div>
         </div>
               </div>
             </div>
        }
        </div>
    }
    </div>);
};