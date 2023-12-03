export enum ThemeEnum  {
    light = "light",
    dark = "dark"
}

export interface ITheme {
    maxWidth: string,
    colors: {
        gradientHeading: string;
        background: string,
        backgroundSecond: string,
        solidHeading: string,
        solidHeadingSecond: string,
        content: string,
        contentSecond: string
    },
    media: {
        laptop: string,
        tablet: string,
        mobile: string,
    },
}