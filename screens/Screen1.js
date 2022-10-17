import React from "react"
import { View,Text,Image,ImageBackground,TextInput,ScrollView,StyleSheet,TouchableOpacity } from "react-native"
import Screen2 from "./Screen2"
export default function Screen1({navigation}){
    function handleNavigation(screenName){
        navigation.navigate(screenName)
    }
    return(
        <View style={{flex:1,backgroundColor:"#1A1A1D"}}>
           <View style={{marginTop:63}}>
           <Text style={styles.text1}>Search for a content</Text></View> 
            <View style={{marginTop:8}}>
                <TextInput style={styles.textInput} placeholder="Search for a content" placeholderTextColor={"#6C6C6C"}></TextInput>
            </View>
            <ScrollView>
            <View style={{marginTop:32,marginLeft:24,height:22,width:80}}>
                <Text style={styles.text2}>Categories</Text>
            </View>
            <View style={{flexDirection:"row"}}>
            <View style={{marginTop:21,marginLeft:24}}>
            <ImageBackground style={styles.imageBackground} source={require('../image/Rectangle.png')}>
            <Image style={{width:166,height:161,marginLeft:-30}} source={require('../image/Movie.png')}/>
              </ImageBackground>
              </View>
              <View style={{marginTop:21,marginLeft:16}}>
               <ImageBackground style={styles.imageBackground} source={require('../image/Rectangle15.png')}>
                <Image style={{width:108,height:187,marginLeft:67.72}} source={require('../image/Anime.png')}/>
                   </ImageBackground>
                </View>
                </View>
                <View style={{marginTop:22,marginLeft:24,width:105,height:22}}>
                    <Text style={styles.text2}>Most searched</Text>
                </View>
                
                <View style={styles.mainMovieContainer}>
                 <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View>
                        <TouchableOpacity onPress={()=> handleNavigation(Screen2)}>
                        <Image style={styles.movieImage} source={require('../image/Rectangle33.png')}/>
                        <View style={styles.textContainer1}>
                        <Text style={styles.movieName}>Morbius</Text>
                        <Text style={styles.movieYear}>2022</Text>
                        </View>
                        </TouchableOpacity>
                     </View>
                     <View style={styles.movieContainer}>
                        <TouchableOpacity onPress={()=> handleNavigation(Screen2)}>
                        <Image style={styles.movieImage} source={require('../image/Rectangle34.png')}/>
                        <View style={styles.textContainer2}>
                        <Text style={styles.movieName}>Secret Wars</Text>
                        <Text style={styles.movieYear}>2022</Text>
                        </View>
                        </TouchableOpacity>
                     </View>
                     <View style={styles.movieContainer}>
                        <TouchableOpacity onPress={()=> handleNavigation(Screen2)}>
                        <Image style={styles.movieImage} source={require('../image/Rectangle33.png')}/>
                        <View style={styles.textContainer2}>
                        <Text style={styles.movieName}>Secret Wars</Text>
                        <Text style={styles.movieYear}>2022</Text>
                        </View>
                        </TouchableOpacity>
                     </View>
                     <View style={styles.movieContainer}>
                        <TouchableOpacity onPress={()=> handleNavigation(Screen2)}>
                        <Image style={styles.movieImage} source={require('../image/Rectangle34.png')}/>
                        <View style={styles.textContainer2}>
                        <Text style={styles.movieName}>Secret Wars</Text>
                        <Text style={styles.movieYear}>2022</Text>
                        </View>
                        </TouchableOpacity>
                     </View>
                     </ScrollView>
                </View>
                <View style={styles.mainMovieContainer}>
                 <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View>
                        <Image style={styles.movieImage} source={require('../image/Rectangle33.png')}/>
                        <View style={styles.textContainer1}>
                        <Text style={styles.movieName}>Secret Wars</Text>
                        <Text style={styles.movieYear}>2022</Text>
                        </View>
                     </View>
                     <View style={styles.movieContainer}>
                        <Image style={styles.movieImage} source={require('../image/Rectangle34.png')}/>
                        <View style={styles.textContainer2}>
                        <Text style={styles.movieName}>Secret Wars</Text>
                        <Text style={styles.movieYear}>2022</Text>
                        </View>
                     </View>
                     <View style={styles.movieContainer}>
                        <Image style={styles.movieImage} source={require('../image/Rectangle33.png')}/>
                        <View style={styles.textContainer2}>
                        <Text style={styles.movieName}>Secret Wars</Text>
                        <Text style={styles.movieYear}>2022</Text>
                        </View>
                     </View>
                     <View style={styles.movieContainer}>
                        <Image style={styles.movieImage} source={require('../image/Rectangle34.png')}/>
                        <View style={styles.textContainer2}>
                        <Text style={styles.movieName}>Secret Wars</Text>
                        <Text style={styles.movieYear}>2022</Text>
                        </View>
                     </View>
                     </ScrollView>
                </View>
                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    movieName:{
        color:"#E8E8E8",fontSize:14,fontWeight:"700",lineHeight:23.03,textAlign:"center"
    },
    movieYear:{
        color:"#828282",fontSize:12,fontWeight:"400",lineHeight:19.01,textAlign:"center"
    },
    movieImage:{
        width:124,height:124,borderRadius:24
    },
    movieContainer:{
        marginLeft:16
    },
    textContainer2:{
        width:86,height:41,marginLeft:19,marginTop:8
    },
    textContainer1:{
        width:86,height:41,marginLeft:16,marginTop:8
    },
    mainMovieContainer:{
        marginTop:16,marginLeft:24,flexDirection:"row"
    },
    imageBackground:{
        width:163,height:148
    },
    text2:{
        color:"#FFFFFF",fontSize:14,fontWeight:"400",lineHeight:22.18
    },
    text1:{
        marginLeft:24,fontSize:16,color:"#FFFFFF",fontWeight:"400",lineHeight:25.34
    },
    textInput:{
        width:324,height:56,borderRadius:24,borderWidth:1,borderRightColor:"#7D4192",borderLeftColor:"#19A1BE",borderTopColor:"#19A1BE",borderBottomColor:"#19A1BE",marginLeft:24
}
})