import React, {useContext} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ImageBackground, View} from 'react-native';

import {LocalImages} from '../../utils';

import LinearGradient from 'react-native-linear-gradient';

import {BottomTabBar} from '../../components';
import {AirplaneButton} from '../../components';
import {MyContext} from '../../../App';
import HomeScreen from '../../modules/flightBooking/screens/homeScreen';
import BookMarkScreen from '../../modules/flightBooking/screens/bookMarkScreen';

const BtmTab = createBottomTabNavigator();

const BottomTab = () => {
  const x = useContext(MyContext);

  return (
    <MyContext.Provider value={{name: 'Faiz', age: '21'}}>
      <ImageBackground
        source={LocalImages.backgroundAirplane}
        style={{flex: 1}}>
        <LinearGradient
          colors={['#0087F5', '#0087F544', '#42AAFF']}
          style={{
            flex: 1,
          }}>
          <AirplaneButton />

          <BtmTab.Navigator
            sceneContainerStyle={{backgroundColor: 'transparent'}}
            tabBar={props => (
              <View>
                <BottomTabBar {...props} />
              </View>
            )}
            screenOptions={{
              headerShown: false,
            }}>
            <BtmTab.Screen name="Home" component={HomeScreen} />

            <BtmTab.Screen name="Bookmark" component={BookMarkScreen} />
          </BtmTab.Navigator>
        </LinearGradient>
      </ImageBackground>
    </MyContext.Provider>
  );
};
export default BottomTab;
