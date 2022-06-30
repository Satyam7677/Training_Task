import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { TouchableOpacity, Image } from 'react-native'
import asset from '../../assets/asset'
import {Svg,Path} from 'react-native-svg'
import { vh,vw } from '../../utils/dimensions'
export default function BottomTabBar({navigation}) {

    const navigateHome=()=>{
        navigation.jumpTo('Home')
    }

    const navigateBoookMark=()=>{
        navigation.jumpTo('Bookmark')
    }

  return (
    <View style={styles.mainView}>

    <TouchableOpacity
      activeOpacity={1}
      style={styles.touchableView}
      onPress={navigateHome}
      >
          <Image source={asset.home} style={styles.icon}/>

         
    </TouchableOpacity>


    <Svg
    width={vw(94)}
    height={vh(110)}

    style={{backgroundColor:'transparent',
   
    }}>
        {/* <Path stroke={'green'} fill={'transparent'} d='M0 0 Q45.5 97,95 0'/> */}

        {/* <Path stroke={'green'} fill={'transparent'} 
        d={
            'M0 0 A1 1 ,0, 0 0, 95 0 '}/> */}
            


            {/* <Path d='M0 0 C 23.5 22.5 70.5 47.5 95 0' stroke={'green'} fill={'zzzz'}/> */}

            {/* <Path
            d={
            'M0 0 v61H0V0 L 0 100 M95 0 L 95 100 M0 0 A1 1 ,0, 0 0, 95 0  c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z '} stroke={'green'} fill={'white'}/> */}


{/* <Path
        d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
        fill={'white'}
      /> */}



        <Path
        d="M 100 0 V 110 H 0 V 0 c 9,0 10,0.3 11,3 c 0,0 2,35 39,36.5 c 0,0 34,2 37,-36.5 c 0,0 0,-2.2 3,-3 "
        fill="white"
        
        />
     


  

    </Svg>



    <TouchableOpacity
      activeOpacity={1}
      style={styles.touchableView}
      onPress={navigateBoookMark}
      >
           
      
          <Image source={asset.bookmark} style={styles.icon}/>
          

    </TouchableOpacity>


  </View>
  )
}