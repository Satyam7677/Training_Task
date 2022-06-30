import React from "react"
import {View,Text} from 'react-native'
import styles from "./styles"

const UnderComponent=({under})=>{
    return(<View style={styles.underView}>
        <Text style={styles.underText}>
          {'Under: '}
          <Text style={styles.nameText}>{under}</Text>
        </Text>
        </View>)
}

export default UnderComponent
