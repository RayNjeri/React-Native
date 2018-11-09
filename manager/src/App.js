import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
