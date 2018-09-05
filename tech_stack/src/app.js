import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View } from 'react-native';

import reducers from './reducers';
import { Header } from './components/common';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="TechStack" />
      </View>
    </Provider>
  );
};

export default App;
