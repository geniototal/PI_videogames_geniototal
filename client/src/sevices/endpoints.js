import axios from 'axios';

const URLAllVideos = `http://localhost:3001/videogames`


export const getVideogames = async() => {
    const resul = await axios.get(URLAllVideos)
    const videogames = resul.data
    return videogames
} 

    