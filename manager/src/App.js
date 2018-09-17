import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCSXDFvJU6sLuSAExCUYlYgmyS1VCrAQS0',
      authDomain: 'employeemanager-2ac73.firebaseapp.com',
      databaseURL: 'https://employeemanager-2ac73.firebaseio.com',
      projectId: 'employeemanager-2ac73',
      storageBucket: 'employeemanager-2ac73.appspot.com',
      messagingSenderId: '1042504253628'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
