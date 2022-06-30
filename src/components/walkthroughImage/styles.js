import { StyleSheet } from "react-native";
import {vh,vw} from '../../utils/dimensions'
const styles=StyleSheet.create(
    {
        walkthroughImageStyle:{
            height:'100%',width:'100%',
            resizeMode:'contain'
            
        },
        imageContainer:{

            height:vh(100),
            width:vw(90)
        }
    }
)
export default styles