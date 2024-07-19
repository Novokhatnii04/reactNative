import { View, StyleSheet, ScrollView, Text } from "react-native";
import TextInput from "../../../shared/ui/inputs/TextInput";
import PasswordInput from "../../../shared/ui/inputs/PasswordInput";
import Button from "../../../shared/ui/button/Button";
import {
  FieldError,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const SignUpContent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const submitHandler: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {Object.keys(errors).length > 0 ? (
          <View style={styles.errorContainer}>
            {errors.Name && (
              <Text style={styles.errorText}>
                Error: Name is required and must be at least 3 characters long.
              </Text>
            )}
            {errors[`E-mail`] && (
              <Text style={styles.errorText}>
                Error: {(errors[`E-mail`] as FieldError)?.message}
              </Text>
            )}
            {errors.Password && (
              <Text style={styles.errorText}>
               Error: {(errors.Password as FieldError)?.message}
              </Text>
            )}
          </View>
        ) : <View style={styles.errorContainer}></View>}
        <View style={styles.inputWrapper}>
          <TextInput
            title="Name"
            placeholder="Your name"
            control={control}
            rules={{
              required: true,
              minLength: 3,
            }}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            title="E-mail"
            placeholder="Your e-mail"
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
          />
        </View>
        <View style={styles.inputWrapper}>
          <PasswordInput
            title="Password"
            placeholder="Your password"
            control={control}
            error={errors.Password as FieldError}
            rules={{
              required: true,
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              maxLength: {
                value: 64,
                message: "Password must be no more than 64 characters long",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
              },
            }}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <Button onPress={handleSubmit(submitHandler)}>Continue</Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "80%",
    gap: 16,
  },
  inputWrapper: {
    height: "auto",
    paddingHorizontal: 16,
  },
  errorContainer: {
    paddingTop: 16,
    paddingLeft: 16,
    borderRadius: 4,
    marginHorizontal: 16,
  },
  errorText: {
    color: "red",
  },
  buttonWrapper: {
    paddingHorizontal: 16,
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
});

export default SignUpContent;
