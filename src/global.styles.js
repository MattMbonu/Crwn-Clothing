import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: "Open Sans Condensed";
    font-size: 1.6rem;
    padding: 2rem 6rem;
    @media screen and (max-width: 800px) {
        padding: 10px;
    }
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  

`;
