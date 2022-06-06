import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { navigationRef } from "./rootNavigation";

const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#191920',
  },
};

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef} theme={DarkTheme}>
      <Stack.Navigator  initialRouteName="Home" mode="modal" screenOptions={{headerShown: false}} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { Routes }