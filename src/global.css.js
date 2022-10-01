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
    font-family: ${(props) => props.theme.fonts[0]};
    font-weight: ${(props) => props.theme.fontWeight.slim};
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.primary};
}

main {
  padding: 20px 0;
  max-width: 1280px;
  margin: 0 auto;
}

header {
  background-color: ${(props) => props.theme.colors.secondary};
}

a {
    font-family: inherit;
    text-decoration: none;
}
`;

export default GlobalStyle;
