
import React,{ Component} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView
    } from "react-native";

    const Screen_Height = Dimensions.get('window').height;
    const Screen_Width = Dimensions.get('window').width;
import Trend from '../component/Trend';
import { Icon } from 'native-base';
class Search extends Component{
    render(){
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
               <View style={{height:Screen_Height/8,backgroundColor:"#1da1f2",justifyContent:'center',flexDirection:'row'}}>
                
                   <TouchableOpacity style={{alignSelf:'center',justifyContent:'center',height:Screen_Width/8,width:Screen_Width/2,borderRadius:80,backgroundColor:'#fff'}}>

                      <Text style={{alignSelf:'center',fontSize:18,color:'#000'}}>| search</Text>  
                    </TouchableOpacity>
                
                </View>  

                <ScrollView style={{flex:1,margin:10}}
                showsVerticalScrollIndicator={false}
                >
                    <Text style={{fontWeight:"900",fontSize:24}}> Trends</Text>
                   
                    <Trend rank="1" title="samsung"/>
                    <Trend rank="2" title="#Oppo phones are not good"/>
                    <Trend rank="3" title="React Native "/>
                    <Trend rank="4" title="Nokias"/>
                    <Trend rank="1" title="samsung"/>
                    <Trend rank="2" title="#Oppo phones are not good"/>
                    <Trend rank="3" title="React Native "/>
                    <Trend rank="4" title="Nokias"/>
                    <Trend rank="1" title="samsung"/>
                    <Trend rank="2" title="#Oppo phones are not good"/>
                    <Trend rank="3" title="React Native "/>
                    <Trend rank="4" title="Nokias"/>
                </ScrollView>
               
            </View>
        );
    }
}
export default Search;
