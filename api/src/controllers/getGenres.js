const axios = require('axios')
require('dotenv').config();
const {
    API_KEY,
  } = process.env;
  const{ Genre } = require("../db");

  const genresApi = async () => {
    
  const allGenres = await Genre.findAll()
  if (allGenres.length !== 0) {
    return allGenres
  } else {
    
    const res = await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    let datos = res.data.results;
    let genres = datos.map((e)=>{
      return { name: e.name }
    })
               
    await Genre.bulkCreate(genres)
    const newGenres = await Genre.findAll()
    return newGenres
  }
  
}

  module.exports = genresApi;