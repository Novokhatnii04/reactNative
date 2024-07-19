import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import Background from "../../../assets/images/authBackground/authbackground.png";
import AuthWrapper from "../../widgets/AuthWrapper/AuthWrapper";
import SignIn from "../../../assets/images/authBackground/SignIn";

const signContent = {
  title: "Sign In",
  subTitle: "Personal account",
  svg: <SignIn />,
};

const LoginScreen = () => {
  return (
    <>
      <Image source={Background} style={styles.background} />
      <AuthWrapper {...signContent}>
        <View></View>
      </AuthWrapper>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFF",
  },
  background: {
    position: "absolute",
    top: 0,
    resizeMode: "cover",
    width: "100%",
  },
});
