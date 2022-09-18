import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html { 
    box-sizing: border-box;
}
*,*::after,*::before{
    box-sizing: inherit;
} 
body {
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 300;
    min-height: 100vh;
    background-color: #242424;
}

main {
  padding: 20px 0;
  max-width: 1280px;
  margin: 0 auto;
}

header {
  background-color: #464444;
}

a {
    font-family: inherit;
    text-decoration: none;
}
`;

export default GlobalStyle;
