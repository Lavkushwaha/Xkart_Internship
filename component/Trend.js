import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions
    } from "react-native";
    const Screen_Height = Dimensions.get('window').height;
    const Screen_Width = Dimensions.get('window').width;
class Trend extends Component{
    render(){
        return (
            <View style={{height:Screen_Height/11,borderRadius:0.4,flexDirection:'row'}}>
            <View style={{flex:1,backgroundColor:'#fff',justifyContent:'center'}}>
                <Text style={{alignSelf:'center',fontSize:24,fontWeight:'900',color:'black'}}>#{this.props.rank}</Text>
            </View>

            <View style={{flex:6,backgroundColor:'#fff',justifyContent:'center'}}>
            <Text style={{fontSize:18,fontWeight:'200',color:'#1da1f2'}}>{this.props.title}</Text>

            </View>

        </View>
        );
    }
}
export default Trend;

