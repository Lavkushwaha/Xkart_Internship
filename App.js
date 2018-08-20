
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import Main from './layouts/Main';
import Intro from './layouts/Intro'

import * as firebase from 'firebase';

var config = {
      apiKey: "AIzaSyCr_M6BFYFKOjXkgRyGUZ_b72KZ3cYH_rs",
      authDomain: "twitter-intern.firebaseapp.com",
      databaseURL: "https://twitter-intern.firebaseio.com",
      projectId: "twitter-intern",
      storageBucket: "twitter-intern.appspot.com",
      messagingSenderId: "615760186685"
    };

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export default class App extends Component {
  constructor(props){
    super(props);
    this.state=({
        loading:true,
    });
}

componentDidMount(){
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
        this.setState({
          loading: false,
          user,
        });
      });
}

componentWillUnmount(){
    this.authSubscription();
}


render() {
    // The application is initialising
    if (this.state.loading) return (<Text>loading</Text>);
    // The user is an Object, so they're logged in
    if (this.state.user) return <Main/>;
    // The user is null, so they're logged out
    return <Intro/>;
}

}



