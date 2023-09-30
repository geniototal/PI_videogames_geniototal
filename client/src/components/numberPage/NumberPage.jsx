 import styles from './number.module.css' 
 
 
 
 const NumberPage = ({page, number, setPage}) => {
    const handlePage = (number) => {
        setPage(number)
    }
    return (
        <div>
            <button onClick = {()=> handlePage(number)}  
                className ={page === number ? styles.isactive : styles.button} >
                {number}
            </button>
        </div>
    ) 
    
} 

export default NumberPage