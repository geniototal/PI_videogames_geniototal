import Card from '../card/Card';
import style from './Cards.module.css';
import { useState } from 'react';
import Paginacion from '../paginacion/Paginacion';

export default function Cards(props) {
   //Paginado
   console.log(props);
   const [page, setPage ] = useState(1)
   const [pageSize, setPageSize] = useState(15)
   const pageAmount = Math.ceil(props.videogames.length / pageSize)

   return (
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