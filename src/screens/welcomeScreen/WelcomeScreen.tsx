import React from "react";
import { StyleSheet, SafeAreaView, Image, View, StatusBar } from "react-native";
import Background from "../../../assets/welcomeSection/background/welcomeBackground.png";
import CardsWrapper from "./ui/CardsWrapper";
import FadeInView from "../../shared/ui/FadeInView";

const WelcomeScreen = () => {
  return (
    <FadeInView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <View style={styles.innerContainer}>
          <CardsWrapper />
        </View>
        <Image source={Background} style={styles.image} />
      </SafeAreaView>
    </FadeInView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F2F3F5",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 388,
    resizeMode: "cover",
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
});
