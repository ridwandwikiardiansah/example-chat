import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from '../Home';
import Login from '../Login';
import ListChat from '../ListChat';
import ChatRoom from '../ChatRoom';

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
                headerTitle: 'Example Chat Dashboard',
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
                headerTitle: 'Example Chat Room',
            }}
          />
           <Stack.Screen
            name="List"
            component={ListChat}
            options={{
                headerTitle: 'Example Chat List',
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