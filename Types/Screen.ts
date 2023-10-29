import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Information:undefined;
  MainPage:undefined
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export interface ScreenPropsGeneral{
    navigation:HomeScreenNavigationProp
}