import styles from "./paginacion.module.css"
import  NumberPage from '../numberPage/NumberPage'

const Paginacion = ({ page, setPage, pageAmount}) => {
    
    const nextPage = () => {
        setPage(page + 1)
    }
    const previusPage = () => {
        setPage(page - 1)
    }
    // aca se resetea a la pag 1 si la cantidad de paginas es mayor al numero actual
    if (pageAmount  < page) {  
        setPage(1)
    }
    
    const numeracion = [];
    let i = 1
    while (i <= pageAmount ) {
        numeracion.push(i)
        i++
    }
    
    return (
    
        <div className={styles.container}>
            <button 
                disabled={page === 1 || page < 1}
                onClick={previusPage}
                className={styles.button}>
                <i className="ri-arrow-left-circle-fill"></i>
            </button>
            {numeracion.map((e) => {
                return <NumberPage 
                    key = {e}    
                    number= {e}
                    page = {page}
                    setPage = {setPage}
                />})}
                
            <button 
                disabled={page === Math.ceil (pageAmount) || page > Math.ceil (pageAmount)}
                onClick={nextPage}
                className={styles.button}><i className="ri-arrow-right-circle-fill"></i>
            </button>
        </div>
    )
    
}

export default Paginacion