export enum ThemeEnum  {
    light = "light",
    dark = "dark"
}

export interface ITheme {
    colors: {
        gradientHeading: string;
        background: string,
        solidHeading: string,
    },
    media: {
        tablet: string,
        mobile: string,
    },
}