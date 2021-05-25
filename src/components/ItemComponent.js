import React from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import {Swipeable} from 'react-native-gesture-handler';

const ItemComponent = ({item, onPress, onSwipeRight}) => {
  const _renderRightActions = (progress, dragY) => {
    const scale = dragY.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'flex-end'}}
        onPress={() => onPress(item)}>
        <Animated.Text
          style={{fontSize: 18, color: '#478ed8', transform: [{scale}]}}>
          Open
        </Animated.Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable
      renderRightActions={_renderRightActions}
      onSwipeableRightOpen={onSwipeRight}>
      <ListItem key={item.name} bottomDivider onPress={() => onPress(item)}>
        <Avatar
          rounded
          icon={{
            name: item.icon || 'format-list-bulleted',
            type: 'material-community',
            color: '#478ed8',
            size: 23,
          }}
        />
        <ListItem.Content>
          <ListItem.Title style={{fontWeight: '600', color: '#525252'}}>
            {item.name}
          </ListItem.Title>
          <ListItem.Subtitle style={{fontSize: 12, color: 'grey'}}>
            {item.description}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </Swipeable>
  );
};

export default ItemComponent;
