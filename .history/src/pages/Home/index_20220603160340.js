import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { TouchableOpacity } from "react-native-web";
import api from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { FontAwesome } from '@expo/vector-icons';


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const getData = async () => {
      const response = await api.get('/products');
      console.log(response.data)
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: product.price
      }));

      setProducts(data);
    }

    getData()
  }, [])
  return (
    <View style={styles.container}>
      <Text style={{ color: "blue" }}>Homeee</Text>
      <ScrollView horizontal={true}>
        {products?.map(product => (
          <View>
            <Image source={{ uri: product.image }} />
            <Text>{product.title}</Text>
            <Text>{product.price}</Text>

            <TouchableOpacity>
              <View>
                <FontAwesome name="cart-plus" size={24} color="white" />
                <Text>0</Text>
              </View>
              <Text>Adicionar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191920',
    padding: 15,
    flex: 1
  }
})
export { Home }