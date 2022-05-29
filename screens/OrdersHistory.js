import { View, Text, FlatList } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import SidebarElemLayout from '../layouts/SidebarElemLayout';
import ElemWithIconAndText from '../components/ElemWithIconAndText';
import orders from '../mock-data/orders';

const renderOrder = ({item, index}) => {
  const [orderDate, ordersByDate] = item;
  return (
    <View key={orderDate}>
        <Text style={{
          marginBottom: 10,
          marginTop: 10,
          fontSize: 25,
          color: 'gray'
        }}>{orderDate}, суббота</Text>
         {ordersByDate.map( ({id, time, price, addressFrom, addressTo}, idx) =>   <View key={id} style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ffffff',
          borderRadius: 15,
          marginBottom: 10
        }}>
          <View style={{
            padding: 10,
            borderBottomWidth: idx === 0 && index === 0 ? 1 : 0,
            borderBottomColor: 'gray'
          }}>
            <Text style={tw`text-xl font-bold`}>Поездка в {time}</Text>
            <Text>{price}Р, {addressFrom} {addressTo}</Text>
          </View>
          { (idx === 0 && index === 0) && 
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 15, 
            }}>
              <ElemWithIconAndText title={"Звонок водителю"}/>
              <ElemWithIconAndText title={"Помощь с заказом"}/>
            </View> 
          }
          
        </View>
        )}
    </View>
  );
} 


const OrdersHistory = () => {


  return (
    <SidebarElemLayout title={'Мои заказы'}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: '100%',
            paddingBottom: 60
          }}
          data={Object.entries(orders)}
          renderItem={renderOrder}
          keyExtractor={(item) => item[0]}
        /> 
    </SidebarElemLayout>
  )
}

export default OrdersHistory