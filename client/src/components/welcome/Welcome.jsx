//import styles from './welcome.module.css'
import { Button } from './welcomeStyled';
import { Link } from 'react-router-dom';

const Welcome = (props) => {
  return (
    <>
        <div>
            <h1> Welcome to Henry Videogames</h1>
            <Button as={Link} to="/videogames" variant="primary">Enter</Button>
        </div>
        
    </>
  )
}

export default Welcome



