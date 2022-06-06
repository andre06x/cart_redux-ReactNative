import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./src/components/Header";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <View>
      <StatusBar style="light" backgroundColor="#191920"/>
      <Header />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191920',
    alignItems: 'center',
  },
});
