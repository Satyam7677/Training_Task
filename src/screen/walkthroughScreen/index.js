import React from "react";
import { View,FlatList, SafeAreaView} from "react-native";
import { walkthroughScreensData } from "../../utils/dataArray";
import WalkthroughImage from "../../components/walkthroughImage";
import styles from "./styles";
import WalkthroughHeadText from "../../components/walkthroughHeadText";
import WalkthroughSubText from "../../components/walkthroughSubText";



const WalkthroughScreen=()=>{
    console.log('walkthroughScreensData',walkthroughScreensData)

    const renderItem=(item)=>{
        console.log('The item is', item.item.logo)

        return(
            <View style={styles.renderItemView}>
            <WalkthroughImage logo={item.item.logo}/>
            <WalkthroughHeadText headText={item.item.headText}/>
            <WalkthroughSubText subtext={item.item.subText}/>
            </View>
            
            
        )
    }

    return(
        <SafeAreaView style={styles.safeAreaViewStyle}>
            <FlatList
            data={walkthroughScreensData}
            keyExtractor={item=>item.headText}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            pagingEnabled/>
        </SafeAreaView>
    )
}
export default WalkthroughScreen