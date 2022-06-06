import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: "blue"}}>Homeee</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191920',
    padding: 15,
    flex: 1
  }})
export { Home }