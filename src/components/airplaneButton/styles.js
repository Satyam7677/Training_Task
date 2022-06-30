import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimensions';

const styles = StyleSheet.create({
  mainView: {
    height: vh(70),
    width: vh(70),
    borderRadius: vh(50),
    backgroundColor: 'blue',
    resizeMode: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: vh(42),
    elevation: 10,
    zIndex:20,
    alignSelf: 'center',
  },

  image: {
    height: vh(30),
    width: vh(30),
  },
});
export default styles;
