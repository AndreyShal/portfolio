import {createGlobalStyle} from "styled-components";

export function fontFace(name: string, src: string, fontWeight: number, fontStyle = 'normal'){
    /* eslint-disable */
    return `
      @font-face{
          font-family: "${name}";
          src: url(${require('../assets/fonts/' + src + '.woff2')}) format("woff2"),
          font-style: ${fontStyle};
          font-weight: ${fontWeight};
          font-display: swap;
      }
  `;
}

export const GlobalStyles = createGlobalStyle`
  ${fontFace("DM Sans", 'DMSans/DMSans-Regular', 400, 'normal')}
  ${fontFace("DM Sans", 'DMSans/DMSans-Medium', 500, 'normal')}
  ${fontFace("Poppins", 'Poppins/Poppins-Light', 300, 'normal')}
  ${fontFace("Poppins", 'Poppins/Poppins-Regular', 400, 'normal')}
  ${fontFace("Poppins", 'Poppins/Poppins-Bold', 700, 'normal')}
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus-visible {
    outline: 2px solid ${({theme}) => theme.colors.content};
  }

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    overflow-x: hidden;
  }

  body {
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`