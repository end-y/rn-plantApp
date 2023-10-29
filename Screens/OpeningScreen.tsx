import {
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    View,
  } from 'react-native';
import Background from "../Assets/Images/Background.png"
import Plant from "../Assets/Images/Image.png"
import TonicText from '../Components/TonicText';
import TextComponent from '../Components/Text';
import TouchableOpacityComponent from '../Components/TouchableOpacity';
import BigGreenButton from '../Components/BigGreenButton';
import { useColorsContext } from '../Theme/Colors'; 
import { ScreenPropsGeneral } from '../Types/Screen';
export default function OpeningScreen({navigation}:ScreenPropsGeneral): JSX.Element {
    const {colors} = useColorsContext();
    return(
        <ScrollView>
            <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
                <TonicText tonic='PlantApp' text='Welcome to PlantApp' />
                <TextComponent style={styles.altText} color={colors.textColorSlider}  >
                    Identify more than 3000+ plants and 88% accuracy.
                </TextComponent>
                <Image style={{alignSelf:"center"}} source={Plant} />
                <BigGreenButton  func={() => navigation.navigate("Information")}  text='Get Started' />
                <View style={[styles.linkView]}>
                    <TextComponent style={styles.linktext} color={colors.linkColor}  >
                        By tapping next, you are agreeing to PlantID 
                    </TextComponent>
                    <View style={styles.linkList}>
                        <TouchableOpacityComponent>
                            <TextComponent style={[styles.linktext,styles.underline]} color={colors.linkColor}  >
                                Terms of Use 
                            </TextComponent>
                        </TouchableOpacityComponent>
                            <TextComponent style={styles.linktext} color={colors.linkColor}  >
                            {"&"} 
                            </TextComponent>
                        <TouchableOpacityComponent >
                            <TextComponent style={[styles.linktext,styles.underline]} color={colors.linkColor}  >
                                Privacy Policy.
                            </TextComponent>
                        </TouchableOpacityComponent>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        padding:30
      },
      altText:{
        fontSize:16,
        fontFamily:"Rubik-VariableFont_wght",
        fontWeight:"400",
      },
      linkView:{
        marginTop:10
      },
      linktext:{
        textAlign:"center",
        fontSize:11
      },
      linkList:{
        flexDirection:"row",
        gap:5,
        alignItems:"center",
        justifyContent:"center",
        marginTop:3
      },
      underline:{
        textDecorationStyle:"dashed",
        textDecorationLine:"underline", 
      }
})