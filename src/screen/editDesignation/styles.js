import {StyleSheet, StatusBar, Dimensions} from 'react-native';
import {vw, vh} from '../../utils/dimensions';
const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  body: {
    flex: 1,
    height: vh(height),
  },

  mainView: {
    flex: 1,
    paddingHorizontal: '4%',
  },

  arrowImage: {
    width: vw(28),
    height: vh(28),
    resizeMode: 'contain',
  },
  headerView: {
    height: '8%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headText: {
    fontSize: vh(20),
  },



  profileView: {
    marginTop: vh(20),
    flexDirection: 'row',
    resizeMode: 'contain',
    justifyContent: 'center',

    height: vh(70),
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
  profileTextView: {
    height: '60%',
    marginLeft: vw(20),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  dropOptionsView: {
    width: '100%',
    height: vh(120),
    marginTop: vh(20),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },

  downArrow: {
    width: '10%',
    height: '70%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
 

  suggestionView: {
    flexWrap:'wrap',
    marginTop: vh(20),
    alignItems: 'baseline',
  },


  saveButton: {
    width: '100%',
    height: vh(45),
    marginTop: 'auto',
    borderRadius: vw(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C4CACC',
  },
  suggestionHeadText: {
    fontWeight: '600',
    marginBottom: vh(10),
  },

  dropDownHeaderText: {
    color: '#949494',

  },

  buttonText: {
    color: '#FFF',
    fontSize: vh(17),
    fontWeight: '600',
  },

  suggestionBubbleView:{
  flexWrap:'wrap',
  flexDirection:'row',
  },
  modal:{
    height:'100%',
    width:'100%',
    backgroundColor:'#00000055',
    zIndex:1
  }


});
export default styles;
