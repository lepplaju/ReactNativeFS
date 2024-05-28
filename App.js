import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";

const App = () => {
  return (
    <>
      
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};
export default App;
