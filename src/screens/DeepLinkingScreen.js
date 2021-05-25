import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class DeepLinkingScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigation.setOptions({
      title: 'Deep Linking',
      headerBackTitle: 'Back',
    });
  }

  render() {
    return (
      <View>
        <Text> Deep Linking Screen </Text>
      </View>
    );
  }
}
