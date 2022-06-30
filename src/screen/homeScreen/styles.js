
import { StyleSheet } from "react-native";
import {vh,vw} from '../../utils/dimensions'

const styles= StyleSheet.create(
    {
        mainView:{
            paddingHorizontal:vw(15),
            flex:1
            
        },
        headText:{
            color:'#FFFFFF',
            fontSize:42,
            fontWeight:'800',
            marginBottom:25,
            marginTop:20

        },
        topTabStyles:{
            flex:1,
            width:vw(300),
            alignSelf:'center'

        }
    }
)
export default styles