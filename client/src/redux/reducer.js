import { GET_VIDEOGAMES, POST_VIDEOGAME, REMOVE_GAME, FILTERANDORDER, GET_BY_NAME } from "./actions";



const inicialState = {    
    errors: [],
    videogames: [],
    allVideogames: [],
}

const rootReducer = (state= inicialState, {type, payload}) => {
    switch (type) {
        case GET_VIDEOGAMES:
            // No deja pasar los repetidos
             let gamesFilter = payload.reduce((ac, el) => {
                if (! ac.find(dato => dato.id === el.id)) {
                    ac.push(el)
                }
                return ac
            } , []);
            let data = gamesFilter.map((e)=> {
                return {
                ...e,
                Genres: e.Genres.map(e=> {
                    return e.name
                })
                }
            
            })
            return {
                ...state,
                videogames: data,
                allVideogames: data
            };
        case POST_VIDEOGAME:
            console.log(payload);
            state.allVideogames.push(payload)
            return {
                ...state
                
            }
                                                  
        case REMOVE_GAME:
         return { ...state, allVideogames: payload, videogames: payload };
        
        case GET_BY_NAME:
            console.log(payload)
            let gamesFilter2 = payload.reduce((ac, el) => {
                if (! ac.find(dato => dato.id === el.id)) {
                    ac.push(el)
                }
                return ac
            } , []);
            let data2 = gamesFilter2.map((e)=> {
                return {
                ...e,
                Genres: e.genres.map(e=> {
                    return e.name
                })
                }
            
            })

            return {
                ...state,
                videogames: data2,
                allVideogames: data2
            }
        case FILTERANDORDER:
            let orderAndFilter = state.allVideogames
            console.log(payload.filter);
            //Filtrar por genero...aprobado
            if(payload.filter !== "") {
                if (payload.filter === "All") {
                    orderAndFilter = state.allVideogames
                 
                }else {
                    
                orderAndFilter =  orderAndFilter.filter(v => v.Genres.includes(payload.filter))
                
            }}
    //Ordenar Por name alfabeticamente y por rating asc y desc...aprobado
        if (payload.order !== "") {
            if (payload.order === "A") {
                orderAndFilter = orderAndFilter.sort((a, b) => {
                    if (a.name < b.name ) {
                        return -1
                    } else if (a.name > b.name) {
                        return 1
                    } else { 
                        return 0
                    }
            })
            
            }
            if (payload.order === "D") {
                orderAndFilter = orderAndFilter.sort((a, b) => {
                    if (a.name < b.name ) {
                        return 1
                    } else if (a.name > b.name) {
                        return -1
                    } else { 
                        return 0
                    }
            })
            
            }  
            if(payload.order === "RD") {
                orderAndFilter = orderAndFilter.sort((a, b) => {
                    if(a.rating > b.rating) {
                        return -1;
                    }
                    if(b.rating > a.rating) {
                        return 1;
                    }
                    return 0;
                    })
            }
            if(payload.order === "RA") {
                orderAndFilter = orderAndFilter.sort((a, b) => {
                    if(a.rating > b.rating) {
                        return 1;
                    }
                    if(b.rating > a.rating) {
                        return -1;
                    }
                    return 0;
                    })
            }
        
        }
        
        // Ordenar por origen si es API o DB 
            if(payload.origin === "DB") {
                orderAndFilter = orderAndFilter.filter(videogame => videogame.isofDb === true)
            } else if(payload.origin == "API") {
                orderAndFilter = orderAndFilter.filter(videogame => !(videogame.isofDb === true))
            }
            
        return {
            ...state,
            videogames: orderAndFilter
        }
    default:
        return {...state}
    } 
}
export default rootReducer;