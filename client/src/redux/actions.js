
import axios from 'axios';

export const GET_VIDEOGAMES = "GET_VIDEOGAMES"
export const POST_VIDEOGAME = "POST_VIDEOGAME"
export const REMOVE_GAME = "REMOVE_GAME";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const FILTERANDORDER = "FILTER_AND_ORDER";
export const GET_BY_NAME = "GET_BY_NAME";

const URLAllVideos = 'http://localhost:3001/videogames'

export const getVideogames = () => {
    try {
        return async(dispatch) => {
            const result = await axios.get(URLAllVideos)
            return dispatch({
                type: GET_VIDEOGAMES,
                payload: result.data
            }); 
        }
    } catch (error) {
        console.log(error);
    }
} 

export function postVideogame(payload){
    try {
        return async function(dispatch){
            const response = await axios.post(URLAllVideos, payload)
            const result = response.data
            return dispatch({
                type: POST_VIDEOGAME,
                payload: [payload, result]
            }); 
        }
    } catch (error) {
        console.log(error);
    }
}

export const getByName = name => {
    try {
        const endpoint = `http://localhost:3001/videogames/name?name=${name}`
    return async(dispatch) => {
        const response = await axios.get(endpoint)
     
    return dispatch({
        type: GET_BY_NAME,
        payload : response.data
    }
    )
}
    } catch (error) {
        console.log(error);
    }
}


 export const removeGame = (id) => {
    try {
        const endpoint = 'http://localhost:3001/videogames/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_GAME,
             payload: data,
       });
       });
    };
    } catch (error) {
        console.log(error);
    }
 };


export const filterAndOrder = state => {
    console.log(state);
    return {
        type: FILTERANDORDER,
        payload: state
    }
}