import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView>
      <Text style={{color: "red"}}>Header</Text>
    </SafeAreaView>
  );
}

export { Header }