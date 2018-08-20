
import React,{ Component} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
    } from "react-native";
import { Container, Header,Left,Right,Body,Button ,Icon, Content} from "native-base";
import Post from '../component/Post';


const Screen_Height = Dimensions.get('window').height;
const Screen_Width = Dimensions.get('window').width;

class Home extends Component{
    
    
      
    render(){
       
        return (
            <Container style={{flex:1,backgroundColor:'#fff'}}>
                <Content>

                    <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                </Content>


                
            </Container>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});