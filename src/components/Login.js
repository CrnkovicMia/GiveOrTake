import '../style/Login.css'
import {LoginFunction} from './LoginFunction.js';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Navigate, useNavigate } from 'react-router-dom';

export const Login = () =>{
    const [modal, setModal] = LoginFunction();
    const [log, setLog] = useState(false);

    const [loginInfo, setLoginInfo] = useState({email: '' , password: ''})
    const [registerInfo, setRegisterInfo] = useState({email: '' , password: ''})

    const navigate = useNavigate();



    const loginGoogle = async() => {
        await supabase.auth.signInWithOAuth({
          provider: 'google'
        })
      }

    {/*LOG OUT */}  
    const logOut = async() => {
        await supabase.auth.signOut();
        setModal()
        navigate("/")
    } 

    {/*LOGIN MAIL */}  
    function handleChangeLogin(event){
        setLoginInfo(prevFormData =>{
        return {
            ...prevFormData,
            [event.target.name]:event.target.value,
        }
        })
        console.log(loginInfo)
    }

    const loginEmail = async() => {
        setModal()
        const { data, error } = await supabase.auth.signInWithPassword({
        email: loginInfo.email,
        password: loginInfo.password,
        })
        
    } 


     {/*REGISTER */}
    const signUp = async() => {
        console.error("Registracija")
        navigate("/")
        const { data, error } = await supabase.auth.signUp({
        email: registerInfo.email,
        password: registerInfo.password,
        }) 
        
        
    }

    function handleChangeRegister(event){
    setRegisterInfo(prevFormData =>{
      return {
        ...prevFormData,
        [event.target.name]:event.target.value,
      }
    })
  }

    return (<div>
        {!modal &&
        <div>
        {
            !log ? 
            <div className="modal">
                 <div onClick={setModal} className="overlay"></div>
                 <div className="modal-content">
                 <div class="popup">
               <div class="type">Prijava</div> 
               <div class="typeButton">
                   <button class="prijavaButton">Prijava</button>
                   <button class="registracijaButton" onClick={()=>{setLog(!log)}}>Registracija</button>
               </div>
               <div class="googleSignUp">
                   <button class="googleButton" onClick={loginGoogle}>
                       <span class="googleImage"><img src={require('../images/google.png')} class="googleImageImg"/></span>
                      <span class="googleText">Continue with Google</span>
                   </button>
               </div>
               <h5><span>ili putem maila</span></h5>
                <div class="input">
                    <input type="email" placeholder="Email" class="emailInput" name='email' onChange={handleChangeLogin}/>
                    <input type="password" placeholder="Lozinka" class="passInput" name='password' onChange={handleChangeLogin}/>
                </div>
                <div class="loginButton">
                    <button class="loginButtonB"  onClick={loginEmail}>Prijavi se</button>
                </div>
               <div class="loginButton" onClick={logOut}>
                   <button class="loginButtonB">Odjavi se</button>
               </div>   
            {/*  <span className="close-modal" onClick={setModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-42.34 122.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32L139.31 128Z"/>
                        </svg>
                      </span>*/}
           </div>
                 </div>
               </div>
               :
               <div className="modal">
               <div onClick={setModal} className="overlay"></div>
               <div className="modal-content">
               <div class="popup">
             <div class="type">Registracija</div>
             <div class="typeButton">
                 <button class="prijavaButtonReg" onClick={()=>{setLog(!log)}}>Prijava</button>
                 <button class="registracijaButtonReg">Registracija</button>
             </div>
             <div class="googleSignUp">
                 <button class="googleButton" onClick={loginGoogle}>
                     <span class="googleImage"><img src={require('../images/google.png')} class="googleImageImg"/></span>
                    <span class="googleText">Continue with Google</span>
                 </button>
             </div>
             <h5><span>ili putem maila</span></h5>
             <form onSubmit={signUp}>
                <div class="inputPersonal">
                    <input type="text" placeholder="Ime" class="emailInput" />
                    <input type="text" placeholder="Prezime" class="passInput"/>
                </div>
                <div class="input">
                    <input type="email" placeholder="Email" class="emailInput" name="email" onChange={handleChangeRegister}/>
                    <input type="password" placeholder="Lozinka" class="passInput" name="password" onChange={handleChangeRegister}/>
                </div>
                <div class="loginButton">
                    <button class="loginButtonB" type='submit'>Registriraj se</button>
                </div>
             </form>
         </div>
               </div>
             </div>
        }
        </div>
    }
    </div>);
};