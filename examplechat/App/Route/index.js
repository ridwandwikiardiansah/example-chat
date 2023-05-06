import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from '../Home';
import Login from '../Login';
import ListChat from '../ListChat';
import ChatRoom from '../ChatRoom';
import AddChat from '../AddChat';

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