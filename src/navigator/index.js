import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// screens
import HomeScreen from '../screens/HomeScreen';
import GestureScreen from '../screens/GestureScreen';
import AnimationScreen from '../screens/AnimationScreen';
import DeepLinkingScreen from '../screens/DeepLinkingScreen';
// instance
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Gesture" component={GestureScreen} />
      <Stack.Screen name="Animation" component={AnimationScreen} />
      <Stack.Screen name="DeepLinking" component={DeepLinkingScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
