
import axios from 'axios';

export const GET_VIDEOGAMES = "GET_VIDEOGAMES"
export const POST_VIDEOGAME = "POST_VIDEOGAME"
export const REMOVE_GAME = "REMOVE_GAME";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const FILTERANDORDER = "FILTER_AND_ORDER"

const URLAllVideos = 'http://localhost:3001/videogames'

export const getVideogames = () => {
    return async(dispatch) => {
    const result = await axios.get(URLAllVideos)
    return dispatch({
        type: GET_VIDEOGAMES,
        payload: result.data
    }); 
}
} 

export function postVideogame(payload){
    return async function(){
        const response = await axios.post(URLAllVideos, payload)
        return response
    }
}




 export const removeGame = (id) => {
    const endpoint = 'http://localhost:3001/videogames/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_GAME,
             payload: data,
       });
       });
    };
 };


export const filterCards = (gender)  => {
    return { type:FILTER, payload: gender}
}

export const orderCards = (orden)  => {
    return { type: ORDER, payload: orden}
}
export const filterAndOrder = state => {
    console.log(state);
    return {
        type: FILTERANDORDER,
        payload: state
    }
}