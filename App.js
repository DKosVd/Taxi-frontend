import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './store' 
import screens from './mock-data/allScreen';
// import RNLocation from 'react-native-location';

// RNLocation.configure({
//  distanceFilter: null
// })
// Geolocation.setRNConfiguration(config);
const Stack = createNativeStackNavigator();

// Geolocation.getCurrentPosition( info => console.log(info))

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
            {screens.map( ({id, title, screen, headerShown}) => 
              <Stack.Screen 
                key={id}
                options={{
                  headerShown: headerShown,
                  title: ''
                }}
                name={title} 
                component={screen}/>)}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

