import { Key, ReactNode, ReactPropTypes } from "react";
import { ColorValue, StyleProp, StyleSheetProperties, TextProps as RNTextProps, TextStyle, TouchableOpacityProps as RNTouchableOpacityProps } from "react-native/types";

export interface SliderProps {
    children: ReactNode[]; // ReactNode tipini ekleyin
}

export interface TonicTextProps {
    text: string; 
    tonic: string;
    underline?:boolean,
    addMarginBottom?:number
}
export interface BigGreenButtonProps {
    text: string;
    func: () => void
}
export interface TouchableOpacityProps extends RNTouchableOpacityProps {
    color?:ColorValue,
    style?:StyleProp<TouchableOpacityProps> |  StyleProp<TouchableOpacityProps>[] | any,
    children:ReactNode,
    rest?:TouchableOpacityProps
}
export interface TextProps extends RNTextProps{
    color?:ColorValue,
    style?: TextStyle | TextStyle[],
    children:ReactNode,
}