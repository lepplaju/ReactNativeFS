import { Text, View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingVertical: Constants.statusBarHeight,
    paddingLeft: 5,
    backgroundColor: theme.colors.backgroundSecondary,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={{ color: theme.colors.componentBackground }}>
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
