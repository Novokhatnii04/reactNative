import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import TextInput from "../../../shared/ui/inputs/TextInput";
import PasswordInput from "../../../shared/ui/inputs/PasswordInput";
import Button from "../../../shared/ui/button/Button";
import { FieldError, FieldValues, SubmitHandler, useForm } from "react-hook-form";

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
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput title="Name" placeholder="Your name" control={control} />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            title="E-mail"
            placeholder="Your e-mail"
            control={control}
          />
        </View>
        <View style={styles.inputWrapper}>
          <PasswordInput
            title="Password"
            placeholder="Your password"
            control={control}
            error={errors.Password as FieldError} 
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
  },
  inputWrapper: {
    height: "auto",
    marginTop: 16,
    paddingHorizontal: 16,
  },
  buttonWrapper: {
    paddingHorizontal: 16,
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
});

export default SignUpContent;
