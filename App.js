import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from './Screens/Login';
import HomeScreen from './Screens/HomeScreen.js';
import Barter from './Screens/AvailableBarters';
import styles from './Styles';

export default class App extends React.Component {

  render()
  {
    return ( <AppContainer /> );
  }
}

const TabNavigator = createBottomTabNavigator({
  HomeScreen : {screen : HomeScreen},
  Barter : {screen : Barter},

})

const StackNavigator = createSwitchNavigator({
  Login : Login,
  TabNavigator : TabNavigator,
})




const AppContainer = createAppContainer( StackNavigator );