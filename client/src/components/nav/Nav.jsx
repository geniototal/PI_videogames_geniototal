import React, {useState} from "react";
import SearchBar from "../searchBar/SearchBar";
//import style from './Nav.module.css';
import { useNavigate, NavLink } from 'react-router-dom';
import {NavContainer, BurgerContainer, BgDiv,} from './navStyled';
import Burger from "./Burger";

const Nav = (props) => {
    const navigate = useNavigate()
    const [clicked, setClicked] =useState(false)
    const handleClick = () => {
        setClicked(!clicked); 
    }       
    return <>
            
            <NavContainer>
                <h1 className="h1">Videogames</h1>
                
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <h3><NavLink to= "/videogames" className= {({isActive})=> isActive ? "activo" : "button"}>
                        Home</NavLink></h3>
                         
                    <h3><NavLink to= "/filter" className= {({isActive})=> isActive ? "activo" : "button"}>
                        Filter</NavLink></h3>
                    <h3><NavLink to= "/addVideogames" className= {({isActive})=> isActive ? "activo" : "button"}>
                        AddGames</NavLink></h3>     
        
                    <h3 className= "button" onClick={() => navigate(-1)}>Atras</h3>
                    
                </div>
                <div className="contain_button">
                    <SearchBar onSearch={props.onSearch} />
                    
                </div>
                <BurgerContainer>
                    <Burger clicked= {clicked} handleClick= {handleClick}/>
                </BurgerContainer>
                <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
            </NavContainer>
        </>
    }


export default Nav;

