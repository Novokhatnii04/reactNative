import React, { FC, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Eye from "../../../../assets/images/authBackground/Eye";
import Warning from "../../../../assets/images/authBackground/Warning";
import { Control, Controller, FieldValues, FieldError } from "react-hook-form";

interface IAuthInput {
  title: string;
  placeholder: string;
  control: Control<FieldValues>;
  error?: FieldError;
  rules?: any;
}

const PasswordInput: FC<IAuthInput> = ({
  title,
  placeholder,
  control,
  error,
  rules,
}) => {
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  const toggleSecureText = () => {
    setSecureText(!secureText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View
        style={[
          styles.inputContainer,
          error ? styles.inputContainerError : null,
        ]}
      >
        <Controller
          name={title}
          control={control}
          render={({ field: { onChange, onBlur, value }, fieldState }) => (
            <TextInput
              style={[styles.input, fieldState.invalid && styles.inputError]}
              placeholder={placeholder}
              secureTextEntry={secureText}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                onChange(text);
              }}
              onBlur={onBlur}
              autoCapitalize="none"
            />
          )}
          
          rules={rules}
        />
        <TouchableOpacity onPress={toggleSecureText} style={styles.icon}>
          {secureText ? (
            <Eye width={24} height={24} color={"#00A36D"} />
          ) : (
            <Eye width={24} height={24} color={"#FA8A34"} />
          )}
        </TouchableOpacity>
        {error && (
          <View style={styles.warningIcon}>
            <Warning width={24} height={24} color={"#FA8A34"} />
          </View>
        )}
      </View>
      {/* {error && <Text style={styles.errorText}>{error.message}</Text>} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 8,
    color: "#606773",
    lineHeight: 24,
    marginLeft: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    borderColor: "#CED5E0",
    borderWidth: 1,
    borderRadius: 16,
  },
  inputContainerError: {
    borderColor: "red",
  },
  input: {
    flex: 1,
    height: 56,
    paddingHorizontal: 10,
  },
  inputError: {
    borderColor: "red",
  },
  icon: {
    padding: 10,
  },
  warningIcon: {
    paddingRight: 6,
  },
  errorText: {
    color: "#FA8A34",
    marginLeft: 16,
    marginTop: 4,
  },
});

export default PasswordInput;
