import styled from 'styled-components'

export const Button = styled.button`
    border-radius: 0.5em;
    display: block;
    border: solid 1px black;
    text-decoration: none;
    margin: auto;
    background-color: white;
    margin-top: 2em;
    width: 110px;
    padding: 0.3em;
    border: none;
    color: rgb(12, 20, 69);
    font-family:'Courier New', Courier, monospace;
    font-weight: 700;
    font-size: 2em;
    transform-style: preserve-3d;
    transform: translateZ(-20px) rotateX(20deg);
    position:relative;
    text-align: center;
    &:hover {
      background-color: #00ff40;
      cursor: pointer;
    }
  `;
  export const Title= styled.div`
    color:black;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    font-size: 3em;
    font-weight: bold;
    padding-top: 1em;
  `
  

export const SubTitle= styled.div`
color:black;
text-align: center;
font-family: 'Courier New', Courier, monospace;
font-size: 1.5em;
font-weight: bold;
padding-top: 1em;
`