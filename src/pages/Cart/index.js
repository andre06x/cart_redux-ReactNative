import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { connect } from "react-redux";
import { formatPrice } from "../../utils/formatPrice";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Cart = ({ cart, dispatch, total }) => {

  const increment = (product) => {
    dispatch({
      type: '@cart/UPDATE_AMOUNT_REQUEST',
      id: product.id,
      amount: product.amount + 1
    });
  }

  const decrement = (product) => {
    dispatch({
      type: '@cart/UPDATE_AMOUNT_REQUEST',
      id: product.id,
      amount: product.amount - 1
    });
  }

  const removeProduct = (product) => {
    dispatch({
      type: '@cart/REMOVE',
      product
    })
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerCart}>
        {cart.length > 0 ? (
          <>
            {cart.map(product => (
              <Product
                key={product.id}
                product={product}
                increment={increment}
                decrement={decrement}
                removeProduct={removeProduct}
              />
            ))}

            <View style={styles.containerTotal}>
              <Text style={styles.textTotal}>
                TOTAL
              </Text>

              <Text style={styles.total}>
                {total}
              </Text>

              <TouchableOpacity style={styles.botaoFinalizar}>
                <Text style={styles.finalizar}>
                  FINALIZAR PEDIDO
                </Text>
              </TouchableOpacity>
            </View>
          </>

        ) :
          <CartVoid />
        }

      </View>
    </ScrollView>
  );
}



const Product = ({ product, increment, decrement, removeProduct }) => (
  <>
    <View key={product.id}>
      <View style={styles.containerInfoProduct}>
        <Image
          style={styles.image}
          source={{ uri: product.image }}
        />
        <View style={styles.containerTitlePrice}>
          <Text>
            {product.title}
          </Text>
          <Text style={styles.price}>
            {product.priceFormatted}
          </Text>
        </View>
        <TouchableOpacity onPress={() => removeProduct(product)}>
          <MaterialIcons
            name="delete-forever"
            size={27}
            color="#7159c1"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.containerAmount}>

        <View style={styles.containerButtons}>
          <TouchableOpacity onPress={() => decrement(product)}>
            <Ionicons
              name="remove-circle-outline"
              size={24}
              color="#7159c1"
            />
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            value={product.amount.toString()}
            editable={false}
          />

          <TouchableOpacity onPress={() => increment(product)}>
            <Ionicons
              name="add-circle-outline"
              size={24}
              color="#7159c1"
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.price}>
          {product.subtotal}
        </Text>
      </View>
    </View>

  </>
)

const CartVoid = () => (
  <View style={styles.containerVoid}>
    <MaterialCommunityIcons name="cart-off" size={150} color="gray" />
    <Text style={styles.textVoid}>
      Seu carrinho esta vazio
    </Text>
  </View>
)

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
  },
  containerVoid: {
    justifyContent: "center",
    alignItems: "center"
  },
  textVoid: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold"
  },
})

const mapStateToProps = (state) => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount)
  })),

  total: formatPrice(state.cart.reduce((total, product) => {
    return total + product.price * product.amount
  }, 0))
});

export default connect(mapStateToProps)(Cart)  