import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import Background from "../../../assets/images/authBackground/authbackground.png";
import AuthWrapper from "../../widgets/AuthWrapper/AuthWrapper";
import SignUp from "../../../assets/images/authBackground/SignUp";
import SignUpContent from "./ui/SignUpContent";

const signContent = {
  title: "Sign Up",
  subTitle: "Personal account",
  svg: <SignUp />,
};

const RegisterScreen = ({ navigation }: any) => {
  return (
    <>
      <Image source={Background} style={styles.background} />
      <AuthWrapper {...signContent}>
        <SignUpContent navigation={navigation} />
      </AuthWrapper>
    </>
  );
};

export default RegisterScreen;

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
