import "./style/App.css";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

function App() {
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(null);
  const [showButton, setShowButton] = useState();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      const handleScrollButtonVisibilty = () => {
        window.pageYOffset > 500 ? setShowButton(true) : setShowButton(false);
      };
      window.addEventListener("scroll", handleScrollButtonVisibilty);

      return () => {
        window.removeEventListener("scroll", handleScrollButtonVisibilty);
      };
    });
    

    const session = supabase.auth.getSession();
    setUser(session?.user);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        switch (event) {
          case "SIGNED_IN":
            setUser(session?.user)
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
            <NavBar sessionUser={user} />
            {showButton && <BackArrow />}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/novaObjava"
                element={<NewPost userSession={user} />}
              />
              <Route path="/proizvod" element={<ItemView user={user}/>} />
              <Route path="/onama" element={<AboutUs />} />
              <Route path="/profil" element={<Profil userSession={user}/>} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
