import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/commons';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCeB85hly053dMypMKcOzPqsoWFHp2qL2I',
      authDomain: 'auth-c2699.firebaseapp.com',
      databaseURL: 'https://auth-c2699.firebaseio.com',
      projectId: 'auth-c2699',
      storageBucket: 'auth-c2699.appspot.com',
      messagingSenderId: '937691789690'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
