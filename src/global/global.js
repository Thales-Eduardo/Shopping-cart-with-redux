import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #191920;
    -webkit-font-smoothisng: antialiased;
  }

  body, input, button, textarea {
    font: 400 16px "Roboto", sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong, span{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0px 20px 50px;
  }
`;
