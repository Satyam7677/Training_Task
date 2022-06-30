import React from "react";
import {View,Image,Text} from 'react-native'
import styles from "./styles";

const WalkthroughImage=({logo})=>{
    console.log('The logo is', logo)
    return(
        <View style={styles.imageContainer}>
        <Image source={logo} style={styles.walkthroughImageStyle}/>
        </View>

    )
}
export default WalkthroughImage