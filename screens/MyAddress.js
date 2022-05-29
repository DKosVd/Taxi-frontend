import { View, Text, Button } from 'react-native'
import React from 'react'
import SidebarElemLayout from '../layouts/SidebarElemLayout';

const Address = () => {
  return (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 20,
      paddingBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      alignItems: 'center'
    }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Text style={{
          paddingRight: 20,
          fontSize: 30
        }}>+</Text>
        <Text style={{
          fontSize: 20
        }}>Дом</Text>
      </View>
      <View>
        <Text style={{
          fontSize: 20
        }}>&gt;</Text>
      </View>
    </View>
  );
}

const MyAddress = () => {
  return (
    <SidebarElemLayout title={"Мои адреса"}>
      <View style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <Button
          title='Добавить новый адрес'
          color="#fcd303"
        />
      </View>
      <View style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 30
      }}>
       <Address/>
      </View>
    </SidebarElemLayout>
  )
}

export default MyAddress