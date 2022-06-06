import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { navigationRef } from "./rootNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
    <NavigationContainer ref={navigationRef} theme={{ colors: { background: '#191920' } }}>
      <SafeAreaProvider style={{backgroundColor: "#191920"}}>
        <Stack.Navigator initialRouteName="Cart" mode="modal" screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </SafeAreaProvider>

    </NavigationContainer>
  )
}

export { Routes }