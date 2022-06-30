import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'
import HomeToptab from '../../routes/topTab/homeToptab'
import LinearGradient from 'react-native-linear-gradient'
import asset from '../../assets/asset'
import AirplaneButton from '../../components/airplaneButton'



export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.mainView}>

    
    
       
        <View style={styles.topTabStyles}>
        <Text style={styles.headText}>{'Book your Flight'}</Text>
        <HomeToptab/>  
       
        </View>
       
      
      
    </SafeAreaView>
  )
}