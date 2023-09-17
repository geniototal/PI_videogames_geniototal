const express = require('express')
const router = express.Router()
const getVideogameById = require('../controllers/getVideogameById')
const getVideogames = require('../controllers/getVideogames')
const postGame = require('../controllers/postGames')

router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        let videogame = await getVideogameById(id)
        if(videogame?.name) {
            res.status(200).json(videogame)
        } else {
            res.status(404).json({"error": "No se encontro un videoame con ese id"})
        }
    } catch {
        res.status(500).json({"error": "Fallo de conexion con la api"})
    }
})

router.get("/", async (req, res) => {
    //const { page, page_size } = req.query
    try {
        let videogame = await getVideogames()
        if(videogame) {
            
            res.status(200).json(videogame)
        } else {
            res.status(404).json({"error": "No se encuentran datos"})
        }
    } catch {
        res.status(500).json({"error": "Fallo de conexion con la api"})
    }
})


router.post('/', async(req, res) => {
    
    try {
        let { name, description, platforms, background_image, released, rating, genres } = req.body
        console.log("Aca", name, description, platforms, background_image, released, rating, genres);
        if(!name ||  !released || !background_image || !description || !rating || !genres) {   
            res.status(401).send("Faltan datos")
            return
        }
        let allGames = await postGame({
            name,
            description,
            platforms,
            released,
            background_image,
            rating,
            genres    
        })
    
        return res.status(200).json(allGames)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

module.exports = router