import { View, StyleSheet, ScrollView } from "react-native";

import Button from "../../../shared/ui/button/Button";
import ErrorText from "./Errors/Errors";

import NameInput from "./Inputs/NameInput";
import EmailInput from "./Inputs/EmailInput";
import PasswordInput from "./Inputs/PasswordInput";

import {
  FieldErrors,
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
        <ErrorText errors={errors} />

        <NameInput control={control} />
        <EmailInput control={control} />
        <PasswordInput control={control} errors={errors as FieldErrors} />
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
  buttonWrapper: {
    paddingHorizontal: 16,
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
});

export default SignUpContent;
