import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
//Tailwind install
const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full flex-col p-5`}>
            <View style={tw`pt-5 pb-10 items-center`}>
                <Text style={tw`text-black`}>TAXI</Text>
            </View>
            <View style={tw`flex-auto items-center flex-row`}>
                <NavOptions/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen
