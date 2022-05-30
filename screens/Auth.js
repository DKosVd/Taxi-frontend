import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { selectError, selectUser, setError, setUser } from '../slices/authSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import users from '../mock-data/user';
import Role from './Role';


const Auth = () => {
  const dispatch = useDispatch();
  
  const [isRegister, setRegister] = React.useState(false);

  const user = useSelector(selectUser);
  const error = useSelector(selectError);

  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState(''); 
 
  const handleSetName = (e) => {
    setLogin(e);
  }

  const handleSetPass = (e) => {
    setPassword(e);
  }

  const requestData = () => {
    validUser();
    clearForm();
  }

  const requestDataRegister = () => {
    clearForm();
  }

  const clearForm = () => {
      setLogin('');
      setPassword('');
  }

  const handleRegister = () => {
    setRegister(!isRegister);
  }

  const validUser = () => {
      const user = users.filter( ({name, role, pass}) => {
        if(name === login && pass === password) {
            return {
                name,role, pass
            }
        } 
    }) 
    if(user.length > 0) {
        dispatch(setUser(user[0]));
    } else {
        dispatch(setError('Password or name not valid'))
    }
  }

  return (
    <>
    {user ?       
      <Role user={user}/> : 
      <View style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }}>
        <View style={{
            marginBottom: 30
        }}>
            <Text>
                {isRegister ? "Регистрация" : "Авторизация"}
            </Text>
        </View>
         <View style={{
             width: "80%",
             marginBottom: 20
         }}>
             <TextInput
                style={{
                    height: 50,
                    padding: 10,
                    marginLeft: 20,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: 'black',
                }}
                value={login}
                onChangeText={handleSetName}
                placeholder="Email"
             />
         </View>
         <View style={{
             width: "80%"
         }}>
             <TextInput
                style={{
                    height: 50,
                    padding: 10,
                    marginLeft: 20,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: 'black',
                }}
                value={password}
                onChangeText={handleSetPass}
                placeholder="Password"
             />
         </View>
         <TouchableOpacity style={{
                width: "80%",
                borderRadius: 25,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 40,
                backgroundColor: "#FF1493",
         }}
         onPress={isRegister ? requestDataRegister : requestData }>
             <Text style={{
                  height: 30,
                  color: 'white',
             }}> {isRegister ? "Регистрация" : "Авторизация"} </Text>
         </TouchableOpacity>
         <TouchableOpacity style={{
           marginTop: 10, 
         }} onPress={handleRegister}>
           <Text>{isRegister ? "Авторизоваться" : "Зарегистрироваться"}</Text>
         </TouchableOpacity>
         {error && 
            <View>
                <Text>{error}</Text>
            </View>
         }
      </View>
     }
    </>
  )
}

export default Auth;