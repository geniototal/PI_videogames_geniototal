import styled from 'styled-components'

export const NavContainer = styled.nav`
    .h1 {
        color: white;
        font-size: 1.5vw;
    }
    
    position: fixed; 
    z-index: 2;
    top:0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(0,0,0, .7);
    box-shadow: 0 10px 4px #000;
    margin: 1rem 5vw;
    padding: 0 1rem;
    height: 4em;
    width: 90vw;
    border-radius: 2rem;
    
    .links {
        display: flex;
        justify-content: space-around;
        column-gap: 1rem;
        align-items: center;
        height: 4rem;
        }
   
    @media(max-width: 768px) {
        .h1 {
            font-size: 3vw;
        }
        .links {
            position: fixed;
            top:15vh;
            right: 0;
            width: 25%;
            padding-top: 3rem;
            padding-bottom: 1.5rem;
            height: 65vh;
            background-color: rgba(0,0,0, .7);
            box-shadow: 10px 10px 4px #000;
            border-radius: 1rem;
            display: flex;
            flex-direction: column;
            gap:2rem;
            transform: translateX(100%);
            transition: all .5s ease;
        }
    }
    .links.active {
        transform: translateX(0%);
    }
    
    .button {  
        text-align: center;
        font-family: var(--second-font);
        position: relative;
        /* height: 100%; */
        //padding: 1.3rem 0rem;
        padding-left: .3rem;
        margin-right: .8em;
        color: var(--title-color);
        cursor: pointer;
        transition: 0.5s;
    &:after {
        content: '';
        width: 0%;
        height: 3px;
        background-color: var(--title-color);
        position: absolute;
        left: 0;
        bottom: -.3rem;
        transition: width .4s;
    }
    &:hover::after {
        width: 70%;
    }   
    &:hover {
        font-weight: 600;
        /* color: #00ff40 */
    }
    
    
} 
.activo {
    font-family: var(--second-font);
    height: 100%;
    position: relative;
    padding: 1.3rem 0rem;
    margin-right: .8em;
    font-weight: 600;
    color: #00ff40;
    /* &:after{
        content: '';
        width: 0%;
        height: 3px;
        background-color: #00ff40;
        position: absolute;
        left: 0;
        bottom: 1rem;
        transition: width .4s;
    }    
    &:hover::after {
    width: 70%;
  }     */  
}  
    .random {
        position:relative;
        border-radius: 0.5em;
        margin-left: .1rem;
        margin-top: 1rem;
        width: 90px;
        height: 2.8rem;
        padding: 0.3em;
        border: none;
        color: rgb(12, 20, 69);
        font-family:'Courier New', Courier, monospace;
        font-weight: 700;
        font-size: 1em;
        transform-style: preserve-3d;
        transform: translateZ(-20px) rotateX(20deg);
        
    &:hover {
      background-color: #00ff40;
      cursor: pointer;
    }
    }
    .contain_button {
        display: flex;
        justify-content: space-around;
    }

`
export const BurgerContainer = styled.div `
    cursor: pointer;
    display: none;
    @media(max-width: 768px) {
        display: block;
            
    }  
`
export const BgDiv = styled.div `
    /* position: absolute;
    background-color: rgba(0,0,0, .7);
    top: -900px;
    left: -1000px;
    width: 100%;
    height: 100%;
    transition: all .6s ease;
    &.active {
        border-radius: 1rem;
        top: 6em;
        left: -3em;
        width: 120px;
        height: 400px;
        z-index: -1;
    } */
`
 
