import axios from 'axios';
import './App.css';
import {Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import {getVideogames}  from './redux/actions';

//!Importando componentes
import Backgraund from './components/background/Background';
import Cards from './components/cards/Cards';
import Detail from './components/detail/Detail';
import Welcome from './components/welcome/Welcome';
import Nav from './components/nav/Nav';
import Filter from './components/filter/Filter';
import AddVideogames from './components/addVideogames/AddVideogames';


function App() {
  let location = useLocation()
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVideogames());
},[])
  
  const videogames = useSelector((state)=> state.allVideogames)
  console.log(videogames);
  
  
  
  const onSearch = async(name) => {
    
     let res = await axios(`http://localhost:3001/videogames/name?name=${name}`)
    
      console.log(res.data)
      let newData= res.data
      return newData
       
 }

  return (
    <div className="App">
      <Backgraund></Backgraund>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
            <Route path= "/" element= {<Welcome />} />
            <Route path= "/videogames" element= {<Cards videogames={videogames} />} />
            <Route path= "/videogames/:id" element= {<Detail />} />
            <Route path= "/addVideogames" element= {<AddVideogames />} />
            <Route path= "/filter" element= {<Filter />} />       
         </Routes>
    </div>
  );
}

export default App;
