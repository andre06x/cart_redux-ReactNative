import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from "./src/components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#191920"/>
      <Header />
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
