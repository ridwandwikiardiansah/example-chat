import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import Home from '../Home';
import Login from '../Login';
import ListChat from '../ListChat';
import ListAbsen from '../ListAbsen';
import FormAbsen from '../FormAbsen';
import ChatRoom from '../ChatRoom';
import AddChat from '../AddChat';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Camera from '../Component/Camera';
import DetailAbsen from '../DetailAbsen';

const Stack = createStackNavigator();
 
const App = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
            name="Home"
            component={Home}
            options={{
                headerLeft: null,
                headerTitle: 'Chat Dashboard',
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: null}}
          />
           <Stack.Screen
            name="ChatRoom"
            component={ChatRoom}
            options={{
                headerTitle: 'Chat Room',
            }}
          />
            <Stack.Screen
            name="Add"
            component={AddChat}
            options={{
                headerTitle: 'Send Chat',
            }}
          />
           <Stack.Screen
            name="List"
            component={ListChat}
            options={{
                headerTitle: 'Chat List',
            }}
          />

          <Stack.Screen
            name="Absen"
            component={FormAbsen}
            options={{
                headerTitle: 'Tambah Absen',
            }}
          />

          <Stack.Screen
            name="DetailAbsen"
            component={DetailAbsen}
            options={{
                headerTitle: 'Detail Absen',
            }}
          />

          <Stack.Screen
            name="Camera"
            component={Camera}
            options={{
              headerStyle: {backgroundColor: '#FFF'},
              headerTintColor: '#FFF',
            }}
        />  

        <Stack.Screen
          name="ListAbsen"
          component={ListAbsen}
          options={({navigation}) => ({
            headerStyle: {
              // backgroundColor: '#A9D8B8',
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Absen')}>
                   <Icon
                    name="plus"
                    size={30}
                    color="#000"
                    style={{marginRight: 20}}
                />
              </TouchableOpacity>
            ),
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            title: 'Daftar Absen'
          })}
        />

          {/* <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerStyle: {
                backgroundColor: '#A9D8B8',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
 
export default App;