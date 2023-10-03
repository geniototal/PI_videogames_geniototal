import styled from 'styled-components'

export const DivSearch = styled.div`
padding: 1em;
display: flex;
justify-content: center;
`

export const Btn = styled.button`
  
    font-size: 1.4em;
    border-radius: 20%;
    height: 40px;
    color: blue;
    margin-left: 0.3em;
    &:hover {
      background-color: #00ff40;
      cursor: pointer;
    }
    @media(max-width: 768px) {
    height: 25px;
    margin-top: 1em;
    }
  `;

 export const Input = styled.input`
    border-radius: 0.5em;
    background-color:#ececec;
    width: 250px;
    margin-left: 0.6em;
    padding: 0.5em;
    height: 40px;
    border: solid rgb(12, 20, 69);
    color: #370617;
    font-weight: 700;
    font-size: 1em;
    position:relative;
    @media(max-width: 768px) {
    height: 30px;
    width: 170px;
    margin-top: 1.3em;
    
    }
  
    /* transform-style: preserve-3d;
    transform: translateZ(-10px) rotateX(10deg); */
    &:hover {
      background-color: rgb(45, 63, 182);
      color:#ececec;
    }

  `;
  export const Button = styled.button`
    color: #370617;
    margin-left: 0.5em;
    height: 40px;
    border-radius: 0.5em;
    font-weight: 700;
    padding: 0em .5em;
    @media(max-width: 768px) {
    height: 26px;
    margin-top: 1.5em;
    }
    &:hover {
      background-color: #00ff40;
      cursor: pointer;
    }
  `