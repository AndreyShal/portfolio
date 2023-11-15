import { DefaultTheme } from 'styled-components'
import baseStyled, { ThemedStyledInterface } from 'styled-components';
import { ITheme, ThemeEnum } from './interfaces/styled';

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {
        type: ThemeEnum
    }
}

const baseTheme = {
    colors: {
        gradientHeading: "linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%)"
    },
    media: {
        tablet: "screen and (max-width: 768px) and (min-width: 577px)",
        mobile: "screen and (max-width: 576px)",
    },
}

export const lightTheme: DefaultTheme  = {
    ...baseTheme,
    type: ThemeEnum.light,

    colors: {
        ...baseTheme.colors,
        background: "#ffffff",
        solidHeading: "#42446E",
    },

}

export const darkTheme: DefaultTheme  = {
    ...baseTheme,
    type: ThemeEnum.dark,

    colors: {
        ...baseTheme.colors,
        background: "#191919",
        solidHeading: "#D9D9D9",
    },
}

export type Theme = typeof lightTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;