import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Roboto', sans-serif !important;
    -webkit-font-smoothing: antialiased !important;
  }
   body, input, button {
    /* font-family: 'Roboto', serif; */
    font-size: 16px;
    outline:0;
  }

  button {
    cursor: pointer;
  }

`;
