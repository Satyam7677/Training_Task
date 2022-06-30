import { StyleSheet ,Dimensions} from "react-native";
import { vh, vw } from "../../utils/dimensions";
const {height,width} = Dimensions.get('screen')


const styles=StyleSheet.create({
    safeAreaViewStyle:{
        flex:1,
        backgroundColor:'#646FD4'
    },
    renderItemView:{
        flexDirection:'column',
        width:vw(width-15),
        height:vh(200),
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'space-between'
        
    }
})
export default styles
