import { StyleSheet } from "react-native";
import {vh,vw} from '../../utils/dimensions'
const styles= StyleSheet.create(
    {
        
        mainView:{
            flexDirection:'row',
            borderWidth:2,
            width:vw(300),
            
            alignSelf:'center',
            borderRadius:8,
            borderColor:'#FFFFFF',
            overflow:'hidden'

        },
        tab:{
            paddingVertical:vh(10),
            width:vw(150),
            alignItems:'center',
            borderRadius:6,
            
           
        },
        text:{
            fontWeight:'600',
            fontSize:vw(16)
        }
    }
)
export default styles