import CarScreen from "../screens/CarScreen";
import FoodScreen from "../screens/FoodScreen";
import HomeScreen from "../screens/HomeScreen";
import SecureScreen from "../screens/SecureScreen";
import OrdersHistory from "../screens/OrdersHistory";
import PayMethod from "../screens/PayMethod";
import Tarifs from "../screens/Tarifs";
import MyAddress from "../screens/MyAddress";
import About from "../screens/About";
import AccountScreen from "../screens/AccountScreen";

const screens = [
    {
        id: '1',
        title: 'Home',
        headerShown: false,
        screen: HomeScreen
    },
    {
        id: '2',
        headerShown: false,
        title: 'CarScreen',
        screen: CarScreen
    },
    {
        id: '3',
        headerShown: false,
        title: 'FoodScreen',
        screen: FoodScreen
    },
    {
        id: '4',
        headerShown: true,
        title: 'SecureScreen',
        screen: SecureScreen
    },
    {
        id: '5',
        headerShown: true,
        title: 'OrdersHistoryScreen',
        screen: OrdersHistory
    },
    {
        id: '6',
        headerShown: true,
        title: 'PayMethodScreen',
        screen: PayMethod
    },
    {
        id: '7',
        headerShown: true,
        title: 'TarifsScreen',
        screen: Tarifs
    },
    {
        id: '8',
        headerShown: true,
        title: 'MyAddressScreen',
        screen: MyAddress
    },
    {
        id: '9',
        headerShown: true,
        title: 'AboutScreen',
        screen: About
    },
    {
        id: '10',
        headerShown: true,
        title: "AccountScreen",
        screen: AccountScreen
    }
]

export default screens;