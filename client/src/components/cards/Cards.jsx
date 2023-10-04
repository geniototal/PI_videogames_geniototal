import Card from '../card/Card';
import style from './Cards.module.css';
import { useState } from 'react';
import Paginacion from '../paginacion/Paginacion';

export default function Cards(props) {
   //Paginado
   console.log(props.stateFilter);
   const typefilter= props.stateFilter
   const [page, setPage ] = useState(1) //page es la pagina actual
   const [pageSize, setPageSize] = useState(15)
   const pageAmount = Math.ceil(props.videogames.length / pageSize) // cantidad de pag s/cant de cards

   return !props.videogames ? <h1 className={style.h1}>Cargando los videogames...</h1>
   :  (
      <div>
         
         <div className={style.page}>
            <Paginacion page= {page} setPage= {setPage} pageAmount= {pageAmount}/>
         </div>
         <div className={style.container}>
            {props?.videogames.slice((page-1) * pageSize,((page-1) * pageSize) + pageSize)
            .map(({ id, name, background_image, Genres, genres, isofDb, rating}, index)=> {
               
               return <Card 
                  key = {index}
                  id={id}
                  rating={rating}
                  name={name}
                  image={background_image}
                  genres= {Genres || genres}
                  isofDB = {isofDb}
               />
            })}
         </div>
         <div className={style.page}>
            <Paginacion page= {page} setPage= {setPage} pageAmount= {pageAmount}/>
         </div>
      </div>
   )
   
}