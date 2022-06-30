import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {CustomTopTab} from '../../../components';
import OneWayScreen from '../../../modules/flightBooking/screens/oneWayScreen';
import RoundTripScreen from '../../../modules/flightBooking/screens/roundTripScreen';

const TopTab = createMaterialTopTabNavigator();

export function HomeToptab() {
  return (
    <TopTab.Navigator
      sceneContainerStyle={{backgroundColor: 'transparent '}}
      screenOptions={{swipeEnabled: false}}
      tabBar={props => <CustomTopTab {...props} />}>
      <TopTab.Screen name="One_Way" component={OneWayScreen} />
      <TopTab.Screen name="Round_Trip" component={RoundTripScreen} />
    </TopTab.Navigator>
  );
}
