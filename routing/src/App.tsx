import React from 'react';

import './App.css';
import Theatre from "./pages/Theatre";
import Conserts from "./pages/Concerts";
import Movies from "./pages/Movies";
import Moiviesall from "./pages/Moviesall"
import {Link, Route, Routes,useParams} from "react-router-dom";
import Moviesall from "./pages/Moviesall";



function App() {
  return (
    <div >
      <ul>
        <li><Link to='/movies'>Movies</Link></li>
        <li><Link to='/concerts'>Conserts</Link></li>
        <li><Link to='/theatre'>Theatre</Link></li>
      </ul>



    </div>
  );
}

export default App;
