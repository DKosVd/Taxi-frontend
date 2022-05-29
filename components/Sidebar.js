import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import elemMenu from '../mock-data/elemSidebar';
import SidebarElem from './SidebarElem';


const rendreElemMenu = ({item}) => {
    return <SidebarElem name={item.name} screen={item.screen}/>
}

const Sidebar = ({isOpen, callbackClose}) => {
    const navigation = useNavigation();

    const handleSidebarClose = () => {
        callbackClose();
    }

 

  return (
      <>
      {isOpen &&   
        <SafeAreaView style={{
            position: 'absolute',
            zIndex: 10,
            elevation: 10,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
        }}>
            <View style={{
                width: '75%',
                backgroundColor: '#ffffff',
                height: '100%',
                paddingTop: 12,
                paddingBottom: 10,
            }}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('AccountScreen')} style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: 0.5,
                    padding: 20,
                    paddingTop: 30
                }}>
                    <Text>Данил</Text>
                    <Text>Рейтинг</Text>
                </TouchableOpacity>
                <FlatList
                    data={elemMenu}
                    renderItem={rendreElemMenu}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <TouchableOpacity onPress={handleSidebarClose} activeOpacity={.4} 
                style={{
                    width: '25%',
                    backgroundColor: '#000',
                    opacity: 0.4,
                    height: '100%',
                }}>
            </TouchableOpacity>
        </SafeAreaView>}
      </>
  )
}

export default Sidebar