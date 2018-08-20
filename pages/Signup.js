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

const Screen_Height = Dimensions.get('window').height;
const Screen_Width = Dimensions.get('window').width;

class Signup extends Component{

    state={
        email:'',
        password:''
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
                <View style={{flex:1,margin:40}}>
                    

                    <View style={{flex:4,backgroundColor:'#fff',}}>
                        <Text style={{fontSize:34,color:'#000',fontWeight:'700'}}>
                            Create your account
                        </Text>

                        <View style={{marginTop:Screen_Height/5}}>
                        <Item>
                        <Input placeholder="Email"  style={{fontSize:19}}
                        onChangeText={ (text)=>{this.setState({email:text})}}
                        />
                        </Item>

                        <Item style={{marginTop:25}}>
                        <Input placeholder="Password" secureTextEntry={true}  style={{fontSize:19}}
                        onChangeText={(password) =>{this.setState({password:password})}}
                        />
                        </Item>

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
                        <TouchableOpacity style={{margin:10,width:60,height:35,borderRadius:50,backgroundColor:'#0084b4',justifyContent:'center'}}
                        onPress={() =>{this.props.navigation.navigate('SignupConfirm',{username:this.state.email,password:this.state.password})}}
                        >
                            <Text style={{alignSelf:'center',fontSize:16,color:'#fff'}}>Next</Text>
                        </TouchableOpacity>
                    </Right>
                </View>

            </Container>
        );
    }
}
export default Signup;
