import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';

import {HomeToptab} from '../../../../route/topTab/homeTopTab';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.topTabStyles}>
        <Text style={styles.headText}>{'Book your Flight'}</Text>
        <HomeToptab />
      </View>
    </SafeAreaView>
  );
}
