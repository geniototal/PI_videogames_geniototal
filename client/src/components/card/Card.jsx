import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({id, name, image, genres, rating, isofDb}) => {
    return (
      <>
          <div className={style.container}>
                <h3 className={style.rating}>Rating: {rating}</h3>
                <h2 className={style.titleName}>{name}</h2>
                <div className= {style.content__img}>
                  <img className= {style.img} src={image} alt='' />
                </div>
                <h3 className={style.genero}><u>Género</u></h3>
                
                <h3 className={style.genero}>{
                    genres?.map(e => e + ", ")
                }</h3>
                
                <Link to={`/videogames/${id}`}>
                  <button className={style.button}>See more...</button>
                </Link>
          </div>
          
      </>
    )
  }
  
  export default Card