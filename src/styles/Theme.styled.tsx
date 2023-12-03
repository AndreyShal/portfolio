import { DefaultTheme } from 'styled-components'
import baseStyled, { ThemedStyledInterface } from 'styled-components';
import { ITheme, ThemeEnum } from './interfaces/styled';

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {
        type: ThemeEnum
    }
}

const baseTheme = {
    maxWidth: "1193px",
    colors: {
        gradientHeading: "linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%)"
    },
    media: {
        laptop: "screen and (max-width: 1439px)",
        tablet: "screen and (max-width: 768px)",
        mobile: "screen and (max-width: 576px)",
    },
}

export const lightTheme: DefaultTheme  = {
    ...baseTheme,
    type: ThemeEnum.light,

    colors: {
        ...baseTheme.colors,
        background: "#ffffff",
        backgroundSecond: "#ffffff",
        solidHeading: "#42446E",
        solidHeadingSecond: "#000",
        content: "#666",
        contentSecond: "#000"
    },

}

export const darkTheme: DefaultTheme  = {
    ...baseTheme,
    type: ThemeEnum.dark,

    colors: {
        ...baseTheme.colors,
        background: "#191919",
        backgroundSecond: "#363636",
        solidHeading: "#D9D9D9",
        solidHeadingSecond: "#CCC",
        content: "#A7A7A7",
        contentSecond: "#fff"
    },
}

export type Theme = typeof lightTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;