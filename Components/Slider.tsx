import React, { FC, ReactNode, useContext, useEffect, useRef, useState } from "react"
import {
  Dimensions,
    ScrollView, View,
  } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { setActiveIndex } from "../Providers/ActiveIndex/actions";
import { ActiveIndexProvider } from "../Providers/ActiveIndex/type";
import { DimensionProvider } from "../Providers/Dimensions/type";
import { useColorsContext } from "../Theme/Colors";
import { SliderProps } from "../Types/Components";
const Slider:FC<SliderProps> = ({ children }) => {
  const {colors} = useColorsContext();
  const {activeIndex} = useSelector((state:ActiveIndexProvider) => state.activeIndex);
  const dispatch = useDispatch()
  const {width} = useSelector((state:DimensionProvider) => state.dimension);
  const scrollViewRef = useRef<ScrollView | null>(null);

  const itemWidth = width

  const handleScroll = (event: any) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(xOffset / itemWidth);
    return index
  };
  let active = (index:number) => {
    let style;
    if(index == activeIndex){
      style = {width:10,height:10, borderRadius:20, backgroundColor:colors.pointBlack}
    }else{
      style = {width:6,height:6, borderRadius:12, backgroundColor:colors.pointGray}
    }
    return style
  } 
  useEffect(() => {
      if(activeIndex == 1){
        scrollViewRef.current.scrollTo({ x: (activeIndex) * itemWidth, animated: true });
      }
  }, [activeIndex]);
  return (
    <> 
      <ScrollView keyboardShouldPersistTaps='always' nestedScrollEnabled ref={scrollViewRef} onMomentumScrollEnd={(e) => dispatch(setActiveIndex(handleScroll(e)))} onScroll={handleScroll} showsHorizontalScrollIndicator={false} horizontal pagingEnabled contentContainerStyle={{justifyContent:"center", alignItems:"center"}}>
        {children}
      </ScrollView>
      {[0,1].some(e => e== activeIndex) &&
      <View style={{justifyContent:"center", alignItems:"center", flexDirection:"row", gap:6, marginBottom:30}}>
        {new Array(children.length).fill(0).map((e,i) => {
          return(
            <View style={active(i)} />
          )
        })}
      </View>
      }
    </>

  );
}

export default Slider