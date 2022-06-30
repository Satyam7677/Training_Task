import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import checkboxData from '../../utils/checkboxData';
import asset from '../../assets/asset';
import styles from './styles';


const CheckBoxComponent = ({ setOutput, output}) => {
  const renderItem = ({item}) => {
    const checkBoxOnpress = () => {
      item.checkStatus = !item.checkStatus;
      console.log('item.name is', item.name);
      const i = output.findIndex(element => element == item.name);

      if (i == -1) {
        setOutput([...output, item.name]);
      } else {
        output.splice(i, 1);
        setOutput([...output]);
      }
    };

    return (
      <View style={styles.renderItemView}>
        <TouchableOpacity onPress={checkBoxOnpress}>
          {item.checkStatus ? (
            <Image source={asset.checkSquare} style={styles.square} />
          ) : (
            <Image source={asset.square} style={styles.square} />
          )}
        </TouchableOpacity>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.mainView}>
      <Text style={styles.headText}>{'Checkbox Options'}</Text>

      <FlatList
        data={checkboxData.checkbox}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

const ItemSeparator = () => {
  return <View style={styles.itemSeparatorView}></View>;
};

export {ItemSeparator};
export default CheckBoxComponent;
