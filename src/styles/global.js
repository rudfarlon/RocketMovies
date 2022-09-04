import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: auto;
    scrollbar-color: #FF859B #1C1B1E;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: #1C1B1E;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #FF859B;
    border-radius: 10px;
    border: 3px solid #1C1B1E;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', sans-serif;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }


`;