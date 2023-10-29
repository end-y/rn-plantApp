import React, { FC, useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import { useColorsContext } from '../Theme/Colors'; 
import { TonicTextProps } from "../Types/Components";
import TextComponent from "./Text";
import Line from "../Assets/Images/Line.png"
const TonicText:FC<TonicTextProps> = ({ text, tonic, underline, addMarginBottom }) => {
  const { colors } = useColorsContext()
  const tonicArray = tonic.split(" ")
  const splitted = text.split(" ").map((word, index) => {
    const type = tonicArray.includes(word) ? "em" : "default";
    return { word, type, key: index.toString() };
  });
  let index = splitted.find(e => e.type == "em")?.key;
  return (
    <View style={[style.main, {marginBottom:addMarginBottom || 0}]} >
      {splitted.map((wordObj,i) => (
        <View style={
          [
            {alignItems:tonicArray.length > 1 ? "flex-start" : "center" , 
            justifyContent:tonicArray.length > 1 ? "flex-start" : "center", 
            },style.tonic
          ]
          }>
            <TextComponent key={wordObj.key} color={colors.textColorSlider} style={style[wordObj.type]}>
              {wordObj.word}{" "}
            </TextComponent>
            {underline && wordObj.type == "em" && index == wordObj.key && <Image style={style.image}  source={Line} />}
        </View>
      ))}
    </View>
  );
}
const style:any = StyleSheet.create({
    main:{
        flexDirection:"row",
        marginBottom:8,
        flexWrap:"wrap"
    },
    tonic:{
      flexDirection:"column", 
      position:"relative"
    },
    image:{
      position:"absolute", 
      bottom:-8
    },
    em:{
        fontSize:28,
        fontWeight:"800",
        fontFamily:"Rubik-VariableFont_wght",
        letterSpacing:-1,
    },
    default:{
        fontSize:28,
        fontWeight:"600",
        fontFamily:"Rubik-VariableFont_wght",
        letterSpacing:-1,
    }
})
export default TonicText