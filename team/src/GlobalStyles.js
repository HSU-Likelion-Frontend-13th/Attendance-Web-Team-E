import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        width: 100%;
        height: 100%;
        overflow: hidden; /* 스크롤 방지 */
    }

    #root {
        width: 100%;
        height: 100%;
    }
`;

export default GlobalStyles;