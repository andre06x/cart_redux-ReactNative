import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { connect } from "react-redux";

const Cart = ({ cart, dispatch }) => {

  const increment = (product) => {
    dispatch({type: '@cart/UPDATE_AMOUNT', id: product.id, amount: product.amount + 1});
  }

  const decrement = (product) => {
    dispatch({type: '@cart/UPDATE_AMOUNT', id: product.id ,amount: product.amount - 1});
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerCart}>
        {cart.map(product => (
          <>
            <View style={styles.containerInfoProduct}>
              <Image
                style={styles.image}
                source={{ uri: product.image }}
              />
              <View style={styles.containerTitlePrice}>
                <Text>{product.title}</Text>
                <Text style={styles.price}>{product.priceFormatted}</Text>
              </View>
              <TouchableOpacity onPress={() => dispatch({type: '@cart/REMOVE', product})}>
                <MaterialIcons name="delete-forever" size={27} color="#7159c1" />
              </TouchableOpacity>
            </View>

            <View style={styles.containerAmount}>

              <View style={styles.containerButtons}>
                <TouchableOpacity onPress={() => increment(product)}>
                  <Ionicons name="remove-circle-outline" size={24} color="#7159c1" />
                </TouchableOpacity>

                <TextInput style={styles.input} value={product.amount.toString()} editable={false} />

                <TouchableOpacity onPress={() => decrement(product)}>
                  <Ionicons name="add-circle-outline" size={24} color="#7159c1" />
                </TouchableOpacity>
              </View>

              <Text style={styles.price}>R$180,90</Text>
            </View>
          </>

        ))}



        <View style={styles.containerTotal}>
          <Text style={styles.textTotal}>
            TOTAL
          </Text>

          <Text style={styles.total}>
            R$ 187,90
          </Text>
        </View>

        <TouchableOpacity style={styles.botaoFinalizar}>
          <Text style={styles.finalizar}>FINALIZAR PEDIDO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191920',
    padding: 15,
    // backgroundColor: "#fff",
    // flex: 1
  },

  containerCart: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15
  },

  containerInfoProduct: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  image: {
    width: 100,
    height: 100,
    marginRight: 15
  },

  containerTitlePrice: {
    alignItems: "flex-start",
    width: 150,
    marginRight: 10
  },

  price: {
    marginTop: 3,
    fontSize: 18,
    fontWeight: "bold"
  },

  containerAmount: {
    flexDirection: "row",
    backgroundColor: "#ddd",
    justifyContent: "space-between",
    padding: 9,
    alignItems: "center",
    borderRadius: 3,
    marginBottom: 30
  },

  containerButtons: {
    flexDirection: "row",
    alignItems: "center"
  },

  input: {
    backgroundColor: "#fff",
    width: 40,
    height: 35,
    marginHorizontal: 5
  },

  containerTotal: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center"
  },

  textTotal: {
    fontWeight: "bold",
    color: "#aaa"
  },

  total: {
    fontWeight: "bold",
    fontSize: 35,
    marginBottom: 30
  },

  botaoFinalizar: {
    backgroundColor: "#7159c1",
    padding: 15,
    borderRadius: 5,
    marginBottom: 20
  },

  finalizar: {
    fontSize: 14,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold"
  }
})

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps)(Cart)  