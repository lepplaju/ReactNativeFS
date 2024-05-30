import { StyleSheet, Pressable, View, TextInput } from "react-native";
import Text from "./Text";
import { useFormik } from "formik";
import theme from "../theme";
import * as yup from "yup";

const styles = StyleSheet.create({
  container: { alignItems: "center", margin: 10, gap: 10 },
  textInputValid: {
    borderColor: theme.colors.backgroundSecondary,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  textInputInvalid: {
    borderColor: theme.colors.errorColor,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    backgroundColor: theme.colors.backgroundSecondary,
    borderRadius: 10,
    padding: 10,
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.backgroundPrimary,
  },
});

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <View style={styles.container}>
      <TextInput
        style={
          formik.touched.username && formik.errors.username
            ? styles.textInputInvalid
            : styles.textInputValid
        }
        placeholder="Username"
        placeholderTextColor={theme.colors.textSecondary}
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      ></TextInput>
      {formik.touched.username && formik.errors.username && (
        <Text color={"red"}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={
          formik.touched.password && formik.errors.password
            ? styles.textInputInvalid
            : styles.textInputValid
        }
        placeholder="Password"
        placeholderTextColor={theme.colors.textSecondary}
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        secureTextEntry={true}
      ></TextInput>
      {formik.touched.password && formik.errors.password && (
        <Text color={"red"}>{formik.errors.password}</Text>
      )}
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text color={"white"}>Login</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log("username: " + values.username);
    console.log("password: " + values.password);
  };
  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
