import axios from 'axios';
import './App.css';
import {Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

//!Importando componentes
import Backgraund from './components/background/Background';
import Cards from './components/cards/Cards';
import Detail from './components/detail/Detail';
import Welcome from './components/welcome/Welcome';
import Nav from './components/nav/Nav';

function App() {
  let location = useLocation()
  const [videogames, setVideogames] = useState([]);
  let getDatos = async() => {
    let res = await axios(`http://localhost:3001/videogames`)
    let datos = res.data
    console.log(datos);
    return setVideogames(datos) 
  } 
  useEffect(()=> {
    getDatos()
  }, [])
  
  
  return (
    <div className="App">
      <Backgraund></Backgraund>
      {location.pathname !== "/" && <Nav />}
      <Routes>
            <Route path= "/" element= {<Welcome />} />
            <Route path= "/videogames" element= {<Cards videogames={videogames} />} />
            <Route path= "/videogames/:id" element= {<Detail />} />         
         </Routes>
    </div>
  );
}

export default App;
