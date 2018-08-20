import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    Image,
    Divider
    } from "react-native";
import {createDrawerNavigator,DrawerItems} from 'react-navigation';

import Bookmarks from '../drawerPage/Bookmarks';
import Help from '../drawerPage/Help';
import Lists from '../drawerPage/Lists';

import Profile from '../drawerPage/Profile';
import Moments from '../drawerPage/Moments';
import Settings from '../drawerPage/Settings';
import Tabs from './Tabs';
import { Left, Icon } from "native-base";


const Screen_Height = Dimensions.get('window').height;
const Screen_Width = Dimensions.get('window').width;

const CustomDrawer = (props) =>
    (
    <ScrollView style={{flex:1}}>
    
        <View style={{flex:1,height:Screen_Height/3-50,backgroundColor:'#fff',borderBottomColor:'black',borderBottomWidth:0.6}}>
            <View style={{flex:1,margin:15,backgroundColor:'#fff'}}>
                <View style={{height:70,width:70,borderRadius:35}}>
                <Image  source={require('../images/user.png')} style={{flex:1,width:null,height:null,resizeMode:'cover'}}/>
                </View>
                <Text style={{fontSize:19,fontWeight:'900',}}>
                    lav kushwaha
                </Text>
                <Text style={{fontSize:16,color:'grey'}}>
                    @lavkushwaha
                </Text>

                <View style={{marginTop:10,flex:1,flexDirection:'row'}}>
                    <Text style={{fontSize:18,fontWeight:'900'}}>49 </Text><Text style={{fontSize:18,color:'grey'}}>Following   </Text>
                    <Text style={{fontSize:18,fontWeight:'900'}}>4 </Text><Text style={{fontSize:18,color:'grey'}}>Followers</Text>
                
                </View>
            </View>
        </View>
        
       
       <DrawerItems {...props} />

        <View style={{flex:1,marginTop:60,borderTopWidth:0.8,justifyContent:'center'}}>
        
     
       <View style={{flexDirection:'row',marginTop:10,marginHorizontal:20,justifyContent:'space-between'}}>
            <Icon name="home" />
            <Icon name="home" />
       </View>
    
        
       
        </View>
        
    </ScrollView>
    )

const DrawerNav = createDrawerNavigator({
    Home:{screen:Tabs,
  
    },
    Bookmarks:{screen:Bookmarks},
    Lists:{screen:Lists},
    Profile:{screen:Profile},
    Moments:{screen:Moments},
    Settings_and_privacy:{screen:Settings},
    Help_Centre:{screen:Help},

},{
    contentComponent:CustomDrawer
}
);



class Main extends Component{
    render(){
        return (
           <DrawerNav />
        );
    }
}
export default Main;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});