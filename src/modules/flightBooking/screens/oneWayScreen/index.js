import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  PanResponder,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {vh, vw} from '../../../../utils';

// import OneWayOptions from '../../components/oneWayOptions'

export default function OneWayScreen() {
  const pan = useState(new Animated.ValueXY())[0];
  const leftValue = useState(new Animated.Value(0))[0];

  const animationGoFunction = () => {
    Animated.spring(leftValue, {
      toValue: 200,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const animationComeFunction = () => {
    Animated.spring(leftValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log('responderGrant ', pan);

        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: (e, gesture) => {
        pan.x.setValue(gesture.dx);
        pan.y.setValue(gesture.dy);
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  )[0];

  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>{'ONE WAY '}</Text>

      <TouchableOpacity onPress={animationGoFunction}>
        <Text> GO</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={animationComeFunction}>
        <Text> COME</Text>
      </TouchableOpacity>

      <Animated.View
        {...panResponder.panHandlers}
        style={{
          height: vh(100),
          width: vw(100),
          alignItems: 'center',
          justifyContent: 'center',

          backgroundColor: '#D0F3FC',
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        }}>
        <Text style={{fontWeight: '600'}}>{'PanResponder'}</Text>
      </Animated.View>

      {/* <OneWayOptions/> */}
    </View>
  );
}
