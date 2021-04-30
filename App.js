import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// You can import from local files
import Transactionscreen from './screens/bookTransactionscreen.js';
import Searchscreen from './screens/searchscreen';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Appcontainer />
      </View>
    );
  }
}

var TabNavigator = createBottomTabNavigator({
  Transaction: { screen: Transactionscreen },
  Search: { screen: Searchscreen },
});
const Appcontainer = createAppContainer(TabNavigator);
