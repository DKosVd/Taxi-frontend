import { View, Text, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

const Blind = () => {
  return (
    <TouchableOpacity activeOpacity={1}  style={{
        position: 'absolute',
        top: '55%',
        height: '100%',
        width: '100%',
        borderRadius: 40,
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.22,
        zIndex: 6,
        elevation: 6,
      }}>
        <View  style={tw`m-6 h-full overflow-hidden relative`}>
          <View
            style={tw`w-full flex-row justify-center`}
          >
            <View style={tw`h-1 w-10 bg-gray-200 mb-4`}></View>
          </View>
          <View style={tw`flex-col`}>
      
          </View>
        </View>
      </TouchableOpacity>
  )
}

export default Blind