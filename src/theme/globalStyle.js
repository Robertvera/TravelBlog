import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    html {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }
    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: hsla(0, 0%, 0%, 0.8);
        font-family: georgia, serif;
        font-weight: normal;
        word-wrap: break-word;
    }
`;