import React from 'react';
import {ImageBackground} from 'react-native';
import Routes from './src/routes';
import CheckboxScreen from './src/screen/checkboxAndRadio';
import EditDesignation from './src/screen/editDesignation';
// import ImagePickerScreen from "./src/screen/imagePickerScreen";

import MapScreen from './src/screen/mapScreen';
import GetNotifiedScreen from './src/screen/walkthroughScreen';
import asset from './src/assets/asset';

const App = () => {
  return (
    <>
      {/* <EditDesignation/> */}
      {/* <GetNotifiedScreen/> */}
      {/* <CheckboxScreen/> */}
      {/* <MapScreen/> */}
      {/* <ImagePickerScreen/> */}

      <Routes />
    </>
  );
};
export default App;
