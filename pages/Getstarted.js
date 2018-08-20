import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
    } from "react-native";

const Screen_Height = Dimensions.get('window').height;
const Screen_Width = Dimensions.get('window').width;

class Getstarted extends Component{
    render(){
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>

                <View style={{flex:1,margin:40}}>
                    <View style={{flex:1,backgroundColor:'#fff'}}>
                        <Image source={require('../images/icon.jpg')} style={{height:50,width:50}}/>

                    </View>

                    <View style={{flex:4,backgroundColor:'#fff',justifyContent:'center'}}>
                        <Text style={{fontSize:36,color:'#000',fontWeight:'700'}}>
                            See Whats happening in the world right now.
                        </Text>

                        <TouchableOpacity style={{height:50,backgroundColor:'#0084b4',borderRadius:50,marginVertical:30,justifyContent:'center'}}
                        onPress={() =>{this.props.navigation.navigate('Signup')}}
                        >
                            <Text style={{color:'#fff',fontSize:24,alignSelf:'center',fontWeight:'900'}}>
                                Get started
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{flex:1,backgroundColor:'#fff',justifyContent:'center',flexDirection:'row',alignItems:'flex-start'}}>
                        <Text style={{fontSize:16,color:'#000',}}>
                            Have an account already? 
                        </Text><TouchableOpacity><Text style={{fontSize:16,color:'#000',color:'blue',marginLeft:2}}
                        onPress={() =>{this.props.navigation.navigate('Login')}}
                        >Login</Text></TouchableOpacity>
                    </View>

                </View>
              
            </View>
        );
    }
}
export default Getstarted;
