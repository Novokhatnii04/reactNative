import { Control, FieldError, FieldErrors, FieldValues } from "react-hook-form";
import { View, StyleSheet } from "react-native";
import CustomPasswordInput from "../../../../shared/ui/inputs/PasswordInput";

interface ErrorsProps {
  control: Control<FieldValues>;
  errors: FieldErrors;
}

const Errors: React.FC<ErrorsProps> = ({ control, errors }) => {
  const rules = {
    required: {
      value: true,
      message: "Password is required",
    },
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
  };

  return (
    <View style={styles.inputWrapper}>
      <CustomPasswordInput
        title="Password"
        placeholder="Your password"
        control={control}
        error={errors.Password as FieldError}
        rules={rules}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    height: "auto",
    paddingHorizontal: 16,
  },
});

export default Errors;
