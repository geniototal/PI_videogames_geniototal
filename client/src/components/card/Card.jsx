import style from './Card.module.css';
const Card = ({id, name, image, genres}) => {
    return (
      <>
          <div className={style.container}>
                <h2 className={style.titleName}>{name}</h2>
                <div className= {style.content__img}>
                  <img className= {style.img} src={image} alt='' />
                </div>
                <h2><u>Género</u></h2>
                <h2>{genres?.map(e => e.name + ", ")}</h2>
          </div>
          
      </>
    )
  }
  
  export default Card