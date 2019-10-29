import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Poppins&display=swap');

  * {
    box-sizing: border-box;
  }
  
  body {
    padding: 0;
    margin: 0;
    font-family: avenir;
  }
  a {
    text-decoration: none;
  }
  
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
`;
