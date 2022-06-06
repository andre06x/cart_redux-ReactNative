import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator, TransitionPresets, } from '@react-navigation/native-stack';
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
    <View>
          <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>

  )
}

export { Routes }