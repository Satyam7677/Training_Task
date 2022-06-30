import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import checkboxData from '../../utils/checkboxData';
import asset from '../../assets/asset';
import styles from './styles';
import {ItemSeparator} from '../checkbox'

const RadioComponent = () => {
  const [checked, setChecked] = useState(null);

  const renderItem = ({item}) => {
    const radioClick = () => {
      setChecked(item);
    };

    return (
      <View style={styles.renderItemView}>
        <TouchableOpacity onPress={radioClick}>
          {checked == item ? (
            <Image source={asset.radioOn} style={styles.image} />
          ) : (
            <Image source={asset.radioOff} style={styles.image} />
          )}
        </TouchableOpacity>
        <Text>{item}</Text>
      </View>
    );
  };
  return (
    <View style={styles.mainView}>
      <Text style={styles.headText}>{'Radio Options'}</Text>
      <FlatList data={checkboxData.radioOptions} renderItem={renderItem} ItemSeparatorComponent={ItemSeparator}/>
    </View>
  );
};
export default RadioComponent;
