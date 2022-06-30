import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  renderItemView: {
    height: vh(100),
    width: vw(355),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: vw(10),
  },
  flatlistHeader: {
    marginVertical: vh(10),
    backgroundColor: '#0DBAE8',
    width: vw(200),
    height: vh(100),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
