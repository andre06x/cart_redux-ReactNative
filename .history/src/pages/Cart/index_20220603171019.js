import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

const Cart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerCart}>

        <View style={styles.containerInfoProduct}>
          <Image style={styles.image} source={{uri: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"}}/>
          <View style={styles.containerTitlePrice}>
            <Text>Tênis de Caminhada Leve Confortável</Text>
            <Text>Price</Text>
          </View>
          <MaterialIcons name="delete-forever" size={24} color="black" />
        </View>

        <View>

          <View>
            <TouchableOpacity>
              <Ionicons name="remove-circle-outline" size={24} color="black" />
            </TouchableOpacity>

            <TextInput />

            <TouchableOpacity>
              <Ionicons name="add-circle-outline" size={24} color="black" />
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
  },
   
  containerTitlePrice: {
    alignItems: "center",
    width: 200
  }
})
export { Cart }