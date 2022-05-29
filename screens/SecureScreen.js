import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import React from 'react'
import secureElems from '../mock-data/secureElem.js'
import ElemWithIconAndText from '../components/ElemWithIconAndText'
import SidebarElemLayout from '../layouts/SidebarElemLayout';

const SecureScreen = () => {
  return (
    <SidebarElemLayout title={'Безопасность'}>
        <View style={tw`flex-row`}>
        {secureElems.map( ({id, title, img}) => <ElemWithIconAndText key={id} title={title} img={img}/> )}
      </View>
    </SidebarElemLayout>
  )
}

export default SecureScreen