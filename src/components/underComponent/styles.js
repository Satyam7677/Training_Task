import { StyleSheet } from "react-native";
import {vh,vw} from '../../utils/dimensions'

const styles=StyleSheet.create({
    underView: {
        width: '100%',
        borderWidth: 1,
        padding: vw(10),
        marginTop: vh(8),
        alignSelf: 'center',
        borderRadius: vh(10),
        borderColor: '#1CAEFC',
        backgroundColor: '#EFF7FF',
      },
      underText: {
        color: '#000000',
        fontSize: vh(18),
      },
      nameText: {
        color: '#1CAEFC',
      },
})
export default styles