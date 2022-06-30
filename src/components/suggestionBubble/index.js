import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {suggestionArray} from '../../utils/dataArray';

const Bubble = ({txt, selectedSuggestion, setSelectedSuggestion}) => {
  
    /**
   * Function changeSuggestedClick
   *  Selects the suggested bubble
   */

  const changeSuggestedClick = () => {
    setSelectedSuggestion(txt)
  };

  return (
    <TouchableOpacity
      style={{
        ...styles.bubbleView,
        backgroundColor: txt == selectedSuggestion ? '#1CAEFC' : '#FFF',
      }}
      onPress={changeSuggestedClick}>
      <Text
        style={{
          ...styles.suggestionText,
          color: txt == selectedSuggestion ? '#FFF' : '#1CAEFC',
        }}>
        {txt}
      </Text>
    </TouchableOpacity>
  );
};
export default Bubble;
