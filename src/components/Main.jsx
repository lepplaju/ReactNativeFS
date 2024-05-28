import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import { Route, Routes } from "react-router-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import theme from "../theme";
import SignIn from "./SignIn";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <View>
        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </View>
    </View>
  );
};

export default Main;

// import Text from "./Text";
// import FlexboxExample from "./FlexboxExample";

// const Main = () => {
//   return (
//     <>
//       <Text>Simple text</Text>
//       <Text style={{ paddingVertical: 25 }}>Text with custom style</Text>
//       <Text fontWeight="bold" fontSize="subheading">
//         Bold subheading
//       </Text>
//       <Text color="primary" style={{ paddingBottom: 25 }}>
//         Text with secondary color
//       </Text>
//       <FlexboxExample />
//     </>
//   );
// };
