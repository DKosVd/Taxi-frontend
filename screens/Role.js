import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import screens, { screensForDriver } from '../mock-data/allScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {io} from 'socket.io-client';

const Stack = createNativeStackNavigator();

const Role = ({user}) => {
    const [socket, setSocket] = React.useState(null);
    React.useEffect(() => {
        const newSocket = io("http://192.168.0.109:3003", {
          query: user.role !== 'pass' ? user: null
        });
        setSocket(newSocket);
        newSocket.emit('msgToServer', JSON.stringify('hello'));
        newSocket.on('msgToClient', (data) => {
          console.log(data);
        })
        return () => newSocket.close();
    }, [setSocket]);

  return (
    <>
    <NavigationContainer>
            <Stack.Navigator>
            {user.role === 'pass' ?
                 screens.map( ({id, title, screen, headerShown}) => 
                 <Stack.Screen 
                     key={id}
                     options={{
                     headerShown: headerShown,
                     title: '',
                     }}
                     params={socket}
                     name={title} 
                     component={screen}/>):
               screensForDriver.map( ({id, title, screen, headerShown}) => 
              <Stack.Screen 
                  key={id}
                  options={{
                  headerShown: headerShown,
                  title: ''
                  }}
                  name={title} 
                  component={screen}/>)
                }
               
            </Stack.Navigator>
        </NavigationContainer>
    </>
  )
}

export default Role