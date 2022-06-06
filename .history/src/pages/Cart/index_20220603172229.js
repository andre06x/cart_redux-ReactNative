import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Cart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerCart}>

        <View style={styles.containerInfoProduct}>
          <Image style={styles.image} source={{ uri: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg" }} />
          <View style={styles.containerTitlePrice}>
            <Text>Tênis de Caminhada Leve Confortável</Text>
            <Text style={styles.price}>R$120,98</Text>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="delete-forever" size={27} color="#7159c1" />
          </TouchableOpacity>
        </View>

        <View style={styles.containerAmount}>

          <View style={styles.containerButtons}>
            <TouchableOpacity>
              <Ionicons name="remove-circle-outline" size={24} color="#7159c1" />
            </TouchableOpacity>

            <TextInput style={styles.input}/>

            <TouchableOpacity>
              <Ionicons name="add-circle-outline" size={24} color="#7159c1" />
            </TouchableOpacity>
          </View>

          <Text>R$180,90</Text>
        </View>

        <View>
          <Text>
            TOTAL
          </Text>

          <Text>
            R$ 187,90
          </Text>
        </View>

        <TouchableOpacity>
          <Text>FINALIZAR PEDIDO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191920',
    padding: 15,
    flex: 1
  },

  containerCart: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15
  },

  containerInfoProduct: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
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
    borderRadius: 3
  },

  containerButtons: {
    flexDirection: "row"
  },
  
  input: {
    backgroundColor: "#fff",
    width: 50,
    height: 50 ;
    marginHorizontal: 5
  }
})
export { Cart }