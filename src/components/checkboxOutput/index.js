import React, { useEffect } from "react";
import { View,Text,FlatList } from "react-native";
import checkboxData from "../../utils/checkboxData";
import { ItemSeparator } from "../checkbox";
import styles from "./styles";

const CheckboxOutput=({output})=>{



    const renderItem=({item})=>{

        return (
            <View>

                <Text>
                {item}
            </Text>

            </View>
        )
    }

    return(
        <View style={styles.mainView}>
            <Text style={styles.headText}>
                {'Checkbox output'}
            </Text>

            <FlatList
            data={output}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparator}

            />
                
            
        </View>
    )
}
export default CheckboxOutput