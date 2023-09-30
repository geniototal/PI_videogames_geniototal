const{ VideoGame } = require("../db");

const postGame = async({ name, description, background_image, released, rating, genres, isofDb}) => {
    //const newGames = await VideoGame.findOrCreate({ where : { name, description, background_image, released, rating }})
    const newGames = await VideoGame.create( { name, description, background_image, released, rating, isofDb })
    newGames.addGenres(genres)

    const allGames = await VideoGame.findAll()
    return allGames
};

module.exports = postGame;