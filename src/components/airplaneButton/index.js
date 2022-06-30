import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import styles from './styles'
import asset from '../../assets/asset'
import { vh } from '../../utils/dimensions'

export default function AirplaneButton() {
  return (
    <TouchableOpacity style={styles.mainView}
    onPress={()=>{
      
    }}
    >
     
      
      <Image source={asset.planeButton} style={styles.image}/>

      
        

    </TouchableOpacity>
  )
}