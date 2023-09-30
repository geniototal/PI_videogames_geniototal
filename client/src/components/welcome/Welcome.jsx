//import styles from './welcome.module.css'
import { Button, Title } from './welcomeStyled';
import { Link } from 'react-router-dom';

const Welcome = (props) => {
  return (
    <>
        <div>
            <Title> Welcome to Henry Videogames</Title>
            <Button as={Link} to="/videogames" variant="primary">Enter</Button>
        </div>
        
    </>
  )
}

export default Welcome



