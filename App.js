import { Provider } from 'react-redux';
import { store } from './store' 
import Auth from './screens/Auth';
import { SocketContext, socket } from './socket/socket';


export default function App() {
  return (
    <Provider store={store}>
      <SocketContext.Provider value={socket}>
        <Auth/>
      </SocketContext.Provider>
    </Provider>
  );
}

