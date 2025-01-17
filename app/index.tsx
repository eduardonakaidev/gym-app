import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// Prevenção da exibição automática da splash screen
SplashScreen.preventAutoHideAsync();

export default function Welcome() {
  const [fontsLoaded, fontsError] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      {!fontsLoaded ? (
        <View style={{ flex: 1 }} />
      ) : fontsError ? (
        <Text style={{ color: "red", fontSize: 18 }}>Erro ao carregar fontes.</Text>
      ) : (
        <Text style={{ color: "#000", fontSize: 24, fontFamily: "Roboto_700Bold" }}>
          Welcome My App
        </Text>
      )}
    </SafeAreaView>
  );
}
