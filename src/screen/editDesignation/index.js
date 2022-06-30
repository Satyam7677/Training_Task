import React, {useState} from 'react';
import {
  View,
  Text,
  Image,

  TouchableOpacity,
  SafeAreaView,
  Modal,
  TouchableWithoutFeedback,

} from 'react-native';

import styles from './styles';
import asset from '../../assets/asset';
import DropDownField from '../../components/dropDownfield';
import SuggestionBubble from '../../components/suggestionBubble';
import {dropArray, suggestionArray} from '../../utils/dataArray';
import {CustomTextInput} from '../../components/customTextInput';
import ProfileComponent from '../../components/profileComponent';
import UnderComponent from '../../components/underComponent';
import DropDown from '../../components/dropDown';

const EditDesignation = () => {
  const [dropVisible, setDropVisible] = useState(false);
  const [text, setText] = useState('None');
  const [selectedSuggestion, setSelectedSuggestion] = useState();

  const profileDetails = {
    under: 'Kapil Mishra',
    name: 'Mukesh Pathak',
    address: 'Manikapur, Kanpur, Uttar Pradesh, India',
  };

  /**
   *
   * @param {*} dropArrayItem
   * @returns each item's jsx
   */

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.mainView}>
        <View style={styles.headerView}>
          <TouchableOpacity style={styles.arrowContainer}>
            <Image source={asset.leftSmallArrow} style={styles.arrowImage} />
          </TouchableOpacity>

          <Text style={styles.headText}>{'Edit Designation'}</Text>
        </View>

        <UnderComponent under={profileDetails.under} />

        <ProfileComponent
          name={profileDetails.name}
          address={profileDetails.address}
        />

        <View style={styles.dropOptionsView}>
          <DropDownField
            txt={text}
            arrow={true}
            setDropVisible={setDropVisible}
            dropVisible={dropVisible}
          />
          <DropDownField txt="National - India" arrow={false} />
        </View>

        {/* ********************** Modal
        
                Contains all the options of Modal
          */}

        
          <Modal
          visible={dropVisible}
          transparent={true}
          onRequestClose={()=>{setDropVisible(!dropVisible)}}
          >
            <TouchableOpacity style={styles.modal}
            onPress={()=>{setDropVisible(!dropVisible)}}>
              <TouchableOpacity activeOpacity={1}>
          <DropDown
            headtxt={'Search designation'}
            dropVisible={dropVisible}
            setDropVisible={setDropVisible}
            setText={setText}
          />
          </TouchableOpacity>
          </TouchableOpacity>
          </Modal>
       

        {/* ****************Suggestions
                          Contains all the suggested title options
                                          ******************* */}

        <View style={styles.suggestionView}>
          <Text style={styles.suggestionHeadText}>
            {'Choose from Suggested Title:'}
          </Text>
          <View style={styles.suggestionBubbleView}>
            {/* *******Suggestion options mapped******* */}

            {suggestionArray.map(suggestion => {
              return (
                <SuggestionBubble
                  txt={suggestion}
                  key={suggestion}
                  selectedSuggestion={selectedSuggestion}
                  setSelectedSuggestion={setSelectedSuggestion}
                />
              );
            })}
          </View>
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>{'Save'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default EditDesignation;
