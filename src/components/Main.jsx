import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
  title: {
    marginVertical: 25,
    fontSize: 25,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={{ paddingHorizontal: 5 }}>
        <RepositoryList />
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
