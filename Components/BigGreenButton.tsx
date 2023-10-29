import React, { FC } from "react";
import { Alert, StyleSheet } from 'react-native';
import { useColorsContext } from '../Theme/Colors'; 
import { BigGreenButtonProps, TonicTextProps } from "../Types/Components";
import TextComponent from "./Text";
import TouchableOpacityComponent from "./TouchableOpacity";

const BigGreenButton:FC<BigGreenButtonProps> = ({text,func}) => {
    const {colors} = useColorsContext()
    return(
        <TouchableOpacityComponent onPress={() => func()} style={styles.buttonMain} color={colors.greenButtonColor}>
            <TextComponent color={colors.colorMain} style={styles.text}>{text}</TextComponent>
        </TouchableOpacityComponent>
    )
}

const styles = StyleSheet.create({
    buttonMain:{
        marginTop:30,
        paddingHorizontal:18,
        paddingVertical:16,
        borderRadius:12
    },
    text:{
        textAlign:"center",
        fontSize:15,
        fontWeight:"700",
        letterSpacing:-0.24,
        lineHeight:24,
        fontFamily:"Rubik-Italic-VariableFont_wght"
    }
})

export default BigGreenButton