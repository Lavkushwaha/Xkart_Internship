
import React,{ Component} from 'react';
import { 
    View,
    Text,
    StyleSheet
    } from "react-native";
import {Icon} from 'native-base';
class Lists extends Component{

    static navigationOptions ={
        drawerIcon:({tintColor}) =>(
            <Icon name="list" style={{fontSize:24,color:tintColor}}/>
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>Lists</Text>
            </View>
        );
    }
}
export default Lists;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});