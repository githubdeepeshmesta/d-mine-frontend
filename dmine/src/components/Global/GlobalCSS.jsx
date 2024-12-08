import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    font-size:14px
    color: #333;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6  {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  } 

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style-type: none;
  }

`;