import '../style/Login.css'
import { LoginFunction } from './LoginFunction';
import {LoginRegFun} from './LoginRegFun.js';
import { Login} from './Login';

export const Registration = () =>{
    const [modal, setModal] = LoginFunction();
    const [log, setLog] = LoginRegFun();

    return (<div>
        {!modal &&
        <div>
            {
                log ?
                <div className="modal">
                     <div onClick={setModal} className="overlay"></div>
                     <div className="modal-content">
                     <div class="popup">
                   <div class="type">Registracija</div>
                   <div class="typeButton">
                       <button class="prijavaButton">Registracija</button>
                       <button class="registracijaButton" onclick={setLog}>Prijava</button>
                   </div>
                   <div class="googleSignUp">
                       <button class="googleButton">
                           <span class="googleImage"><img src={require('../images/google.png')} class="googleImageImg"/></span>
                          <span class="googleText">Continue with Google</span>
                       </button>
                   </div>
                   <h5><span>ili putem maila</span></h5>
                   <div class="inputPersonal">
                       <input type="text" placeholder="Ime" class="emailInput"/>
                       <input type="text" placeholder="Prezime" class="passInput"/>
                   </div>
                   <div class="input">
                       <input type="email" placeholder="Email" class="emailInput"/>
                       <input type="password" placeholder="Lozinka" class="passInput"/>
                   </div>
                   <div class="loginButton">
                       <button class="loginButtonB">Registriraj se</button>
                   </div>
               </div>
                     </div>
                   </div>
                   :
                   <Login/>
            }
            </div>
    }
    </div>);
};