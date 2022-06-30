import React from 'react';
import styles from './styles';
import asset from '../../assets/asset';
import {TouchableOpacity, Text, Image} from 'react-native';

const DropDownFiled = ({txt, arrow, setDropVisible, dropVisible}) => {
  const dropVisibleFun = () => {
    setDropVisible(!dropVisible);
  };

  return (
    <TouchableOpacity
      style={{
        ...styles.dropDownView,
        backgroundColor: arrow ? '#FFF' : '#F2F2F2',
      }}
      onPress={arrow ? dropVisibleFun : null}>
      <Text style={styles.positionText}>{txt}</Text>
      {arrow && <Image source={asset.downArrow} style={styles.downArrow} />}
    </TouchableOpacity>
  );
};
export default DropDownFiled;
