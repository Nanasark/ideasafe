import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuTabs from './tabs';
import Signup from '../screens/signup';

const Stack = createNativeStackNavigator();
const Auth = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup"
        screenOptions={{headerShown: false
        }}
      >
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="MenuTabs" component={MenuTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Auth