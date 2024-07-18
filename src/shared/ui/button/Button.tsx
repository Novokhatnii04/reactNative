import React, { FC, ReactNode } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface IButton {
  onPress: () => void;
  children: ReactNode;
  modifier?: "primary" | "secondary";
}

const Button: FC<IButton> = ({ onPress, children, modifier = "primary" }) => {
  const buttonStyle =
    modifier === "primary" ? styles.primaryButton : styles.secondaryButton;
  const textStyle =
    modifier === "primary"
      ? styles.primaryButtonText
      : styles.secondaryButtonText;

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 48,
    padding: 10,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: "#FA8A34",
  },
  secondaryButton: {
    backgroundColor: "transparent",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: "center",
  },
  primaryButtonText: {
    color: "#FFFFFF",
  },
  secondaryButtonText: {
    color: "#FA8A34",
  },
});

export default Button;
