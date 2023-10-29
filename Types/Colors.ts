export interface ThemeColors {
    colorMain: string;
    textColorSlider: string;
    greenButtonColor: string;
    linkColor: string,
    pointBlack:string,
    pointGray:string,
    whiteOpaq:string,
    lightYellow:string,
    mailBrown:string
}

export interface ColorsContextProps {
    colors: ThemeColors;
    toggleColorScheme: () => void;
}