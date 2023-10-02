import style from './filter.module.css';
import { useSelector } from "react-redux"
import Cards from "../cards/Cards"
import {filterAndOrder} from '../../redux/actions';
import { useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import axios from 'axios'

function Filter () {
    let [state, setState] = useState({
        order: "",
        filter: "",
        origin: ""
        
    })
    // Cargar los generos desde la bd
    const [genres, setGenres] = useState([]) //estado para guardar los genres de la db
    const getGenres = async () => {
        let res = await axios.get(`http://localhost:3001/genres`)
        let datos= res.data
        if (!datos) {
          window.alert("No se cargaron las categorias")
        } else {
          setGenres(datos)  
        }
      }   
      useEffect(()=> {
        getGenres()
      }, [])
    const filterVG = useSelector((state)=> state.videogames)
    
    const dispatch = useDispatch();
    
    const handleChange = e => {
        let newState = {
            ...state,
            [e.target.name]: e.target.value
            
        }
console.log(newState);
        setState(newState)
        dispatch(filterAndOrder(newState))
    }
    
    
    return (
        <div className={style.content}>
            
            <div className={style.container}>
                <h3 className = {style.h3}>Filter</h3>
                <div className= {style.container_select}>
                    <select className= {style.select} name="order" id="" onChange = { handleChange }>
                        <option className= {style.option} value= "">Order</option>
                        <option className= {style.option} value= "A">A-Z</option>
                        <option className= {style.option} value= "D">Z-A</option>
                        <option className= {style.option} value="RA">Rating Asc.</option>
                        <option className= {style.option} value="RD">Rating Desc.</option>
                        
                    </select>
                    
                    <select className= {style.select} name="origin" id="" onChange = { handleChange }>
                        <option className= {style.option} value="ALL">ALL</option>
                        <option className= {style.option} value="API"> Only API</option>
                        <option className= {style.option} value="DB">Only DB</option>
                    </select>
                    <select className= {style.select} name="filter" id="" onChange = { handleChange }>
                        <option className= {style.option} value="All">All genres</option>
                        {genres.map(({id, name}, index) => (
                            <option className= {style.option} key= {index} value={name}>{name}</option>          
                        ))}
                        
                    </select>
                </div>
            </div>
            {<Cards videogames={filterVG}/>}
            
        </div>
    )
}



export default Filter