import "./style/App.css";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";

import { Home } from "./pages/Home";
import { NewPost } from "./pages/NewPost";
import { AboutUs } from "./pages/AboutUs";
import { Profil } from "./pages/Profil";
import { Login } from "./components/Login";
import { BackArrow } from "./components/BackArrow";

import { Footer } from "./components/Footer";
import { supabase } from "./lib/supabaseClient";
import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { ItemView } from "./pages/ItemView";
import { Mail } from "./pages/Mail";

const ScrollComponent = () =>{

  // const { pathname, search } = useLocation();
  // useEffect(() => {
  //   const calcScrollValue = () => {
  //     const scrollProgress = document.getElementById("progress");
  //     const pos = document.documentElement.scrollTop;
  //     const calcHeight =
  //       document.documentElement.scrollHeight -
  //       document.documentElement.clientHeight;
  //     const scrollValue = Math.round((pos * 100) / calcHeight);

  //     if (pos > 100) {
  //       scrollProgress.style.display = "grid";
  //     } else {
  //       scrollProgress.style.display = "none";
  //     }

  //     scrollProgress.addEventListener("click", () => {
  //       document.documentElement.scrollTop = 0;
  //     });

  //     scrollProgress.style.background = `conic-gradient(#138b3c ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  //   };

  //   window.addEventListener("scroll", calcScrollValue);
  //   window.addEventListener("load", calcScrollValue);


  //   return () => {
  //     window.removeEventListener("scroll", calcScrollValue);
  //     window.removeEventListener("load", calcScrollValue);
  //   };
  // },[pathname, search])

}

function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    });

    const session = supabase.auth.getSession();
    setUser(session?.user);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        switch (event) {
          case "SIGNED_IN":
            setUser(session?.user);
            break;

          case "SIGNED_OUT":
            setUser(null);
            break;
          default:
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [window.location]);

  return (
    <div className="App">
      {loading ? (
        <div className="Loader">
          <PulseLoader color={"#138B3C"} loading={loading} size={10} />
        </div>
      ) : (
        <div>
          <Router>
            <ScrollComponent/>
            <div id="progress">
              <span id="progress-value">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m17 14l-5-5l-5 5"
                  />
                </svg>
              </span>
            </div>
            <NavBar sessionUser={user} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/novaObjava"
                element={<NewPost userSession={user} />}
              />
              <Route path="/proizvod" element={<ItemView user={user} />} />
              <Route path="/onama" element={<AboutUs />} />
              <Route path="/profil" element={<Profil userSession={user} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/mail" element={<Mail />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
