import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const RenderStreet = ({streetName, time}) => {
  return (
    <TouchableOpacity style={{
        flexBasis: '50%',
        height: 150,
        borderRadius: 10,
    }}>
      <View style={{
          padding: 10,
          margin: 5,
          backgroundColor: 'rgb(156, 163, 175)',
          height: '100%',
          borderRadius: 20
      }}>
        <Text>{streetName}</Text>
        <Text>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RenderStreet;
