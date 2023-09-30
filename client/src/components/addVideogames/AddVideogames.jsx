import styles from './addVideogames.module.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { postVideogame } from '../../redux/actions'
import { isNombre, isRating } from './validation'

const AddVideogames = () => {
  
  const dispatch = useDispatch()
  const [genres, setGenres] = useState([]) //etado para guardar los genres de la db
  const [select, setSelect] = useState([]) // estado para guardar las genres seleccionadas
  const [data, setData] = useState({  //estado para guardar los input
    name: "",
    background_image: "",
    description:"",
    released: "",
    rating: "",
    isofDb: true,
  })
  const [errors, setErrors] = useState({   //estado para manejo de errores
    name: "",
    background_image: "",
    description:"",
    released: "",
    rating: "",
  })
  
  const handleChange = (event) => {
    const property = event.target.name;
    const valor = event.target.value;

    setData({...data, [property]: valor})
    //validation({...userData, [property]: valor}, setErrors, errors)
   console.log(data);
}
// Obtengo los generos seleccionados
const handleCheck = (event) => {
  const {value, checked} = event.target
  if (checked) {
    setSelect([...select, value])
  } else {
    setSelect(select.filter( e => e !== value))
  }
}
console.log(select)
  // Cargar los generos desde la bd
  const getGenres = async () => {
    let res = await axios.get(`http://localhost:3001/genres`)
    let datos= res.data
    if (!datos) {
      window.alert("No se cargaron las categorias")
    } else {
      setGenres(datos)  
    }
  }    
   /* const createVideogame = async (videogame) => {
     const res = await axios.post('http://localhost:3001/videogames', videogame)
      return res
   } */
  const handleSubmit = (e) => {
    e.preventDefault()
    
    data.genres = select;
    const videogame = data
    console.log(videogame);
    dispatch(postVideogame(videogame))
    
  } 

  useEffect(()=> {
    getGenres()
  }, [])
  
  return (
    <div className= {styles.contenedor}>
            <h2 className= {styles.h2}>Agregar Videogames</h2>
            <form onSubmit= {handleSubmit}>
                
                <input 
                className= {styles.input}
                type="text" placeholder="Nombre"
                name="name"
                value= {data.name} 
                onChange= {handleChange}
                />
                
                <input 
                className= {styles.input}
                type="text" placeholder="Released"
                name="released"
                value= {data.released} 
                onChange= {handleChange}
                />
                
                <input 
                className= {styles.input}
                type="text" placeholder="Rating"
                name="rating"
                value= {data.rating} 
                onChange= {handleChange}
                />
                
                <input 
                className= {styles.input}
                type="text" placeholder="Cargar imagen"
                name="background_image"
                value= {data.image} 
                onChange= {handleChange}
                />

                <textarea 
                className= {styles.input}
                rows="10" cols="50" placeholder="Write description here"
                name="description"
                value= {data.description} 
                onChange= {handleChange}
                ></textarea>

                <h3 className= {styles.h2}>Género</h3> 
                <div className= {styles.contain}>
                    {genres.map(({id, name}) => (
                      <div >
                        <label >
                          <input key = {id} 
                          className= {styles.checkbox} type="checkbox" value= {id} onChange={handleCheck} />
                          
                          {name}
                        </label>
                      </div>
                    ))}
                </div>
                
                <button 
                  type= "submit"
                  className= {/* nombre.error ? styles.disable : */ styles.submit}
                >
                  Add Videogames
                </button>
            </form>
        </div>
  )
}

export default AddVideogames