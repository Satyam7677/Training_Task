import React from "react";
import {View,Text} from 'react-native'
import styles from "./styles";

const WalkthroughHeadText=({headText})=>{
    return(
        <Text style={styles.headtextStyle}>
            {headText}
        </Text>
    )
}
export default WalkthroughHeadText