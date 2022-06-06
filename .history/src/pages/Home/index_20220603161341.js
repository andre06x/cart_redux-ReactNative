import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
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
      <ScrollView horizontal={true}>
        {products.map((product, index) => (
          <Product product={product} index={index} />
        ))}
      </ScrollView>
    </View>
  );
}

const Product = ({ product, index }) => (
  <View style={styles.containerProduct}>
    <Image style={styles.imageProduct} source={{ uri: product.image }} />
    <Text style={styles.title}>{product.title}</Text>
    <Text style={styles.price}>{product.price}</Text>

    <TouchableOpacity>
      <View>
        <FontAwesome name="cart-plus" size={24} color="white" />
        <Text>0</Text>
      </View>
      <Text>Adicionar</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191920',
    padding: 15,
    maxWidth: 250
  },

  containerProduct: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginRight: 50,
    padding: 15,
  },

  imageProduct: {
    width: 200,
    height: 200,
    alignSelf: "center"
  },

})
export { Home }