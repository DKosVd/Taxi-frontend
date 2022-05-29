import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const ElemWithIconAndText = ({title, img}) => {
  return (
    <TouchableOpacity style={tw`flex-col w-1/3 items-center`}>
        <View style={{
        width: 80,
        height: 80,
        backgroundColor: 'gray',
        opacity: 0.2,
        borderRadius: 50
        }}>
          <Image style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover'
          }} source={img}/>
        </View>
        <Text style={tw`text-center text-gray-500`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ElemWithIconAndText