import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import  Header  from "./src/components/Header";
import { Routes } from "./src/routes";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" backgroundColor="#191920"/>
      <Header />
      <Routes />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
  },
});
