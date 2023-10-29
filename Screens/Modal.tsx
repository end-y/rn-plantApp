import { useEffect, useState, FC } from "react";
import { Modal, Text, View, Pressable, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity, FlatList } from "react-native";
import PremiumPlant from "../Assets/Images/ImagePremium.png"
import Close from "../Assets/Images/Close.png"
import TextComponent from "../Components/Text";
import { useColorsContext } from "../Theme/Colors";
import { Dummy } from "../Constants/Modal";
import { PremiumInformationCardProps, RadioButtonProps } from "../Types/Modal";
import BigGreenButton from "../Components/BigGreenButton";
import { ScreenPropsGeneral } from "../Types/Screen";
import { useDispatch, useSelector } from "react-redux";
import { DimensionProvider } from "../Providers/Dimensions/type";
import { setActiveIndex } from "../Providers/ActiveIndex/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function ModalComponent({navigation}:ScreenPropsGeneral): JSX.Element {
    const {activeIndex} = useSelector((state:any) => state.activeIndex);
    const dispatch = useDispatch()
    const {width, height} = useSelector((state:DimensionProvider) => state.dimension);
    const [modalVisible, setModalVisible] = useState(activeIndex == 2);
    const {colors} = useColorsContext();
    const [selected, setSelected] = useState(0)
    useEffect(() => {
        setModalVisible(activeIndex == 2)
    },[activeIndex])
    const PremiumInformationCard:FC<PremiumInformationCardProps> = ({data}) => {
        return(
            <View style={styles.informationCardMain}>
                <Image source={data.icon} style={styles.informationCardImage} />
                <TextComponent color={colors.colorMain} style={styles.informationCardText1}>{data.text}</TextComponent>
                <TextComponent color={colors.colorMain} style={styles.informationCardText2}>{data.text2}</TextComponent>
            </View>
        )
    }
    const RadioButton:FC<RadioButtonProps> = ({selectedNumber, text1, text2, discount}) => {
        return(
            <TouchableOpacity onPress={() => setSelected(selectedNumber)} disabled={selected == selectedNumber} style={active(selectedNumber)[0]}>
                <View style={[active(selectedNumber)[1]]}>
                    {selected == selectedNumber && 
                        <View style={styles.littleDot}></View>
                    }
                </View>
                <View>
                    <TextComponent style={styles.textBig} color={colors.colorMain}>{text1}</TextComponent>
                    <TextComponent style={styles.textSmall} color={colors.whiteOpaq}>{text2}</TextComponent>
                </View>
                {discount && 
                    <View style={active(selectedNumber)[2]}>
                        <TextComponent color={colors.colorMain}>Save 50%</TextComponent>
                    </View>
                }
            </TouchableOpacity>
        )
        
    }
    const active = (index:number) => {
        let style:any;
        let style2:any;
        let style3:any;
        if(index == selected){
            style = [{borderColor:"rgba(40, 175, 110, 1)"},styles.radioMainButton] 
            style2 = [{backgroundColor:"rgba(40, 175, 110, 1)"},styles.radioActiveButton] 
            style3= [{backgroundColor:"rgba(40, 175, 110, 1)"}, styles.discount]
        }else{
            style = [{borderColor:"rgba(255, 255, 255, 0.30)"},styles.radioMainButton] 
            style2 = [{ backgroundColor:"rgba(255, 255, 255, 0.08)"},styles.radioActiveButton]
            style3= [{ backgroundColor:"rgba(255, 255, 255, 0.5)"}, styles.discount]
        }
        return [style,style2,style3]
    }
    return (
    <>
      <View style={[styles.centeredView,{width:width, height:height}]}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          >
            <ScrollView scrollEnabled contentContainerStyle={[styles.centeredView]}>
                <Pressable
                    style={[styles.button]}
                    onPress={() => {setModalVisible(false); dispatch(setActiveIndex(1))}}>
                    <Image source={Close} />
                </Pressable>
                <ImageBackground resizeMode={"cover"} style={[{flex:1, width:width, height:480}]} source={PremiumPlant} />
                <View>
                    <View style={[styles.modalView,{width:width,marginTop:-200}]}>
                        <View style={styles.textGroup}>
                            <TextComponent color={colors.colorMain} style={[styles.modalText, styles.modalTextHeavy]}>PlantApp</TextComponent>
                            <TextComponent color={colors.colorMain} style={[styles.modalText, styles.modalTextSoft]}>Premium</TextComponent>
                        </View>
                        <TextComponent color={colors.whiteOpaq} style={[styles.modalTextSmall, styles.modalTextSoft]}>Access All Features</TextComponent>
                        <FlatList 
                            data={Dummy} 
                            nestedScrollEnabled 
                            showsHorizontalScrollIndicator={false} 
                            horizontal 
                            style={{marginTop:20}} 
                            contentContainerStyle={{gap:8}}
                            renderItem={(e:any) => {
                                return(
                                    <PremiumInformationCard data={e.item} />
                                )
                            }}
                        />
                        
                    </View>
                    <RadioButton selectedNumber={0} text1="1 Month" text2="$2.99/month, auto renewable" discount={false} />
                    <RadioButton selectedNumber={1} text1="1 Year" text2="First 3 days free, then $529,99/year" discount />
                    <View style={styles.bigButton}>
                        <BigGreenButton text="Try free for 3 days" func={() => {navigation.navigate("MainPage"), AsyncStorage.setItem("clicked", "true")}} />
                    </View>
                    <TextComponent style={[styles.informationTextMini, styles.informationTextMiniFS9]} color={colors.whiteOpaq}>
                        After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable
                    </TextComponent>
                    <View style={styles.buttonGroup}>
                        <TouchableOpacity>
                            <TextComponent style={[styles.informationTextMini, styles.informationTextMiniFS11]} color={colors.whiteOpaq}>Terms</TextComponent>
                        </TouchableOpacity>
                        <TextComponent style={[styles.informationTextMini, styles.informationTextMiniFS11]} color={colors.whiteOpaq}>{'\u30FB'}</TextComponent>
                        <TouchableOpacity>
                            <TextComponent style={[styles.informationTextMini, styles.informationTextMiniFS11]} color={colors.whiteOpaq}>Privacy</TextComponent>
                        </TouchableOpacity>
                        <TextComponent style={[styles.informationTextMini, styles.informationTextMiniFS11]} color={colors.whiteOpaq}>{'\u30FB'}</TextComponent>
                        <TouchableOpacity>
                            <TextComponent style={[styles.informationTextMini, styles.informationTextMiniFS11]} color={colors.whiteOpaq}>Restore</TextComponent>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </Modal>
      </View>
      </>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flexGrow: 1,
      justifyContent: "flex-start",
      alignItems: 'flex-start',
      backgroundColor:"rgb(16,30,21)",
    },
    modalView: {
      borderRadius: 20,
      paddingLeft: 20,
      alignItems: "flex-start",
    },
    button:{
        position:"absolute",
        top:20,
        right:20,
        zIndex:1
    },
    radioMainButton:{marginHorizontal:20, flexDirection:"row", gap:8, paddingVertical:13, paddingHorizontal:20, alignItems:"center", borderWidth:1, borderRadius:14, backgroundColor:"rgba(255, 255, 255, 0.05)",  marginTop:20},
    radioActiveButton:{width:24, height:24, borderRadius:48, justifyContent:"center", alignItems:"center"},
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    informationCardMain:{width:156, height:130, backgroundColor:"rgba(255, 255, 255, 0.08)", borderRadius:14, padding:15},
    informationCardImage:{marginBottom:10},
    informationCardText1:{fontSize:20, marginBottom:5},
    informationCardText2:{fontSize:13},
    modalText: {
      textAlign: 'center',
      fontSize: 38,
      fontFamily:"Rubik-VariableFont_wght",

    },
    littleDot:{width:8, height:8, backgroundColor:"white", borderRadius:48},
    modalTextHeavy:{
        fontWeight:"800"
    },
    modalTextSoft:{
        fontWeight:"300"
    },
    textGroup:{flexDirection:"row", gap:8, flexWrap:"wrap",},
    modalTextSmall:{
        fontSize:17,
        fontWeight:"300"
    },
    bigButton:{paddingHorizontal:20},
    informationTextMini:{
        textAlign:"center",
        fontWeight:"300",
        marginTop:10
    },
    informationTextMiniFS9:{
        fontSize:9,
        paddingHorizontal:20,
    },
    informationTextMiniFS11:{
        fontSize:11,
        paddingHorizontal:5,
    },
    buttonGroup:{flexDirection:"row", justifyContent:"center", alignItems:"center", marginBottom:50},
    textBig:{
        fontSize:16,
        fontWeight:"500"
    },
    textSmall:{
        fontSize:12,
        fontWeight:"400"
    },
    discount:{position:"absolute",  top:0, right:0, paddingHorizontal:12, paddingVertical:4,borderBottomLeftRadius:20, borderTopRightRadius:14}
});