/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
  BackHandler,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { updateDimensions } from './Providers/Dimensions/actions';
import MainPageScreen from './Screens/MainPage';
import OpeningScreen from './Screens/OpeningScreen';
import SliderScreen from './Screens/SliderScreen';
const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  const dispatch = useDispatch();
  const [initialRoute, setInitialRoute] = useState("false");
  useEffect(() => {
    async function getInitialRoute() {
      try {
        const result = await AsyncStorage.getItem("clicked");
        if (result === "true") {
          setInitialRoute("true");
        }
      } catch (error) {
        console.error("Error reading AsyncStorage:", error);
      }
    }
    getInitialRoute()
    BackHandler.addEventListener("hardwareBackPress", back)
    const { width, height } = Dimensions.get("screen");
    dispatch(updateDimensions({ width, height }));
    return () => {
      BackHandler.removeEventListener("hardwareBackPress",back)
    }
  }, []);
  function back(){
    return true
  }
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {
          initialRoute == "false" ?
          <>
            <Stack.Screen
              name="Home"
              component={OpeningScreen}
              options={{ headerShown:false }}
            />
            <Stack.Screen
              name="Information"
              component={SliderScreen}
              options={{ headerShown:false }}
            />
            <Stack.Screen
              name="MainPage"
              component={MainPageScreen}
              options={{ headerShown:false }}
            />
          </> 
          :
          <Stack.Screen
            name="MainPage"
            component={MainPageScreen}
            options={{ headerShown:false }}
          />
        }
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
