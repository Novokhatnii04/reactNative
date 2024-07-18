import { StyleSheet } from "react-native";
import SplashScreen from "./src/screens/splash/SplashScreenView";
import { useEffect, useState } from "react";
import FadeInView from "./src/widgets/FadeInView";
import Navigation from "./src/app/navigation/Navigation";

export default function App() {
  const [isShowSplash, setIsShowSpalsh] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSpalsh(false);
    }, 3000);
  }, []);

  return (
    <FadeInView style={styles.fadeInView}>
      {isShowSplash ? <SplashScreen /> : <Navigation />}
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  fadeInView: {
    flex: 1,
  },
});
