import {StyleSheet, Dimensions} from 'react-native';
import {vw, vh} from '../../utils/dimensions';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  bubbleView: {
    width: 'auto',
    borderWidth: 1,
    padding: vw(10),
    marginRight: vh(10),
    borderRadius: vh(50),
    flexDirection: 'row',
    marginVertical: vh(9),
    borderColor: '#1CAEFC',
    justifyContent: 'center',
  },
  suggestionText: {
    color: '#1CAEFC',
    fontWeight: '600',
  },
});
export default styles;
