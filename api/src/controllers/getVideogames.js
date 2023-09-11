const axios = require('axios')
require('dotenv').config();
const {
    API_KEY,
  } = process.env;

// con async-await.....Hacemos la peticion a la api por id con axios

//GET por ID
const getVideogames = async ({page, page_size}) => {

    let res = await axios(`https://api.rawg.io/api/games?page=${page}&page_size=${page_size}&key=${API_KEY}`)
//console.log(res.data.results);
let datos = res.data.results; 
let games =[];   
for (let i = 0; i < datos.length; i++) {
    games.push({
        id: datos[i].id,
        name: datos[i].name,
        released: datos[i].released,
        description: datos[i].description,
        rating: datos[i].rating,
        image: datos[i].background_image
    });
    
}
    
     console.log(datos[0].description);
     console.log(datos[1].name);      

    return games
}


module.exports = getVideogames