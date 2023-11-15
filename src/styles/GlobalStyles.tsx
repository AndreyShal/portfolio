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
  ${fontFace("DM Sans", 'DMSans/DMSans-Medium', 500, 'normal')}
  ${fontFace("Poppins", 'Poppins/Poppins-Bold', 700, 'normal')}
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`