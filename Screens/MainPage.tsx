import { Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from "../Assets/Images/homeicon.png"
import Leaf from "../Assets/Images/leaf.png"
import DiagnoseImage from "../Assets/Images/Vector.png"
import User from "../Assets/Images/Icon.png"
import ScanButton from "../Assets/Images/ScanButton.png"

import { useColorsContext } from "../Theme/Colors";
import HomeScreen from "./HomePage";
import Diagnose from "./Diagnose";
import Profile from "./Profile";
import MyGarden from "./MyGarden";

export default function MainPageScreen(): JSX.Element {
    const {colors} = useColorsContext();
    const Tab = createBottomTabNavigator();
    
    return(
        <Tab.Navigator >
            <Tab.Screen options={{
                        tabBarActiveTintColor:colors.greenButtonColor,
                        headerShown:false,
                        tabBarLabel: 'Home',
                        tabBarIcon:({focused})=>{
                            return <Image source={HomeIcon} />
                        }
                    }} name="Home" component={HomeScreen} />
            <Tab.Screen
                    options={{
                        tabBarActiveTintColor:colors.greenButtonColor,
                        headerShown:false,
                        tabBarLabel: 'Diagnose',
                        tabBarIcon:({focused})=>{
                            return <Image source={DiagnoseImage} />
                        }
                    }} name="Diagnose" component={Diagnose} />
             <Tab.Screen 
                    options={{
                        tabBarActiveTintColor:colors.greenButtonColor,
                        headerShown:false,
                        tabBarLabel:"",
                        tabBarIcon:({focused})=>{
                            return <Image source={ScanButton} style={{marginBottom:30}} />
                        }
                    }} name="Scan" component={MyGarden} />
            <Tab.Screen 
                    options={{
                        tabBarActiveTintColor:colors.greenButtonColor,
                        headerShown:false,
                        tabBarLabel: 'My Garden',
                        tabBarIcon:({focused})=>{
                            return <Image source={Leaf} />
                        }
                    }} name="MyGarden" component={MyGarden} />
            <Tab.Screen 
                    options={{
                        tabBarActiveTintColor:colors.greenButtonColor,
                        headerShown:false,
                        tabBarLabel: 'My Profile',
                        tabBarIcon:({focused})=>{
                            return <Image source={User} />
                        }
                    }} name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}