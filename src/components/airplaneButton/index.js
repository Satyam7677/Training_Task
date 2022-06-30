import {
  Animated,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import { LocalImages} from '../../utils';

export function AirplaneButton() {
  const fade = useState(new Animated.Value(1))[0]

 


  

  //Fade animation
   const fadeFunction=()=>{

    Animated.timing(fade, {
      toValue:0,
      duration:2000,
      useNativeDriver:false
    }).start()
   }


   const newStyles= {

   }

  return (
    <Animated.View style={{...styles.mainView, opacity:fade}}>
      <TouchableOpacity
        
        onPress={
          fadeFunction
        }>
        <Image source={LocalImages.airplaneButton} style={styles.image} />
      </TouchableOpacity>
    </Animated.View>
  );
}
