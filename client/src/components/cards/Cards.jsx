import Card from '../card/Card';
import style from './Cards.module.css';


export default function Cards(props) {
   
   return (
   <div className={style.container}>
      {props.videogames.map(
         ({ id, name, background_image, Genres, genres})=> {
         return <Card 
         key = {id}
         id={id}
         name={name}
         image={background_image}
         genres= {Genres || genres}
         />
      })}
   </div>);
}