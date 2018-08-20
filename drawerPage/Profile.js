
import React,{ Component} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
    } from "react-native";
import {Icon} from 'native-base';
class Profile extends Component{
    static navigationOptions ={
        drawerIcon:({tintColor}) =>(
            <Icon name="ios-egg" style={{fontSize:24,color:tintColor}}/>
        )
    }
    render(){
        return (
            <View style={styles.container}>
                <Text>Profile</Text>
                <TouchableOpacity onPress={() =>{alert('logout')}}>
                    <Text>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Profile;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});