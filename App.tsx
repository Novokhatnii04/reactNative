import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./src/screens/splashScreen/SplashScreenView";
import WelcomeScreen from './src/screens/welcomeScreen/WelcomeScreen'
import { useEffect, useState } from "react";
import FadeInView from "./src/shared/ui/FadeInView";

export default function App() {
  const [isShowSplash, setIsShowSpalsh] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSpalsh(false);
    }, 3000);
  }, []);

  return ( 
    <FadeInView style={styles.fadeInView}>{isShowSplash ? <SplashScreen /> : <WelcomeScreen />}</FadeInView>
  );
}

const styles = StyleSheet.create({
  fadeInView: {
    flex: 1,
  },
});
