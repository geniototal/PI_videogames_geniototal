import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import style from './Detail.module.css'
const Detail = () => {
    const {id} = useParams()
    const [videogames, setVideogames] = useState({})
    const getDatos =async () => {
        let res = await axios.get(`http://localhost:3001/videogames/${id}`)
        let datos= res.data
        console.log(datos);    
        if (!datos.name) {
                window.alert("No existe un personaje con ese id")
            } else {
                setVideogames(datos)
                
            }
    }    
    useEffect(()=> {
        getDatos()
    }, [id])        
    return !videogames.name ? <h1 className={style.h1}>Cargando su videogame...</h1>
    : (
        
        
        <div className={style.container}>    
            <div className={style.contenedor}>
                <div className={style.img}>
                    <img src={videogames?.image} alt='' className= {style.img}/>     
                </div>
                <div className={style.contenedor_texto}>
                    <div className={style.titleName}>{videogames?.name}</div>
                    <h2 className={style.h2}><u>Released</u>: {videogames?.released}</h2>
                    <h2  className={style.h2}><u>Rating</u>: {videogames?.rating}</h2>
                    <h4 className={style.description}>
                        <u>Description</u>:
                    </h4>
                    <h4 className={style.description_text}> 
                        <span className= {style.span} dangerouslySetInnerHTML={{__html: videogames?.description}}/>
                    </h4>
                    
                </div>
            </div>
            <div>
                
            </div>
                
            
        </div>
    
    )
}
export default Detail;