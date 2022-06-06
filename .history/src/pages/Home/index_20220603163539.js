import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import api from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { FontAwesome } from '@expo/vector-icons';
import { darken } from "polished";


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const getData = async () => {
      const response = await api.get('/products');
      console.log(response.data)
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
      <ScrollView horizontal={true}>
        {products.map((product, index) => (
          <Product key={index} product={product} index={index} />
        ))}
      </ScrollView>
    </View>
  );
}

const Product = ({ product, index }) => (
  <View style={styles.containerProduct}>
    <Image style={styles.imageProduct} source={{ uri: product.image }} />
    <Text style={styles.title}>{product.title}</Text>
    <Text style={styles.price}>{product.priceFormatted}</Text>

    <TouchableOpacity style={styles.botao}>
      <View style={styles.cartAmount}>
        <FontAwesome name="cart-plus" size={24} color="white" />
        <Text style={styles.textAmount}>0</Text>
      </View>
      <Text style={styles.adicionar}>Adicionar</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191920',
    padding: 15,
   
  },

  containerProduct: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginRight: 50,
    padding: 15,
    maxWidth: 250
  },

  imageProduct: {
    width: 200,
    height: 200,
    alignSelf: "center"
  },

  title: {
    fontSize: 15,
    marginBottom: 15
  },

  price: {
    fontWeight: "bold",
    fontSize: 20,
  },

  botao: {
    backgroundColor: "#7159c1",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
    // paddingHorizontal: 10,

  },

  textAmount: {
    marginHorizontal: 10
  },

  cartAmount: {
    backgroundColor: darken(0.02, '#7159c1'),
    flexDirection: "row",
    padding: 10,
  },


  adicionar: {
    flex: 1,
    textAlign: "center"
  }

})
export { Home }