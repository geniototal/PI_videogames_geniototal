const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

const videogamesRoutes = require('./videogamesRoutes')
const genresRoutes = require('./genresRoutes')
const videosByName = require('./videosByName')
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames/name", videosByName)
router.use("/videogames", videogamesRoutes)
router.use("/genres", genresRoutes)

module.exports = router;
