import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; // something that we should write
  }

  html {
    @media (max-width: 1700px){
      font-size: 75%;
    }
  }

  body {
    background: #1b1b1b;
    font-family: 'inter' , sans-serif;
    overflow-x: hidden;
  }

  button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem; //what this would do
    border: 3px solid #23d997;
    background: transparent; //have to check this out to
    color: white;
    transition: all 0.5s ease; //have to check this out to
    font-family: 'inter' , sans-serif;

    &:hover { //have to check this out to
      background-color: #23d997;
      color: white;
    }
  }

  h2 {
    font-weight: lighter;
    font-size: 4rem;
  }

  h3 {
    color: white;
  }

  h4 {
    font-weight: bold;
    font-size: 2rem;
  }
  
  a {
    font-size: 1.1rem;
  }

  span {
    font-weight: bold;
    color: #23d997;
  }

  p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
  }
`;

// ed: u can also nest things with styled components...
// so as u can see u can add an and:hover if u wanna add
// a hover or if you wanna add and:focus

// what is nest
