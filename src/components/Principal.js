import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
//import { TabView, SceneMap } from 'react-native-tab-view';

export default class Principal extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };

  render() {
    return (
      <View>
        <Text>Principal</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
