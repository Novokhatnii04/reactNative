import { View, StyleSheet } from "react-native";
import ButtonUI from "../../../shared/ui/button/Button";

const Button = () => {
  const pressHandler = () => {};

  return (
    <View style={styles.container}>
      <ButtonUI modifier="secondary" onPress={pressHandler}>Sign In</ButtonUI>
      <ButtonUI modifier="primary" onPress={pressHandler}>Sign up</ButtonUI>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    maxWidth: 343,
    height: 96,
    gap: 12, 
    marginBottom: 20
  },
});

export default Button;
