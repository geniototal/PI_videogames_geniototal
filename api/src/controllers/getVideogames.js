const axios = require('axios')
require('dotenv').config();
const { API_KEY } = process.env;
  const{ VideoGame, Genre } = require("../db");


//GET Api 
const getVideogames = async () => {
    // con async-await.....Hacemos la peticion a la api con axios3 veces para traer las 120 cards

        let res_1 = await axios(`https://api.rawg.io/api/games?page=1&page_size=40&key=${API_KEY}`)
        let datos_1 = res_1.data.results;
        let res_2 = await axios(`https://api.rawg.io/api/games?page=2&page_size=40&key=${API_KEY}`)
        let datos_2 = res_2.data.results;
        let res_3 = await axios(`https://api.rawg.io/api/games?page=3&page_size=40&key=${API_KEY}`)
        let datos_3 = res_3.data.results;
        // concateno y mapeo los datos que me interesan    
        let datos = datos_1.concat( datos_2, datos_3)
        
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
                   // return el.name
                })
            }
        })
        console.log(gamesApi.length);
    
    //console.log(cant);
      

    //Get a los datos de la DB uniendo las dos tablas por medio de tabla intermedia
    const gamesDb = await VideoGame.findAll({
        include: {
            model: Genre,
            attributes: ["name"],
            through: { attributes: [] }
        }
    }) 
    
    
    
    //console.log(gamesDb+"aca toy");

    //Concateno ambas infos de la api y de la db
    const games = gamesApi.concat(gamesDb)
    
    return (games)
}


module.exports = getVideogames