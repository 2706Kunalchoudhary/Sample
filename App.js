import React from "react";
import {View,Text} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";

export default function App(){
  const Stack = createNativeStackNavigator();
  

    return(
      
      <NavigationContainer>
      
       <Stack.Navigator initialRouteName="Screen1">
        
         <Stack.Screen name="Screen1" component={Screen1} options={{headerShown:false}}/>
        <Stack.Screen name="Screen2" component={Screen2} options={{headerShown:false}}/>
        
        
        
      </Stack.Navigator>
      
    
      
       </NavigationContainer>
    
    )
}