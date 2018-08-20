import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
    } from "react-native";

import {Icon} from 'native-base';
    const Screen_Height = Dimensions.get('window').height;
const Screen_Width = Dimensions.get('window').width;

class Post extends Component{
    render(){
        return (
            <View style={{height:Screen_Height/2,backgroundColor:'#fff',flexDirection:'row',borderBottomWidth:0.2,borderTopWidth:0.2}}>
            <View style={{flex:1,margin:5}}>
                <View style={{width:Screen_Width/5,height:Screen_Width/5,borderRadius:Screen_Width/10,backgroundColor:'#ddd'}}>
                    <Image source={require('../images/user.png')} style={{flex:1,height:null,width:null,resizeMode:'cover'}}/>
                </View>
            </View>


            <View style={{flex:4,backgroundColor:'#fff',marginHorizontal:10,marginTop:10}}>
            <View style={{flex:3,backgroundColor:'#ddd'}}>
                <View style={{flex:1,backgroundColor:'#fff',flexDirection:'row',}}> 
                    <Text style={{fontWeight:'bold',fontSize:14}}>Shah Rukh Khan </Text>
                    <Text style={{fontWeight:'100',fontSize:14}}>@iamsrk </Text>
                    <Text style={{fontWeight:'100',fontSize:14}}>.22h</Text>
                    
                </View>

                <View style={{flex:4,backgroundColor:'#fff'}}> 
                    <Text style={{fontWeight:'400'}}>
                        A very long story A very long story A very long story A very long story A very long story A very long story A very long story 
                    </Text>
                </View>

            </View>
            
            <View style={{flex:3,backgroundColor:'#fff'}}>
                <View style={{flex:1,margin:10,backgroundColor:'#fff'}}>
                    <Image source={require('../images/post.jpg')} style={{borderRadius:10,flex:1,height:null,width:null,resizeMode:'cover'}}/>
                </View>
            </View>
            
            <View style={{flex:1,backgroundColor:'#fff',margin:10,flexDirection:'row'}}>
                <Icon name="ios-mail-outline"  style={{color:'grey'}}/>
                <Text style={{marginTop:4,marginLeft:2}}> 1,400</Text> 

                 <Icon name="ios-share-outline"  style={{color:'grey',marginLeft:20}}/>
                <Text style={{marginTop:4,marginLeft:2}}> 1,400</Text> 


                 <Icon name="ios-heart-outline"  style={{color:'grey',marginLeft:20}}/>
                <Text style={{marginTop:4,marginLeft:2}}> 1,400</Text> 

                <Icon name="share"  style={{color:'grey',marginLeft:20}}/>
            </View>


            </View>


        </View>
        );
    }
}
export default Post;

