import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {
  
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {ImageBackground, Image, View, Text} from 'react-native';
import asset from '../assets/asset';

import BookMarkScreen from '../screen/bookMarkScreen';
import HomeScreen from '../screen/homeScreen';
import LinearGradient from 'react-native-linear-gradient';

import AirplaneButton from '../components/airplaneButton';
import {vh, vw} from '../utils/dimensions';
import BottomTabBar from '../components/bottomTabBar';

const BottomTab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <ImageBackground source={asset.airplane} style={{flex: 1}}>
        <LinearGradient
          colors={['#0087F5', '#0087F544', '#42AAFF']}
          style={{
            flex: 1,
          }}>
          <AirplaneButton />
          <BottomTab.Navigator
            sceneContainerStyle={{backgroundColor: 'transparent'}}
            tabBar={props=>(
              <View>
                <BottomTabBar {...props} />
              </View>
            )}
            screenOptions={{
              headerShown: false,
              

            }}>
            <BottomTab.Screen
              name="Home"
              component={HomeScreen}
           
            />

            <BottomTab.Screen
              name="Bookmark"
              component={BookMarkScreen}
            
            />
          </BottomTab.Navigator>
        </LinearGradient>
      </ImageBackground>
    </NavigationContainer>
  );
};
export default Routes;
