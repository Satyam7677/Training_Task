import React, {createContext} from 'react';
import Routes from './src/route';
import {STORE} from './src/reducer';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './src/reducer/store';
// import MapScreen from './src/modules/map/screens';
import CheckboxScreen from './src/modules/checkbox/screens';
import MapScreen from './src/modules/map/screens';

export const MyContext = createContext();

// const state = {
//   name: 'Satyam',
//   age: 22,
// };

const App = () => {
  return (
    <Provider store={STORE}>
      <Routes />
      {/* <MapScreen /> */}
      {/* <CheckboxScreen /> */}
    </Provider>
  );
};
export default App;
