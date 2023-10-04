const axios = require('axios')
require('dotenv').config();
const {
    API_KEY,
  } = process.env;

// con async-await.....Hacemos la peticion a la api por id con axios

//GET por ID
const getVideogameById = async (id) => {
        let res = await axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    
    if (res.data.name) {
        
        let gameApi = {
            id: res.data.id,
            name: res.data.name,
            image: res.data.background_image,
            // platforms: res.data.platforms, //ver porque me sale error cuando lo activo
            released: res.data.released,
            description: res.data.description,
            rating: res.data.rating
        }
        return gameApi
    } else  {
        
        //console.log(id);
        const gameDb = await VideoGame.findOne({
            where: {
                id: id, // busca el id en la db
            }
        });
        return gameDb
    }
    
}


module.exports = getVideogameById