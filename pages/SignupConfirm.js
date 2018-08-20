
import React,{ Component} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    
    
    } from "react-native";
import {Icon, Header, Left, Body,Right,Title,Button,Input, Item, Container,Content} from 'native-base';

import {signupUser} from '../auth/Auth';

const Screen_Height = Dimensions.get('window').height;
const Screen_Width = Dimensions.get('window').width;

class SignupConfirm extends Component{
    render(){
        return (
            <Container style={{flex:1,backgroundColor:'#fff'}}>
                <Header style={{backgroundColor:'#fff'}}>      
                    <Left>
                    <Button transparent
                    onPress={() =>{this.props.navigation.navigate('Signup')}}
                    >
                    <Icon name='md-arrow-back' style={{color:'#0084b4'}}/>
                    </Button>
                    </Left>

                    <Body style={{marginLeft:Screen_Width/3}}>
                    <Image source={require('../images/icon.jpg')} style={{height:35,width:35}}/>
                    </Body>

                    <Right />
                </Header>


                <Content>
                <View style={{flex:1,margin:40}}>
                    

                    <View style={{flex:4,backgroundColor:'#fff',}}>
                        <Text style={{fontSize:34,color:'#000',fontWeight:'700'}}>
                            Create your account
                        </Text>

                        <View style={{marginTop:Screen_Height/7}}>
                        <Item>
                        <Text underlineColorAndroid={'black'} style={{fontSize:20,color:'#000'}}>{this.props.navigation.state.params.username}</Text>
                        </Item>

                        <Item style={{marginTop:25}}>
                        <Text underlineColorAndroid={'black'} style={{fontSize:20,color:'#000'}}>password: {this.props.navigation.state.params.password}</Text>
                        </Item>

                        </View>
                        
                        <View style={{flex:1,backgroundColor:'#fff' ,marginTop:50,}}>
                        <Text style={{fontSize:18}}>By signing up you, agree to the terms and service</Text>
                       
                       <TouchableOpacity style={{flex:1,height:50,marginTop:50,borderRadius:50,backgroundColor:'#0084b4',justifyContent:'center'}}
                       onPress={() =>{signupUser(this.props.navigation.state.params.username,this.props.navigation.state.params.password)}}
                       >
                            <Text style={{fontSize:22,fontWeight:'700',alignSelf:'center',color:'#fff'}}>Sign up</Text>
                       </TouchableOpacity>
                        </View>
                        

                    </View>
                    <View style={{flex:1,backgroundColor:'#fff',}}>

                    

                    </View>
                </View>
                </Content>

                

            </Container>
        );
    }
}
export default SignupConfirm;
