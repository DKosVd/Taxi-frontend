import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

const FoodScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full flex-col p-5`}>
        <View style={tw`pt-5 pb-10 items-center`}>
            <Text style={tw`text-black`}>Food</Text>
        </View>
    </SafeAreaView>
  );
};

export default FoodScreen;
