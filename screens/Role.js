import { NavigationContainer } from '@react-navigation/native';
import React, { useReducer } from 'react'
import screens, { screensForDriver } from '../mock-data/allScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SocketContext } from '../socket/socket';


const Stack = createNativeStackNavigator();

const Role = ({user}) => {
  const socket = React.useContext(SocketContext);
    React.useEffect(() => {
      if(user.role === 'driver') {
        socket.emit('TAXI_CONNECT', JSON.stringify(user));
      }
    }, [socket]);

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