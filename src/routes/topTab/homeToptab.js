import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OneWayScreen from '../../screen/oneWayScreen';
import RoundTripScreen from '../../screen/roundTripScreen';
import {TabBarIndicator} from 'react-native-tab-view';
import CustomTopTab from '../../components/customTopTab';

const TopTab = createMaterialTopTabNavigator();

export default function HomeToptab() {
  return (
    <TopTab.Navigator
      
      sceneContainerStyle={{backgroundColor: 'transparent '}}
      tabBar={props => <CustomTopTab {...props} />}
      screenOptions={{swipeEnabled:false}}
      >
         
      <TopTab.Screen name="One_Way" component={OneWayScreen} />
      <TopTab.Screen name="Round_Trip" component={RoundTripScreen} />
    </TopTab.Navigator>
  );
}
