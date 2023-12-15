import { createGlobalStyle } from "styled-components";
import bg from '../../assets/background-stars.svg'

const GlobalStyles = createGlobalStyle`

    :root{
        --white: #FFFFFF;
        --black-pearl: #070724;
        --bright-gray: #38384F;
        --waterloo: #838391;
        --mercury: #419EBB;
        --venus: #EDA249;
        --earth: #6D2ED5;
        --mars: #D14C32;
        --jupiter: #D83A34;
        --saturn: #CD5120;
        --uranus: #1EC1A2;
        --neptune: #2D68F0;
    }


    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      border: none;
      font-family: 'Antonio', sans-serif;
      /* font-family: 'League Spartan', sans-serif; */
      font-size: 62.5%;
    }

    body{
      width: 100%;
      height: auto;  
      background: var(--black-pearl);     
      background-image: url(${bg})
    }  
`;

export default GlobalStyles;