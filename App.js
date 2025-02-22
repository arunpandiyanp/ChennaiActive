import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screens/HomeScreen';
import LaunchScreen from './Screens/LaunchScreen';
import DetailScreen from './Screens/DetailScreen';

const Stack = createNativeStackNavigator();
 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Launch">
        <Stack.Screen name="Launch" component={LaunchScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="DetailScr" component={DetailScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
