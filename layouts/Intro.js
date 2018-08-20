import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
    } from "react-native";
import {createStackNavigator} from 'react-navigation';
import Logo from '../pages/Logo';
import Getstarted from '../pages/Getstarted';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import SignupConfirm from "../pages/SignupConfirm";


const IntroStack = createStackNavigator({
    
    
    Getstarted:{screen:Getstarted},
    SignupConfirm:{screen:SignupConfirm},
    Login:{screen:Login},
    Signup:{screen:Signup}
    
    

},
{
  headerMode: 'none',
  navigationOptions: {
  headerVisible: false,
  }
});

class Intro extends Component{
    render(){
        return (
           <IntroStack />
        );
    }
}
export default Intro;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});