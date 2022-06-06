import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

if(__DEV__){
  const tron = Reactotron
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .useReactNative(reactotronRedux()) // add all built-in react native plugins
  .connect() 

  tron.clear();

  console.tron = tron;
}