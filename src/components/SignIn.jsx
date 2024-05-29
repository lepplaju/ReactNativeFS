import { StyleSheet, Pressable, View, TextInput } from "react-native";
import Text from "./Text";
import { useFormik } from "formik";
import theme from "../theme";
const styles = StyleSheet.create({
  container: { alignItems: "center", margin: 10, gap: 10 },
  textInput: {
    borderColor: theme.colors.backgroundSecondary,
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

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({ initialValues, onSubmit });

  return (
    <View style={styles.container}>
      <Text>The sign-in view</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        placeholderTextColor={theme.colors.textSecondary}
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      ></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor={theme.colors.textSecondary}
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        secureTextEntry={true}
      ></TextInput>
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
