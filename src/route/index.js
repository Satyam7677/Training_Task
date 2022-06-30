import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {MainStack} from './stack';

const Routes = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
export default Routes;
