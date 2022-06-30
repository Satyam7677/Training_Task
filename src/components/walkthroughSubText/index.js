import React from "react";
import {Text} from 'react-native'
import styles from "./styles";

const WalkthroughSubText=({subtext})=>{
    return(
        <Text style={styles.subtext}
        numberOfLines={2} >
            {subtext}
        </Text>
    )

}
export default WalkthroughSubText