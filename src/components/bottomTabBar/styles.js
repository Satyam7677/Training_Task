import { StyleSheet } from "react-native";
import {vh,vw} from '../../utils'
const styles= StyleSheet.create(
    {
        
        mainView:{
            flexDirection:'row',

            width:'100%',
            height:vh(80),
            alignSelf:'center',


            overflow:'hidden',

            backgroundColor:'transparent'

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
        },
        icon:{
            height:vh(25),
            width:vw(25),
            resizeMode:'contain'
        },
        touchableView:{
            paddingTop:vh(20),
            alignItems:'center',

            height:vh(100),
            width:vw(140.5),
            backgroundColor:'#FFFFFF'

        }
    }
)
export default styles