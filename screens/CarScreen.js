import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList, TextInput, Dimensions, PermissionsAndroid } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, Polyline } from 'react-native-maps';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import streets from '../mock-data/streets';
import RenderStreet from '../components/RenderStreet';
import Sidebar from '../components/Sidebar';
import { getCoordinates, getDuration } from '../api/streetAPI';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoordinatesByAddress, fetchDurationBetweenTwoStreet, selectOrigin, selectDuration } from '../slices/navSlice';
import { SocketContext } from '../socket/socket';

const initialState = {
  initialText: 'Куда едем?',
  addressFrom: null,
  addressTo: null
}

const renderStreet = ({item}) => {
  return <RenderStreet streetName={item.streetName} time={item.time} />
} 

const CarScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const coordinates = useSelector(selectOrigin);
  const duration = useSelector(selectDuration);

  const socket = React.useContext(SocketContext);

  const [currentPosition, setCurrentPosition] = React.useState(null);

  const [coordinateDots, setPinCoordinateDots] = React.useState({});
  const [durationState, setDurationState] = React.useState([]);
  const [pinCoordinate, setPinCoordinate] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324
  });

  const mapRef = React.useRef(null);

  const handleSetPinCoordrinate = ({latitude, longitude}) => {
    setPinCoordinate({
      latitude,
      longitude
    })
  }

  React.useEffect(() => {
    async function getData() {
      const data = await getCoordinates('Россия город Самара улица Революционная, дом 77');
      setPinCoordinateDots({
        ...coordinateDots,
        from: {
          latitude: data[0].latLng.lat,
          longitude: data[0].latLng.lng
        }
      });
    }
    // getData();
    async function getDur() {
      const data = await getDuration('Россия город Самара улица Революционная, дом 77', 'Россия город Самара улица Николая Панова, дом 12');
      const latLngs = data.route.legs[0].maneuvers.map( ({startPoint}) => {
        return {
          'latitude': startPoint.lat,
          'longitude': startPoint.lng
        }
      }); 
      setDurationState([...latLngs]);
      // console.log(data.route.legs[0].maneuvers);
    }
    async function positionWatch() {
      const {status} = await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted') {
        console.log('REJECTED')
        return;
      } 
      Location.watchPositionAsync({accuracy:Location.Accuracy.BestForNavigation, timeInterval: 3000, distanceInterval: 1},  ({coords}) => {
        setCurrentPosition( {'latitude':coords.latitude, 'longitude':coords.longitude} );
        mapRef.current.animateCamera({center: {'latitude':coords.latitude, 'longitude':coords.longitude}, zoom: 15}, {duration: 1000});
      });
    }
    positionWatch();
  }, []);

  React.useEffect(() => {
    socket.emit('TAXI_GET_DRIVER');
    socket.on('TAXI_SEND_DRIVER', (data) => {
      console.log(data);
    })
  }, [duration])

  React.useEffect(() => {
    if(coordinates && mapRef.current) {
      const {latitude, longitude} = coordinates;
      mapRef.current.animateCamera({center: {latitude, longitude}, zoom: 15}, {duration: 1000});
    }
  }, [coordinates]);

  const [activeBlind, setActiveBlind] = React.useState( false );
  const [address, setAddress] = React.useState( initialState );
  const [sidebarOpen, setSidebarState] = React.useState( false );

  const handleOpenSidebar = () => {
    setSidebarState(!sidebarOpen);
  }

  const handlerActiveSetBlind = () => {
    setActiveBlind(!activeBlind);
    handleSetAddress();
  }

  const handleSetAddress = () => {
    activeBlind ? setAddress({...address, initialText: initialState.initialText}) : setAddress({...address, initialText: ''}) ;
  }

  const handlerSearchAddressFrom = (e) => {
    setAddress({...address, addressFrom: e});
  }

  const handleFetchCoordinates = () => {
    dispatch(fetchCoordinatesByAddress(address.addressFrom));
  }

  const handleFetchDuration = () => {
    dispatch(fetchDurationBetweenTwoStreet({from:address.addressFrom, to:address.addressTo}));
  }

  const handlerSearchAddressTo = (e) => {
    setAddress({...address, addressTo: e});
  }
 

 


  return (
    <SafeAreaView style={tw`relative bg-white h-full bg-blue-100 `}>
        <View style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          top: 40,
          left: 0,
          right: 0,
          zIndex: 1
        }}>
            <TouchableOpacity 
              onPress={handleOpenSidebar}
              style={{
                flexBasis: '10%',
                marginLeft: 10,
                justifyContent: 'center'
              }}>
                <Image source={require('../assets/images/menu-icon.png')}></Image>
            </TouchableOpacity>
            <View style={{
              flexBasis: '80%',
              alignItems: 'center'
            }}>
                <View style={tw`flex-col items-center`}>
                  <Text style={tw`text-xs`}>Ваш адрес &gt;</Text>
                  <Text style={tw`text-base font-bold`}>Советской Армии 166Г</Text>
                </View>
            </View>
        </View>
        <MapView
          ref={mapRef}
          onRegionChange={handleSetPinCoordrinate}
          initialRegion={{latitude: 53.241505,
            longitude: 50.221245,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
        >
          {coordinates && <Marker coordinate={coordinates}/>}
          {currentPosition && <Marker coordinate={currentPosition}/>}
          {duration && <Polyline  coordinates={duration} strokeColor={'#000'} strokeWidth={4} />}
          {duration && <Marker coordinate={duration[duration.length - 1]}/>}
        </MapView>
        {/* <Blind/> */}
        <TouchableOpacity activeOpacity={1}  onPress={handlerActiveSetBlind} style={{
          position: 'absolute',
          top: `${activeBlind ? '50%': '85%'}`,
          height: '100%',
          width: '100%',
          borderRadius: 40,
          backgroundColor: '#ffffff',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.22,
          zIndex: 6,
          elevation: 6,
        }}>
          <View  style={tw`m-6 h-full overflow-hidden relative`}>
            <View
              style={tw`w-full flex-row justify-center`}
            >
              <View style={tw`h-1 w-10 bg-gray-200 mb-4`}></View>
            </View>
            <View style={tw`flex-col`}>
              <View style={tw`flex-row bg-gray-200 rounded-xl justify-between items-center mb-4`}>
                  {!activeBlind && <Image style={{marginLeft: -20, marginRight: 10}} source={require('../assets/images/car-medium.png')}/>}
                  <TextInput 
                    onChangeText={handlerSearchAddressFrom} 
                    onBlur={handleFetchCoordinates}
                    value={address.addressFrom && activeBlind ? address.addressFrom: address.initialText} 
                    style={tw`items-start flex-1 text-lg font-bold border-r-2 border-gray-400 p-4`}/>
                  <View style={tw`mr-4 ml-4`}>
                    <Text style={tw`text-2xl`}>-&gt;</Text>
                  </View>
              </View>
              <View style={tw`flex-row bg-gray-200 rounded-xl justify-between items-center`}>
                  {!activeBlind && <Image style={{marginLeft: -20, marginRight: 10}} source={require('../assets/images/car-medium.png')}/>}
                  <TextInput 
                    onChangeText={handlerSearchAddressTo} 
                    onBlur={handleFetchDuration}
                    value={address.addressTo} 
                    style={tw`items-start flex-1 text-lg font-bold border-r-2 border-gray-400 p-4`}/>
                  <View style={tw`mr-4 ml-4`}>
                    <Text style={tw`text-2xl`}>-&gt;</Text>
                  </View>
              </View>
            </View>
            <FlatList
              contentContainerStyle={{
                width: '100%',
                justifyContent: 'space-between',
                marginTop: 10,
              }}
              data={streets}
              renderItem={renderStreet}
              horizontal
              keyExtractor={(item) => item.id}
            />
          </View>
        </TouchableOpacity>
        <Sidebar isOpen={sidebarOpen} callbackClose={setSidebarState}/>
    </SafeAreaView>
  );
};

export default CarScreen;
