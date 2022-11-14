import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TabStack from './TabStack';
import DetailScreen from '../screens/DetailScreen';

export type MainStackParams = {
  Main: undefined;
  Detail: {id: number};
};

const Stack = createStackNavigator<MainStackParams>();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabStack}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
