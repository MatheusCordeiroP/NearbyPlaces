import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeController from '../screens/Home/home.controller';

const MainStack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={HomeController}
        options={{ title: 'Home', headerShown: false }}
      />
    </MainStack.Navigator>
  );
};

export default StackNavigator;
