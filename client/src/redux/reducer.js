import { GET_VIDEOGAMES, POST_VIDEOGAME, REMOVE_GAME, FILTER, ORDER, FILTERANDORDER } from "./actions";



const inicialState = {    
    videogames: [],
    allVideogames: [],
}

const rootReducer = (state= inicialState, {type, payload}) => {
    switch (type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: payload,
                allVideogames: payload
            };
        case POST_VIDEOGAME:
            return {
                ...state,
            }
                                                  
        case REMOVE_GAME:
         return { ...state, allCharacters: payload, myFavorites: payload };
        
        case FILTER:
            const filter = state.allCharacters.filter((char)=> char.gender === payload)
            return {
                ...state,
                myFavorites: filter 
            }
        case ORDER:
            let orderCharacters = state.allCharacters
            if (payload === "A") {
            
                   orderCharacters.sort((x, y) => x.id - y.id)
            }
            if (payload === "D") {
               
                    orderCharacters.sort((x, y) => y.id - x.id)
                }
            return {
                ...state, 
                myFavorites: orderCharacters   
            }
        case FILTERANDORDER:
            let orderAndFilter = state.allVideogames
            console.log(payload);
            const carlos= orderAndFilter.filter(e => e.rating === 4.47)
            console.log(carlos);
            if(payload.filter !== "") {
                if (payload.filter === "All") {
                   return {
                    videogames: state.allVideogames
                   } 
                }
                orderAndFilter =  orderAndFilter.filter(videogame => videogame.Genres.includes(payload.filter))
            }
    //Ordenar Por name
        /* orderAndFilter.sort((a, b) => {
            let first = a.name
            let second = b.name
            let compare = first.localeCompare(second)
            return payload.order === 'D' ?  -compare : compare
        })
       
             if(payload.rating === "RA") {
                orderAndFilter = orderAndFilter.sort((a, b) => {
                    if(a.rating > b.rating) {
                        return 1;
                    }
                    if(b.rating > a.rating) {
                        return -1;
                    }
                    return 0;
                    })
            
            } else if(payload.rating === "RD") {
                orderAndFilter = orderAndFilter.sort((a, b) => b.rating - a.rating)
            }

            if(payload.origin === "DB") {
                orderAndFilter = orderAndFilter.filter(videogame => videogame.isofDb === true)
            } else if(payload.origin == "API") {
                orderAndFilter = orderAndFilter.filter(videogame => !(videogame.isofDb === true))
            } */
            
            
            return {
                
                videogames: orderAndFilter
            }
        default:
            return {...state}
    } 
}
export default rootReducer;