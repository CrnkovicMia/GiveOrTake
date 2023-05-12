import "../style/Login.css";
import { LoginFunction } from "./LoginFunction.js";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [modal, setModal] = LoginFunction();
  const [log, setLog] = useState(false);

  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [registerInfo, setRegisterInfo] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const loginGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  function handleChangeLogin(event) {
    setLoginInfo((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
    console.log(loginInfo);
  }

  const loginEmail = async () => {
    setModal();
    await supabase.auth.signInWithPassword({
      email: loginInfo.email,
      password: loginInfo.password,
    });
  };

  const signUp = async () => {
    console.error("Registracija");
    navigate("/");
    await supabase.auth.signUp({
      email: registerInfo.email,
      password: registerInfo.password,
    });
  };

  function handleChangeRegister(event) {
    setRegisterInfo((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div>
      {!modal && (
        <div>
          {!log ? (
            <div className="modal">
              <div onClick={setModal} className="overlay"></div>
              <div className="modal-content">
                <div class="popup">
                  <div className="type">Prijava</div>
                  <div className="typeButton">
                    <button className="prijavaButton">Prijava</button>
                    <button
                      className="registracijaButton"
                      onClick={() => {
                        setLog(!log);
                      }}
                    >
                      Registracija
                    </button>
                  </div>

                  <div class="googleSignUp">
                    <button class="googleButton" onClick={loginGoogle}>
                      <span class="googleImage">
                        <img
                          src={require("../images/google.png")}
                          alt="googleImg"
                          class="googleImageImg"
                        />
                      </span>
                      <span class="googleText">Continue with Google</span>
                    </button>
                  </div>
                  <h5>
                    <span>ili putem maila</span>
                  </h5>
                  <div class="input">
                    <input
                      type="email"
                      placeholder="Email"
                      class="emailInput"
                      name="email"
                      onChange={handleChangeLogin}
                    />
                    <input
                      type="password"
                      placeholder="Lozinka"
                      class="passInput"
                      name="password"
                      onChange={handleChangeLogin}
                    />
                  </div>
                  <div class="loginButton">
                    <button class="loginButtonB" onClick={loginEmail}>
                      Prijavi se
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="modal">
              <div onClick={setModal} className="overlay"></div>
              <div className="modal-content">
                <div className="popup">
                  <div className="type">Registracija</div>
                  <div className="typeButton">
                    <button
                      className="prijavaButtonReg"
                      onClick={() => {
                        setLog(!log);
                      }}
                    >
                      Prijava
                    </button>
                    <button className="registracijaButtonReg">
                      Registracija
                    </button>
                  </div>

                  <div className="googleSignUp">
                    <button className="googleButton" onClick={loginGoogle}>
                      <span className="googleImage">
                        <img
                          src={require("../images/google.png")}
                          className="googleImageImg"
                          alt="googleImg"
                        />
                      </span>
                      <span className="googleText">Continue with Google</span>
                    </button>
                  </div>
                  <h5>
                    <span>ili putem maila</span>
                  </h5>
                  <form onSubmit={signUp}>
                    <div className="inputPersonal">
                      <input
                        type="text"
                        placeholder="Ime"
                        className="emailInput"
                      />
                      <input
                        type="text"
                        placeholder="Prezime"
                        className="passInput"
                      />
                    </div>
                    <div className="input">
                      <input
                        type="email"
                        placeholder="Email"
                        className="emailInput"
                        name="email"
                        onChange={handleChangeRegister}
                      />
                      <input
                        type="password"
                        placeholder="Lozinka"
                        className="passInput"
                        name="password"
                        onChange={handleChangeRegister}
                      />
                    </div>
                    <div className="loginButton">
                      <button className="loginButtonB" type="submit">
                        Registriraj se
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
