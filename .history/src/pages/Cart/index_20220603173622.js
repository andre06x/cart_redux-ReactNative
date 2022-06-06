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

            <TextInput style={styles.input} value={"2"} editable={false}/>

            <TouchableOpacity>
              <Ionicons name="add-circle-outline" size={24} color="#7159c1" />
            </TouchableOpacity>
          </View>

          <Text style={styles.price}>R$180,90</Text>
        </View>

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
    flexDirection: "row",
    alignItems: "center"
  },
  
  input: {
    backgroundColor: "#fff",
    width: 40,
    height: 35 ,
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
    padding: 10
  },

  finalizar: {
    fontSize: 16
  }
})
export { Cart }