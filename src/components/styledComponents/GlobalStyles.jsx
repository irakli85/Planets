import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root{
        --white: #FFFFFF;
        --black-pearl: #070724;
        --bright-gray: #38384F;
        --waterloo: #838391;
        --pelorous: #419EBB;
        --tulip-tree: #EDA249;
        --purple-heart: #6D2ED5;
        --valencia: #D14C32;
        --flame-pea: #D83A34;
        --piper: #CD5120;
        --java: #1EC1A2;
        --royal-blue: #2D68F0;
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
      background-image: url('../../src/assets/background-stars.svg')
    }  
`;

export default GlobalStyles;