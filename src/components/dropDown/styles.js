import {StyleSheet,Dimensions} from 'react-native'
import {vh,vw} from '../../utils/dimensions'
const {height,width} = Dimensions.get('screen')
const styles=StyleSheet.create(
{
    dropDownView: {
    // zIndex:1,
    top: vh(273),
    width: '90%',
    height:vh(height/4),
    borderWidth: 0.2,
    borderRadius: 10,
    alignSelf: 'center',
    position: 'absolute',
    paddingVertical:vh(5),
    backgroundColor: '#FFF',
    paddingHorizontal: vh(20),
  },
  dropHeader: {
    height:'20%',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.9,
    borderBottomColor: '#E7E7E7',
    
  },
  searchImageStyle: {
    height: vh(17),
    resizeMode: 'contain',
  },
  dropDownOption: {
    height: vh(40),
    justifyContent: 'center',
  },
  optionText: {
    color: '#3F4954',
    fontSize: vh(16),
    fontWeight: '500',
  },
}
  )
  export default styles