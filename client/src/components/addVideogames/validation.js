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
      
    let arrDate = data.released.split('-')
    let year = Number(arrDate[0])
    let mouth = Number(arrDate[1])
    let day = Number(arrDate[2])

    if (year > 2023) {
        setErrors({...errors, released:  "Año, debe ser menor o igual a 2023"})
    }
    if (mouth > 12) {
        setErrors({...errors, released:  "Mes, debe ser menor o igual a 12"})
    }
    if ((mouth === 4 || mouth === 6 || mouth === 9 || mouth === 11) && (day > 30) ) {
        setErrors({...errors, released:  "Día, para este mes no puede ser mayor a 30"})
    } else if ((mouth === 2)&&(day > 29)) {
        setErrors({...errors, released:  'Febrero no tiene mas de 29 dias'})
    } else if ( day > 31) {
        setErrors({...errors, released:  'Día, para este mes no puede ser mayor 31'})
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
      }else if (data.rating > 5) {
        setErrors({...errors, rating: "Debe ser menor que 5"})
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

export default validation