import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import navigations from '../data/navigations.json';
import Item from '../components/ItemComponent';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigation.setOptions({title: 'React Native'});
  }

  _renderItem({item}) {
    return (
      <Item
        item={item}
        onPress={this._onPress.bind(this)}
        onSwipeRight={this._onSwipeRight}
      />
    );
  }

  _onPress(item) {
    item.link && this.props.navigation.navigate(item.link);
  }

  _onSwipeRight() {
    console.log('On Swipe Right');
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={navigations}
          keyExtractor={(_, index) => index.toString()}
          renderItem={this._renderItem.bind(this)}
        />
      </View>
    );
  }
}
