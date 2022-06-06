import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

const Cart = () => {
  return (
    <View style={styles.container}>
      <View>

        <View>
          <Image />
          <View>
            <Text>Title</Text>
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

        <TouchebleOpacity>
          <Text>FINALIZAR PEDIDO</Text>
        </TouchebleOpacity>
      </View>
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
export { Cart }