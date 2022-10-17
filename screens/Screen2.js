import React from "react"
import { View,Text,Image,TouchableOpacity,ScrollView,StyleSheet } from "react-native"
export default function Screen2(){
    return(
        <View style={styles.container}>
            <View>
            <Image style={styles.image} source={require('../image/movie2.png')}/>
            </View>
            <View style={{flexDirection:"row"}}>
                <View style={{width:130,height:53,marginLeft:24}}>
                    <Text style={styles.text2}>Morbius</Text>
                    </View>
                    <View style={{width:29,height:19,marginLeft:7,marginTop:22}}>
                    <Text style={styles.text1}>2022</Text>
                    </View>
                    <View style={{marginLeft:97.38,marginTop:13.07,height:12.64}}>
                    <View style={{flexDirection:"row",height:12.64}}>
                        <Image style={styles.vector} source={require('../image/Vector.png')}/>
                        <Image style={styles.vector1} source={require('../image/Vector.png')}/>
                        <Image style={styles.vector1} source={require('../image/Vector.png')}/>
                        <Image style={styles.vector1} source={require('../image/Vector.png')}/>
                        <Image style={styles.vector1} source={require('../image/Vector.png')}/>
                     </View>
                     <View style={{marginLeft:4.62,marginTop:4.3,height:12.64,width:73,height:16}}>
                        <Text style={styles.text3}>From 342 users</Text>
                     </View>
                     </View>
                     
            </View>
            <View style={{width:87,height:19,marginLeft:24,marginTop:-15}}>
                        <Text style={styles.text1}>Marvel Studios</Text>
                     </View>
                     <ScrollView>
                     <View style={styles.infoView}>
                        <Text style={styles.info}>Lorem ipsum dolor sit amet,
                             consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut
                               labore et dolore magna aliqua.
                                Ut enim ad minim veniam,
                                 quis nostrud exercitation
                                  ullamco laboris nisi ut aliquip ex...</Text>
                     </View>
                     <View style={styles.castMainView}>
                        <View style={styles.castView1}>
                               <Image style={styles.castImage} source={require('../image/Ellipse6.png')}/>
                               <View style={styles.castTextView}>
                               <Text style={styles.castText1}>Maria Espaes</Text>
                               <Text style={styles.castText2}>As Morbius</Text>
                               </View>
                               </View>
                        <View style={styles.castView2}>
                               <Image style={styles.castImage} source={require('../image/Ellipse6.png')}/>
                               <View style={styles.castTextView}>
                               <Text style={styles.castText1}>Maria Espaes</Text>
                               <Text style={styles.castText2}>As Morbius</Text>
                               </View>
                               </View>
                               <View style={styles.castView3}>
                               <Image style={styles.castImage} source={require('../image/Ellipse6.png')}/>
                               <View style={styles.castTextView}>
                               <Text style={styles.castText1}>Maria Espaes</Text>
                               <Text style={styles.castText2}>As Morbius</Text>
                               </View>
                               </View>
                               <View style={styles.castView4}>
                               <Image style={styles.castImage} source={require('../image/Ellipse6.png')}/>
                               <View style={styles.castTextView}>
                               <Text style={styles.castText1}>Maria Espaes</Text>
                               <Text style={styles.castText2}>As Morbius</Text>
                               </View>
                                </View>
                     </View>
                     </ScrollView>
                     <TouchableOpacity>
                     <View style={styles.buttonView}>
                         <Text style={styles.buttonText}>Watch Now</Text>
                     </View>
                     </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonView:{
        marginLeft:89,width:211,height:42,borderRadius:20,
        borderWidth:2,backgroundColor:"#506DA6",justifyContent:"center",
        alignItems:"center",borderColor:"#19A1BE",borderLeftColor:"#7D4192",
        bottom:20,marginTop:40
    },
    buttonText:{
        color:"#FFFFFF",fontSize:16,fontWeight:"700",lineHeight:26.32
    },
    castText1:{
        color:"#FFFFFF",fontSize:12,fontWeight:"700",lineHeight:19.74
    },
    castText2:{
        color:"#FFFFFF",fontSize:10,fontWeight:"400",lineHeight:15.84
    },
    castImage:{
        width:52,height:52,marginLeft:-8,marginTop:-2
    },
    castTextView:{
        width:82,height:33,marginLeft:8
    },
    castMainView:{
        flexDirection:"row",marginTop:26,flexWrap:"wrap"
    },
    castView1:{
        marginLeft:24,width:163,height:48,borderColor:"#5E5E5E",borderWidth:1,borderRadius:16,flexDirection:"row"
    },
    castView2:{
        marginLeft:16,width:163,height:48,borderColor:"#5E5E5E",borderWidth:1,borderRadius:16,flexDirection:"row"
    },
    castView3:{
        marginLeft:24,marginTop:12,width:163,height:48,borderColor:"#5E5E5E",borderWidth:1,borderRadius:16,flexDirection:"row"
    },
    castView4:{
        marginLeft:16,marginTop:12,width:163,height:48,borderColor:"#5E5E5E",borderWidth:1,borderRadius:16,flexDirection:"row"
    },
    info:{
        color:"#8F8F8F",fontSize:14,fontWeight:"400",lineHeight:22.18
    },
    infoView:{
        width:341,height:90,marginLeft:24,marginTop:16
    },
    vector:{
        width:13.23,height:12.64
    },
    vector1:{
        width:13.23,height:12.64,marginLeft:2.77
    },
    image:{
        width:494,height:442,marginLeft:-52
    },
    text1:{
        color:"#848484",fontSize:12,fontWeight:"400",lineHeight:19.01
    },
    text2:{
        fontSize:32,fontWeight:"700",lineHeight:52.64,color:"#FFFFFF"
    },
    text3:{
        color:"#848484",fontSize:10,fontWeight:"400",lineHeight:15.84
    },
    container:{
        flex:1,backgroundColor:'#18181B'
    }
})