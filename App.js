import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import ExchangeScreen from './screens/exchangeScreen';
import HomeScreen from './screens/homeScreen';
//import { createBottomTabNavigator } from "react-navigation-tabs";

import LoginScreen from "./screens/login"
import homeScreen from "./screens/homeScreen"
import exchangeScreen from "./screens/exchangeScreen"

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}

const SwitchNavigator=createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  homeScreen:{screen:HomeScreen},
  exchangeScreen:{screen:ExchangeScreen}
})

const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
