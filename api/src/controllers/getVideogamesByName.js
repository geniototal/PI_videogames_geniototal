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
    console.log(res.data);
    /* let game = {
        id: res.data.id,
        name: res.data.name,
        image: res.data.background_image,
        // platforms: res.data.platforms, //ver porque me sale error cuando lo activo
        released: res.data.released,
        description: res.data.description,
        rating: res.data.rating
    } */
    return dato
}


module.exports = getVideogameByName