const express = require('express')
const router = express.Router()
const getGenres = require('../controllers/getGenres')

router.get("/", async (req, res) => {
    
    try {
        let genres = await getGenres()
        if(genres) {
            
            res.status(200).json(genres)
        } else {
            res.status(404).json({"error": "No se encuentran datos"})
        }
    } catch {
        res.status(500).json({"error": "Fallo de conexion con la api"})
    }
})



module.exports = router