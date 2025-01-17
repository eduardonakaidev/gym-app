import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {  useFonts,Roboto_400Regular,Roboto_700Bold } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();


export default function Welcome(){
    const [loaded, error] = useFonts({
      Roboto_400Regular,
      Roboto_700Bold,

      });

      useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync();
        }
      }, [loaded, error]);
    
      if (!loaded && !error) {
        return null;
      }
    
    return(
        <SafeAreaView style={{display:"flex",flex:1, alignItems:"center",justifyContent:"center",}}>
            <Text style={{color:"#000",fontSize:24,fontFamily:'Roboto_700Bold'}}>
                Welcome My app
            </Text>
        </SafeAreaView>
    )
}