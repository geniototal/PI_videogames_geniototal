//import styles from './welcome.module.css'
import { Button, Title, SubTitle } from './welcomeStyled';
import { Link } from 'react-router-dom';

const Welcome = (props) => {
  return (
    <>
        <div>
            <Title> Welcome to Henry Videogames</Title>
            <SubTitle> This site is an individual project made for Henry</SubTitle>
            <SubTitle>by Carlos Malissia</SubTitle>
            <Button as={Link} to="/videogames" variant="primary">Enter</Button>
        </div>
        
    </>
  )
}

export default Welcome



