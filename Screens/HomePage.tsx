import TextComponent from '../Components/Text';
import TouchableOpacityComponent from "../Components/TouchableOpacity";
import { useEffect, useState } from "react";
import { URLS } from "../Constants/MainPage";
import { ActivityIndicator, FlatList, Image, ImageBackground, StyleSheet, Linking, TextInput, View, ScrollView } from "react-native";
import { CategoryProps, QuestionProps } from "../Types/MainPage";
import { arrayToChunks } from "../Constants/UsefulFunctions";  
import Search from "../Assets/Images/search-outline.png"
import Background from "../Assets/Images/Background3.png"
import Mail from "../Assets/Images/mail.png"
import Arrow from "../Assets/Images/arrow.png"
import { useColorsContext } from "../Theme/Colors";

export default function HomeScreen():JSX.Element{
    const {colors} = useColorsContext();
    const [questions,setQuestions] = useState([])
    const [categories,setCategories] = useState<any[][]>([])
    useEffect(() => {
        let abortController = new AbortController()
        async function run(){
            let res = await fetch(URLS.getQuestions,{signal:abortController.signal})
            let json = await res.json()
            setQuestions(json)
        }
        run()
        let abortController2 = new AbortController()
        async function run2(){
            let res = await fetch(URLS.getCategories,{signal:abortController2.signal})
            let json = await res.json()
            setCategories(arrayToChunks(json.data,2))
        }
        run2()
        return () => {
            abortController.abort()
            abortController2.abort()
        }
    },[])
    return (
        <ScrollView>
        <ImageBackground style={styles.mainView} source={Background} >
            <TextComponent style={styles.textSmall} color={colors.pointBlack}>Hi, plant lover!</TextComponent>
            <TextComponent style={styles.textBig} color={colors.pointBlack}>Good Afternoon! ⛅</TextComponent>
            <View>
                <Image source={Search} style={styles.searchImage} />
                <TextInput style={styles.textInput} placeholder="Search for plants" />
            </View>
        </ImageBackground>
        <TouchableOpacityComponent color={colors.mailBrown} style={styles.subscriptionMail}>
            <Image source={Mail} />
            <View style={{flex:1}}>
                <TextComponent style={styles.free} color={colors.lightYellow}>FREE Premium Avaiable</TextComponent>
                <TextComponent color={colors.lightYellow}>Tap to upgrade your account!</TextComponent>
            </View>
            <Image source={Arrow} style={{marginRight:10}} />
        </TouchableOpacityComponent>
        <View style={{padding:20}}>
            <TextComponent color={colors.pointBlack} style={styles.head}>Get Started</TextComponent>
            
            {questions.length > 0 ? 
                <FlatList 
                    data={questions} 
                    nestedScrollEnabled 
                    showsHorizontalScrollIndicator={false} 
                    horizontal 
                    style={{marginTop:20}} 
                    contentContainerStyle={{gap:8}}
                    renderItem={(e) => {
                        let i = e.item as QuestionProps
                        return(
                            <TouchableOpacityComponent key={i.id} onPress={() => Linking.openURL(i.uri) }>
                                <ImageBackground source={{uri:i.image_uri}} >
                                    <View style={{width:240, height:164, justifyContent:"flex-end", paddingHorizontal:10}}>
                                        <TextComponent  color={colors.colorMain} style={{fontWeight:"400", height:55, alignSelf:"center",  fontSize:16}}>{i.title}</TextComponent>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacityComponent>
                            

                        )
                    }}
                />
                :
                <View style={{height:164, justifyContent:"center", alignItems:"center"}}>
                    <ActivityIndicator size={"large"} />
                </View>
            }
            {categories.length > 0 ? 
                categories.map(e => {
                    let one = e[0] as CategoryProps;
                    let two = e[1] as CategoryProps;
                    return(
                        <View style={{flexDirection:"row", gap:10, marginTop:20}}>
                            <View style={styles.col2}>
                                <Image width={"100%"} height={150} source={{uri:one.image.url}} />
                                <TextComponent style={{position:"absolute", top:20, left:20, maxWidth:85, height:"100%", fontSize:16, fontWeight:"600"}} color={colors.pointBlack}>{one.title}</TextComponent>
                            </View>
                                <View style={two ? styles.col2 : {flex:2}}>
                                {two &&<Image width={"100%"} height={150} source={{uri:two.image.url}} />}
                                {two &&  <TextComponent style={{position:"absolute", top:20, left:20,  maxWidth:85, height:"100%", fontSize:16, fontWeight:"600"}} color={colors.pointBlack}>{two.title}</TextComponent>}
                            </View>
                            
                        </View>
                    )
                })
                
                :
                <View style={{height:164, justifyContent:"center", alignItems:"center"}}>
                    <ActivityIndicator size={"large"} />
                </View>
            }
        </View>

        </ScrollView>

    );
}
const styles = StyleSheet.create({
    mainView:{padding:20, gap:5},
    textSmall:{
        fontSize:16,
        fontWeight:"400",
    },
    head:{
        fontSize:15,
        fontWeight:"500",
    },
    col2:{
        flex:  2,
        borderWidth:.5, borderColor:"rgba(41, 187, 137, 0.18)",
        borderRadius:12,
        overflow:"hidden"
    },
    textBig:{
        fontSize:24,
        fontWeight:"500",
        marginBottom:20
    },
    searchImage:{position:"absolute", zIndex:1, width:20, top:12, left:20},
    subscriptionMail:{ flexDirection:"row", paddingLeft: 10, paddingVertical:10, borderRadius:12, alignItems:"center", gap:5, marginTop:20, marginHorizontal:20},
    free:{fontSize:16, fontWeight:"700"},
    textInput:{backgroundColor:"#fff", borderRadius:12, borderWidth:1, borderColor:"rgba(60, 60, 67, 0.25)", paddingLeft:60, fontSize:15.5, height:44}
})