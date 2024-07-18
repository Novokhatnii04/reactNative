import { View, StyleSheet, Image } from "react-native";
import Icon from "../../../assets/images/splashScreen/Splash";

const SplashScreenView = () => {
  return (
    <View style={styles.container}>
      <Icon />
    </View>
  );
};

export default SplashScreenView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: 178,
    height: 178,
    resizeMode: "cover",
  },
});
