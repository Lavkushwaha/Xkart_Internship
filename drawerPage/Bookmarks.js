
import React,{ Component} from 'react';
import { 
    View,
    Text,
    StyleSheet
    } from "react-native";
import {Icon} from 'native-base';
class Bookmarks extends Component{

    static navigationOptions ={
        drawerIcon:({tintColor}) =>(
            <Icon name="bookmark" style={{fontSize:24,color:tintColor}}/>
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>Bookmarks</Text>
            </View>
        );
    }
}
export default Bookmarks;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});