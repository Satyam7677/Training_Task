import {StyleSheet} from 'react-native';
import {vh} from '../../../../utils';

const styles = StyleSheet.create({
  mainView: {
    // flex:1,
    marginTop: vh(20),
    backgroundColor: 'transparent',
    height: vh(300),
    borderColor: '#FFFFFF',
    borderWidth: 0.2,
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
  },
});
export default styles;
