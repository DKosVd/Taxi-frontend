import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native';

const RendreNavOption = ({title, img, screen}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={tw` bg-gray-100 w-40 mr-2`} onPress={() => navigation.navigate(screen)}>
            <View style={tw`flex-col`}>
                <View style={tw`flex justify-center items-center h-40 `}>
                    <Image
                            source={img}
                    />
                </View>
                <Text style={tw`text-center pt-2 pb-2  font-bold`}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RendreNavOption
