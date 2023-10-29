import React, { FC, ReactNode } from "react"
import {
    StyleSheet,
    Text,
  } from 'react-native';
import { TextProps } from "../Types/Components";
  
const TextComponent:FC<TextProps> = ({style,color,children,...rest}) => {
    return (
        <Text {...rest} style={Array.isArray(style) ? {color:color,fontFamily:"Rubik-VariableFont_wght", ...Object.assign({},...style)} : { color: color, ...style }} >{
            children
        }</Text>
    )
}

export default TextComponent