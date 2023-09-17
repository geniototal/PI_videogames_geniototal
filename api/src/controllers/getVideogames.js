const axios = require('axios')
require('dotenv').config();
const { API_KEY } = process.env;
  const{ VideoGame, Genre } = require("../db");


//GET Api 
const getVideogames = async () => {
    // con async-await.....Hacemos la peticion a la api con axios
    let res = await axios(`https://api.rawg.io/api/games?key=${API_KEY}`)
    //console.log(res.data.results);
        let cant = res.data.count
        let datos = res.data.results; 
    // mapeo los datos que me interesan    
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
              ), */
            Genres: e.genres.map(el => {
                return {name: el.name}
            })
        }
    })
    console.log(cant);
    console.log(gamesApi.length);  

    //Get a los datos de la DB uniendo las dos tablas
    const gamesDb = await VideoGame.findAll({
        include: {
            model: Genre,
            attributes: ["name"],
            through: { attributes: [] }
        }
    }) 
    //Concateno ambas infos
    const games = gamesApi.concat(gamesDb)
    
    return (games)
}


module.exports = getVideogames