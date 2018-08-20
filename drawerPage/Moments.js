
import React,{ Component} from 'react';
import { 
    View,
    Text,
    StyleSheet
    } from "react-native";
import {Icon} from 'native-base';

class Moments extends Component{
    static navigationOptions ={
        drawerIcon:({tintColor}) =>(
            <Icon name="flash" style={{fontSize:24,color:tintColor}}/>
        )
    }
    render(){
        return (
            <View style={styles.container}>
                <Text>Moments</Text>
            </View>
        );
    }
}
export default Moments;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});