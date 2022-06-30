import { StyleSheet } from "react-native";
import {vh,vw} from '../../utils/dimensions'

const styles=StyleSheet.create(
    {
        profileView: {
            height: vh(70),
            marginTop: vh(20),
            flexDirection: 'row',
            resizeMode: 'contain',
            justifyContent: 'center',   
            flexWrap:'wrap'         
          },
          profileTextView: {
            height: '60%',
            marginLeft: vw(20),
            alignSelf: 'center',
            justifyContent: 'space-between',
            
          },
          profileImage: {
            height: vh(70),
            width: vh(70),
            borderRadius: vh(50),
            borderColor: '#1CAEFC',
          },
          profileNameStyle: {
            fontSize: vh(18),
            fontWeight: '600',
          },
    }
)
export default styles