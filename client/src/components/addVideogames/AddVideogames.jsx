import styles from './addVideogames.module.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { postVideogame } from '../../redux/actions'
import { isNombre, isRating } from './validation'

const AddVideogames = () => {
  const validation = (data, setErrors, errors) => {
    
    const rg1 = /(\d{4})-(\d{2})-(\d{2})/;//Validar fecha formato YYYY-MM-DD
    const rg2 = /^\d{1}(\.\d{1})?\d{0,1}$/;//Validar numero de un digito con dos decimales de presicion
    const rg3 = /https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/ // validar si es formato de url

    // Validar released
    if (data.released !== "") {
      if (isNaN(data.released[0] * 1)) {
        setErrors({...errors, released: "Debe comenzar con un numero"})
      } else if (rg1.test(data.released)) {
        setErrors({...errors, released: ""})
      } else {
        setErrors({...errors, released: "Tiene que tener el formato YYYY-MM-DD"})
      }
    }
    // Validar name
    if (data.name !== "") {
      if (!isNaN(data.name[0] * 1)) { 
        setErrors({...errors, name: "No debe comenzar con numero"}) 
      } else { 
        
        if (data.name == data.name.toUpperCase()) { 
          
          setErrors({...errors, name: ""})
        } 
        if (data.name == data.name.toLowerCase()) { 
          
          setErrors({...errors, name: "Debe comenzar con mayúsculas"}) 
        }
      }
    }
    //Validar rating
    if (data.rating!== "") {
      if (isNaN(data.rating[0] * 1)) {
        setErrors({...errors, rating: "Debe ser un numero"})
      }else if (data.rating > 10) {
        setErrors({...errors, rating: "Debe ser menor que 10"})
      } else {
        if (rg2.test(data.rating)) {
          setErrors({...errors, rating: ""})
        } else {
          setErrors({...errors, rating: "Debe tener 1 digito, un punto y hasta dos decimales"})
        }
      }
    }

    //Validar formato url para la imagen
    if (data.background_image !== "") {
      if (rg3.test(data.background_image)) {
        setErrors({...errors, background_image: "" })
      }  else {
        setErrors({...errors, background_image: "Debe tener formato de url: http//xxxx.xxx o similar" })
      }
    }
  }
    
  
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
    validation({...data, [property]: valor}, setErrors, errors)
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

  const handleSubmit = (e) => {
    
    e.preventDefault()
    if (select.length === 0) {
      alert ("Debe seleccionar al menos un genero")
    } else {
    data.genres = select;
    const videogame = data
    console.log(videogame);
    dispatch(postVideogame(videogame))
    
  } 
  }
  useEffect(()=> {
    getGenres()
  }, [])
  
  return (
    <div className= {styles.contenedor}>
            <h2 className= {styles.h2}>Agregar Videogames</h2>
            <form onSubmit= {handleSubmit}>
                
              <div>
                <h3 className= {styles.h3}>Name Videogame</h3>
                {errors.name && <p className= {styles.error}>{errors.name}</p>}
                <input 
                  className= {styles.input}
                  type="text" placeholder= "Videogame Name"
                  name="name"
                  value= {data.name} 
                  onChange= {handleChange}
                />
                
              </div>
                
              <div>
                <h3 className= {styles.h3}>Released</h3>
                {errors.released && <p className= {styles.error}>{errors.released}</p>}
                <input 
                  className= {styles.input}
                  type="text" placeholder="Released (YYYY-MM-DD)"
                  name="released"
                  value= {data.released} 
                  onChange= {handleChange}
                />
                
              </div>
                
              <div>
                <h3 className= {styles.h3}>Rating</h3>
                {errors.rating && <p className= {styles.error}>{errors.rating}</p>}
                <input 
                  className= {styles.input}
                  type="text" placeholder="Rating"
                  name="rating"
                  value= {data.rating} 
                  onChange= {handleChange}
                />
                  
              </div>
                
              <div>
                <h3 className= {styles.h3}>URL Image</h3>
                {errors.background_image && <p className= {styles.error}>{errors.background_image}</p>}
                  <input 
                    className= {styles.input}
                    type="text" placeholder="Add image"
                    name="background_image"
                    value= {data.image} 
                    onChange= {handleChange}
                  />
                  
                </div>
                
                <h3 className= {styles.h3}>Description</h3>
                <textarea 
                  className= {styles.input}
                  rows="10" cols="50" placeholder="Write description here"
                  name="description"
                  value= {data.description} 
                  onChange= {handleChange}
                ></textarea>

                <h3 className= {styles.h3}>Género</h3> 
                <div className= {styles.contain}>
                    {genres.map(({id, name}, index) => (
                      <div >
                        <label className= {styles.checkbox}>
                          <input key = {index} 
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