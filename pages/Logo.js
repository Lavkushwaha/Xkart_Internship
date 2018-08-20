import React,{ Component} from 'react';

import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
    } from "react-native";

class Logo extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Logo</Text>
                <TouchableOpacity><Text>Go to Get Started</Text></TouchableOpacity>
            </View>
        );
    }
}
export default Logo;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});