
import React,{ Component} from 'react';
import { 
    View,
    Text,
    StyleSheet
    } from "react-native";

class Help extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Help</Text>
            </View>
        );
    }
}
export default Help;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});