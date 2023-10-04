const{ VideoGame } = require("../db");

const postGame = async({ name, description, background_image, released, rating, genres, isofDb}) => {
    
    const findGame = await VideoGame.findOne({
        where: {
            name: name
    }})
    if (findGame) {
        let message ="Este nombre ya existe en la DB"
        return message
    } else {
    const newGames = await VideoGame.create({ name, description, background_image, released, rating })
    newGames.addGenres(genres)
    let message = "Add"
    return message
    /* const allGames = await VideoGame.findAll()
    return allGames */
    }
};

module.exports = postGame;