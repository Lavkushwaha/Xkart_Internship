import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    
    
    } from "react-native";
import {Icon, Header, Left, Body,Right,Title,Button,Input, Item, Container,Content,
Label,
} from 'native-base';

import {loginUser} from '../auth/Auth';
const Screen_Height = Dimensions.get('window').height;
const Screen_Width = Dimensions.get('window').width;

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    render(){
        return (
            <Container style={{flex:1,backgroundColor:'#fff'}}>
                <Header style={{backgroundColor:'#fff'}}>      
                    <Left>
                    <Button transparent
                    onPress={() =>{this.props.navigation.navigate('Getstarted')}}
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
                <View style={{flex:1,margin:20}}>
                    

                    <View style={{flex:4,backgroundColor:'#fff',}}>
                        <Text style={{fontSize:26,color:'#000',fontWeight:'700',}}>
                            Log in to twitter
                        </Text>

                        <View style={{marginTop:30}}>
                        
                                <Item stackedLabel>
                                <Label>Phone number,email or username</Label>
                                <Input 
                                onChangeText={ (text)=>{this.setState({email:text})}}
                                />
                                </Item>
                                <Item stackedLabel last>
                                <Label>Password</Label>
                                <Input secureTextEntry={true} 
                                onChangeText={ (password)=>{this.setState({password:password})}}
                                />
                                </Item>

                                <TouchableOpacity
                               
                                >
                                <Text style={{fontSize:15,alignSelf:'center',paddingTop:30}}>Forgot password ?</Text>
                                </TouchableOpacity>
                        </View>
                        
                      

                    </View>
                    <View style={{flex:1,backgroundColor:'#fff',}}>
                    </View>
                </View>
                </Content>

                <View style={{height:Screen_Height/13,borderWidth:0.4,flexDirection:'row'}}>
                    <Left/>
                    <Body/>
                    <Right >
                        <TouchableOpacity style={{margin:10,width:70,height:35,borderRadius:50,backgroundColor:'#0084b4',justifyContent:'center'}}
                         onPress={() =>{loginUser(this.state.email,this.state.password)}}
                        >
                            <Text style={{alignSelf:'center',fontSize:16,color:'#fff'}}>Login</Text>
                        </TouchableOpacity>
                    </Right>
                </View>

            </Container>
        );
    }
}
export default Login;
