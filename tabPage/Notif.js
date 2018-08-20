
import React,{ Component} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Dimensions
    } from "react-native";
    const Screen_Height = Dimensions.get('window').height;
    const Screen_Width = Dimensions.get('window').width;
class Notif extends Component{
    render(){
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
               <View style={{height:Screen_Height/5,backgroundColor:"#1da1f2",justifyContent:'center'}}>
                   <Text style={{alignSelf:'center',fontSize:24,color:'#fff',fontWeight:'900',marginHorizontal:50}}>All your notifications here</Text>
                </View>  
            </View>
        );
    }
}
export default Notif;

