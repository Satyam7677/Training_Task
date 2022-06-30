import React from "react";
import { View, Text ,TouchableOpacity} from 'react-native'
import styles from "./styles";


export default function CustomTopTab({state, navigation,focused}) {
    const navigateOneway=()=>{
        navigation.jumpTo('One_Way')
    }

    const navigateRoundTrip=()=>{
        navigation.jumpTo('Round_Trip')
    }
  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={navigateOneway}
        style={state.index===0?{...styles.tab,backgroundColor:'#FFFFFF'}: styles.tab}

        >
            <Text style={state.index===0?{...styles.text,color:'#0087F5'}:{...styles.text,color:'#FFFFFF'}}>{'One Way'}</Text>

      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={1}
        onPress={navigateRoundTrip}
        style={state.index===1? {...styles.tab,backgroundColor:'#FFFFFF', }: styles.tab}

        >
            <Text style={state.index===1?{...styles.text,color:'#0087F5'}:{...styles.text,color:'#FFFFFF'}}>{'Round Trip'}</Text>

      </TouchableOpacity>


    </View>
  )
}