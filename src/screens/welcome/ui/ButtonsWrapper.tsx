import { View, StyleSheet } from "react-native";
import ButtonUI from "../../../shared/ui/button/Button";

const Button = ({ navigation }: any) => {
  const navigateToSignUp = () => navigation.navigate("SignUp");
  const navigateToSignIn = () => navigation.navigate("SignIn");

  return (
    <View style={styles.container}>
      <ButtonUI modifier="secondary" onPress={navigateToSignIn}>
        Sign In
      </ButtonUI>
      <ButtonUI modifier="primary" onPress={navigateToSignUp}>
        Sign up
      </ButtonUI>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    maxWidth: 343,
    height: 96,
    gap: 12,
  },
});

export default Button;
