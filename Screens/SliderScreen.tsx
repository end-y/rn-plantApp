import { View, Image, ImageBackground } from "react-native";
import BigGreenButton from "../Components/BigGreenButton";
import Slider from "../Components/Slider";
import TonicText from "../Components/TonicText";
import Content from "../Assets/Images/Content.png"
import Background from "../Assets/Images/Background2.png"
import PlantBG from "../Assets/Images/PlantBG.png"
import FlatPhone from "../Assets/Images/FlatiPhone.png"
import Artwork from "../Assets/Images/Artwork.png"
import ModalComponent from "./Modal";
import { FC } from "react";
import { ScreenPropsGeneral } from "../Types/Screen";
import { useDispatch, useSelector } from "react-redux";
import { DimensionProvider } from "../Providers/Dimensions/type";
import { setActiveIndex } from "../Providers/ActiveIndex/actions";
import LinearGradient from "react-native-linear-gradient";
export default function SliderScreen({navigation}:ScreenPropsGeneral): JSX.Element {
    const {width} = useSelector((state:DimensionProvider) => state.dimension);
    const dispatch = useDispatch()
    const FirstSlide:FC = () => {
        return(
            <ImageBackground source={Background} style={{width:width, justifyContent:"center", padding:30}}>
                <View style={{justifyContent:"center", flex:1}}>
                    <TonicText text="Take a photo to identify the plant"  underline={true} tonic="identify" />
                    <View style={{flex:1,}}>
                        <Image source={Content} style={{alignSelf:"center",  objectFit:"cover"}} />
                    </View>
                    <View style={{zIndex:1}}>
                        <BigGreenButton text="Continue" func={() => dispatch(setActiveIndex(2))} />
                    </View>
                </View>
                
            </ImageBackground>
        )
    }
    const SecondSlide:FC = () => {
        return (
        <View style={{width:width,justifyContent:"center", padding:30, backgroundColor:"white"}}>
        <ImageBackground resizeMode={"repeat"} source={PlantBG} style={{width:width,  height:500, transform:[{rotate:"80deg"}], position:"absolute"}} />
            <View style={{justifyContent:"center", flex:1}}>
                <TonicText text="Get plant care guides" underline={true} addMarginBottom={80} tonic="care guides" />
                <View style={{flex:1,position:"relative",}}>
                    <Image source={Artwork} style={{alignSelf:"center",  objectFit:"cover", position:"absolute", zIndex:1, top:-60, right:-30}} />
                    <Image source={FlatPhone} style={{alignSelf:"center",  objectFit:"cover"}} />
                </View>
                <View style={{zIndex:1}}>
                    <BigGreenButton text="Continue" func={() => dispatch(setActiveIndex(2))} />
                </View>
            </View>
            <LinearGradient style={{height:300, position:"absolute", bottom:0, width:"100%"}} colors={['transparent',  'white']} />
        </View>
        )
    }
    return(
        <>
        <Slider>
            <FirstSlide />
            <SecondSlide />
            <ModalComponent navigation={navigation} />
        </Slider>
        </>

    )
}