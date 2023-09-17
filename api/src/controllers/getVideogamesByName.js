const axios = require('axios')
require('dotenv').config();
const {
    API_KEY,
  } = process.env;

// con async-await.....Hacemos la peticion a la api por id con axios

//GET por ID
const getVideogameByName = async (name) => {
    
    let res = await axios(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
    let datos = res.data.results;
  
    let gamesApi = datos.map( (e)=> {
        return {
            id: e.id,
            name: e.name,
            released: e.released,
            description: e.description,
            rating: e.rating,
            background_image: e.background_image,
            /* platforms: e.platforms.map(el => {
                  return el.platform
            }
              ),*/
            genres: e.genres.map(el => {
                return {name: el.name}
            })
        }
    })
    /* console.log(cant);
    console.log(gamesApi.length); */
    return gamesApi
}


module.exports = getVideogameByName