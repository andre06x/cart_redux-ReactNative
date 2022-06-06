import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import logo from './logo.svg';

const Header = () => {
  return (
    <SafeAreaView style={{backgroundColor: "#191920"}}>
      <Image source={logo} style={{width: 500}} alt="" />
      <Text style={{color: "red"}}>Header</Text>
    </SafeAreaView>
  );
}

export { Header }