import axios from 'axios';
import './App.css';
import {Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import {getVideogames, getByName}  from './redux/actions';

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
  
  const reLoadAll = () => {
    dispatch(getVideogames())
  }
  
  
  const onSearch = (name) => {
    if (name !== "") {
    dispatch(getByName(name))
    }  
 }

  return (
    <div className="App">
      <Backgraund></Backgraund>
      {location.pathname !== "/" && <Nav onSearch={onSearch} reLoadAll= {reLoadAll} />}
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
