import React, {Component} from 'react';
import {Text, View, Animated, StyleSheet, Dimensions} from 'react-native';

const CURSOR_SIDE_SIZE = 45;
const CURSOR_HALF_SIDE_SIZE = CURSOR_SIDE_SIZE / 2;
const {height, width} = Dimensions.get('window');

export default class GestureScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigation.setOptions({
      headerBackTitle: 'Back',
    });
    this.state = {
      valueXY: new Animated.ValueXY({x: 0, y: 0}),
    };
  }

  render() {
    return (
      <View
        style={styles.container}
        onStartShouldSetResponder={() => true}
        onResponderMove={event => {
          this.state.valueXY.setValue({
            x: event.nativeEvent.locationX,
            y: event.nativeEvent.locationY,
          });
        }}>
        <Animated.View
          onResponderRelease={() => {
            Animated.spring(this.state.valueXY, {
              toValue: {
                x: width / 2 - CURSOR_HALF_SIDE_SIZE,
                y: height / 2 - CURSOR_HALF_SIDE_SIZE,
              },
              useNativeDriver: false,
            }).start();
          }}
          style={{
            position: 'absolute',
            left: Animated.subtract(
              this.state.valueXY.x,
              CURSOR_HALF_SIDE_SIZE,
            ),
            top: Animated.subtract(this.state.valueXY.y, CURSOR_HALF_SIDE_SIZE),
            height: CURSOR_SIDE_SIZE,
            width: CURSOR_SIDE_SIZE,
            borderRadius: CURSOR_HALF_SIDE_SIZE,
            backgroundColor: 'red',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
});
