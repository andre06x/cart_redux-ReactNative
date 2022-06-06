import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useEffect, useState } from "react/cjs/react.production.min";
import api from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const getData = () => {
      const response = api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }));

      setProducts(data);
    }

    getData()
  }, [])
  return (
    <View style={styles.container}>
      <Text style={{color: "blue"}}>Homeee</Text>
      <ScrollView horizontal={true}>

      </ScrollView>
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