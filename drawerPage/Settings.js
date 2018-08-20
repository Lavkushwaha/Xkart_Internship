
import React,{ Component} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
    } from "react-native";

import {logOut} from '../auth/Auth';
class Settings extends Component{
    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{height:50,width:100,backgroundColor:'#000',borderRadius:80,justifyContent:'center'}}
                onPress={() =>{logOut()}}
                >
                    <Text style={{fontSize:24,color:'#fff' ,alignSelf:'center'}}>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Settings;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});