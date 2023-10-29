import React, { FC } from "react"
import {
    TouchableOpacity,
  } from 'react-native';
import { TouchableOpacityProps } from "../Types/Components";
  
const TouchableOpacityComponent:FC<TouchableOpacityProps> = ({style,color,children, ...rest}) => {
    return (
        <TouchableOpacity {...rest} style={{ backgroundColor: color, ...style }} >{
            children
        }</TouchableOpacity>
    )
}

export default TouchableOpacityComponent