import styled from 'styled-components'

export const Button = styled.button`
    border-radius: 0.5em;
    border: solid 1px black;
    text-decoration: none;
    margin-left: 1rem;
    width: 85px;
    padding: 0.3em;
    border: none;
    color: rgb(12, 20, 69);
    font-family:'Courier New', Courier, monospace;
    font-weight: 700;
    font-size: 1em;
    transform-style: preserve-3d;
    transform: translateZ(-20px) rotateX(20deg);
    position:relative;
    &:hover {
      background-color: #00ff40;
      cursor: pointer;
    }
  `;