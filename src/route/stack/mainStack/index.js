import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from '../../bottomTab';

const Stack = createNativeStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="mainStack" component={BottomTab} />
    </Stack.Navigator>
  );
}
