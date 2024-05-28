import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: { minHeight: Constants.statusBarHeight },
  scrollItem: { padding: 5 },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ display: "flex", flexDirection: "row" }}
        horizontal
        contentContainerStyle={{
          backgroundColor: theme.colors.backgroundSecondary,
          flexGrow: 1, // ensures that the width of the appbar is filled even with one item
        }}
        showsHorizontalScrollIndicator={false}
      >
        <Link to="/" style={styles.scrollItem}>
          <Text>Home</Text>
        </Link>
        {/* <Pressable onPress={() => Navigate("/")}>
        <Text style={{ color: theme.colors.componentBackground }}>
          Repositories
        </Text>
      </Pressable> */}
        <Link to="/signIn" style={styles.scrollItem}>
          <Text>Login</Text>
        </Link>
        {/* <Text style={styles.scrollItem}>TEST</Text>
        <Text style={styles.scrollItem}>TEST</Text>
        <Text style={styles.scrollItem}>TEST</Text>
        <Text style={styles.scrollItem}>TEST</Text>
        <Text style={styles.scrollItem}>TEST</Text>
        <Text style={styles.scrollItem}>TEST</Text>
        <Text style={styles.scrollItem}>TEST</Text>
        <Text style={styles.scrollItem}>TEST</Text>
        <Text style={styles.scrollItem}>TEST</Text>
        <Text style={styles.scrollItem}>Last</Text> */}
      </ScrollView>
    </View>
  );
};

export default AppBar;
