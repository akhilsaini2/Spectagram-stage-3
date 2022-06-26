import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PostCard from "./PostCard";

export default class Feed extends Component {
  render() {
  return (
  <View
    style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
}}>
  <Text>Feed</Text>
  </View>
    );
  };
};