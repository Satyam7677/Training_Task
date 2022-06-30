import React from "react";
import {View,Image,Text} from 'react-native'
import asset from "../../assets/asset";
import styles from "./styles";


const ProfileComponent=({name,address})=>{
    return(
        <View style={styles.profileView}>
        <Image source={asset.profileImage} style={styles.profileImage} />
        <View style={styles.profileTextView}>
          <Text style={styles.profileNameStyle}>{name}</Text>
          <View>
            <Text>{address}</Text>
          </View>
        </View>
      </View>
    )
}
export default ProfileComponent