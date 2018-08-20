//drawer then stack
//stack inside drawer
import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
    } from "react-native";
import {createBottomTabNavigator } from 'react-navigation';

import { Container, Header,Left,Right,Body,Button ,Icon} from "native-base";

import Home from '../tabPage/Home';
import Search from '../tabPage/Search';
import Notif from '../tabPage/Notif';
import Message from '../tabPage/Message';


 
const MainTab = createBottomTabNavigator({

    Home:{
        screen:Home,
     
        navigationOptions:{
            tabBarLabel:'Profile',
            tabBarIcon: ({tintColor}) => <Icon name="home" size={45} style={{color:tintColor}} />
            
        }
    },
    Search:{
        screen:Search,
        navigationOptions:{
            tabBarLabel:'Profile',
            tabBarIcon: ({tintColor}) => <Icon name="search" size={45} style={{color:tintColor}} />
            
        }
    },
    Notif:{
        screen:Notif,
        navigationOptions:{
            tabBarLabel:'Profile',
            tabBarIcon: ({tintColor}) => <Icon name="ios-notifications" size={45} style={{color:tintColor}} />
            
        }
    },
    Message:{
        screen:Message,
        navigationOptions:{
            tabBarLabel:'Profile',
            tabBarIcon: ({tintColor}) => <Icon name="ios-mail" size={45} style={{color:tintColor}} />
            
        }
    }

},
{
   
    tabBarOptions: {
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#ffffff',
      },
    showIcon: true,
    showLabel: false
  },
    tabBarComponent: MainTab,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    
    
});


class Tabs extends Component{

    constructor(props){
        super(props);
      
    }

    static navigationOptions ={
        drawerIcon:({tintColor}) =>(
            <Icon name="home" style={{fontSize:24,color:tintColor}}/>
        )
    }
    
    render(){
        return (
        <View style={{flex:1}}>
           <Header style={{backgroundColor:'#fff'}}>      
                    <Left>
                    <Button transparent
                    onPress={() =>{this.props.navigation.openDrawer()}}
                    >
                    <Icon name='md-menu' style={{color:'#0084b4'}}/>
                    </Button>
                    </Left>

                    <Body style={{marginLeft:0}}>
                    <Text style={{fontSize:22,color:'#000'}}>Twitter</Text>
                    </Body>

                    <Right />
                </Header>
            <MainTab />
        </View>
            
        );
    }
}
export default Tabs;

