import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class AnimationScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigation.setOptions({
      headerBackTitle: 'Back',
    });
  }

  render() {
    return (
      <View>
        <Text> Animation Screen </Text>
      </View>
    );
  }
}
