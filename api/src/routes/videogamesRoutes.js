const express = require('express')
const router = express.Router()
const getVideogameById = require('../controllers/getVideogameById')
const getVideogames = require('../controllers/getVideogames')

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
    const { page, page_size } = req.query
    try {
        let videogame = await getVideogames({page, page_size})
        if(videogame) {
            
            res.status(200).json(videogame)
        } else {
            res.status(404).json({"error": "No se encuentran datos"})
        }
    } catch {
        res.status(500).json({"error": "Fallo de conexion con la api"})
    }
})

router.get("/name", async (req, res) => {
    const { name } = req.query
    try {
        let videogame = await getVideogamesByName(name)
        if(videogame) {
            
            res.status(200).json(videogame)
        } else {
            res.status(404).json({"error": "No se encuentran datos"})
        }
    } catch {
        res.status(500).json({"error": "Fallo de conexion con la api"})
    }
})


module.exports = router