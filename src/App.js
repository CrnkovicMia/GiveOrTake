import './style/App.css';
import {NavBar} from "./components/NavBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import { Footer } from './components/Footer';

import { useState, useEffect } from 'react';
import PulseLoader from "react-spinners/PulseLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect (() => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    })

  }, []);

  return (
    <div className="App">
      {
        loading ?
        <div class="Loader"><PulseLoader color={'#138B3C'} loading={loading} size={10} />
         </div>
        :
        <div>
         <Router>
           <NavBar/>
           <Routes>
             <Route path="/" element={<Home/>}/>
           </Routes>
           <Footer/>
           </Router>
        </div>
      }
    </div>
  );
}

export default App;
