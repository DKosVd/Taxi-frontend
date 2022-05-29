import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const SidebarElemLayout = ({title, children}) => {
  return (
    <View style={tw`p-5`}>
      <Text style={tw`text-2xl font-bold mb-10`}>{title}</Text>
      {children}
    </View>
  )
}

export default SidebarElemLayout