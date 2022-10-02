import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background-color: white;
        font-family: 'Poppins';
        margin: 0;
    }
`

export default GlobalStyles;