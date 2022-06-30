import React from "react"
import {View, Text,Image,TouchableOpacity,FlatList} from 'react-native'
import asset from "../../assets/asset"
import { CustomTextInput } from "../customTextInput"
import styles from "./styles"
import { dropArray } from "../../utils/dataArray"


const DropDown=({headtxt,setDropVisible,dropVisible,setText})=>{

    const dropRenderItem = dropArrayItem => {
        const {item} = dropArrayItem;
    
        console.log(dropArrayItem)
        return (
          <TouchableOpacity
            style={styles.dropDownOption}
            onPress={() => {
              setText(item);
              setDropVisible(!dropVisible);
            }}>
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        )
      }
      return(
          
            <View style={styles.dropDownView}>
            <View style={styles.dropHeader}>
              <Image source={asset.search} style={styles.searchImageStyle} />
              
              <CustomTextInput txt={headtxt}/>
                

            </View>

            {/* *******FlatList for the renderItem******* */}
            <FlatList
              data={dropArray}
              bounces={false}
              renderItem={dropRenderItem}
              keyExtractor={item=>item
              }
            />
          </View> 



      )


}
export default DropDown



