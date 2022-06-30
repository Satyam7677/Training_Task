import {StyleSheet, Dimensions} from 'react-native';
import {vw, vh} from '../../utils/dimensions';
const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  dropDownView: {
    height: '45%',
    borderWidth: 0.2,
    alignItems: 'center',
    borderRadius: vw(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: vw(20),
  },
  positionText: {
    fontSize: vh(18),
  },
  downArrow: {
    width: '10%',
    height: '70%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
export default styles;
