const express = require('express')
const router = express.Router()

const getVideogamesByName = require('../controllers/getVideogamesByName')


router.get("/", async (req, res) => {
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