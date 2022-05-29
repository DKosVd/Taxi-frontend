import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const SidebarElem = ({name, screen}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
      activeOpacity={1} 
      style={tw`p-5`} 
      onPress={ () => navigation.navigate(screen) }>
        <Text style={{
          fontSize: 15
        }}>{name}</Text>
    </TouchableOpacity>
  )
}

export default SidebarElem