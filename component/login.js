import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ToolbarAndroid,
  TouchableOpacity,
  Picker,
  Navigator,
  Button,
  Image
  //Header,
} from 'react-native';
//import tabnav from './disease/tabnav'

const util=require('util');


export default class login extends Component{

  static navigationOption={
    title:'login',
  };

  state={
    username: '',
    password: '',
  }
  updateFormField = fieldName => text => {
    this.setState({[fieldName]:text})
  }
  submitForm = () => {
    const {username , password} = this.state
    if(this.state.username == "Nithish"){
       this.props.navigation.navigate("heart",{})
}
else if(this.state.username == "Nehal"){
  this.props.navigation.navigate("specialist",{})
}
  }

render(){
  var {navigate}=this.props.navigation;

return (



  <View  style ={ styles.container}>


  <Image style={{width:150,height:145}}
       source={require('./img.png')}/>
      <Text style={styles.logoText}>Welcome To Save In Time</Text>

   <TextInput
   style={styles.textInput} placeholder='Username'
  // onChangeText={(username) => this.setState({username})}
  onChangeText={this.updateFormField('username')}
  //onChangeText={(text) => this.setState({input: text})}
   underlineColorAndroid='#000000'
   placeholderTextColor='#000000'
   />
   <TextInput
   style={styles.textInput} placeholder='Password'
  // onChangeText={(password) => this.setState({password})}
  onChangeText={this.updateFormField('password')}
   placeholderTextColor='#000000'
   //underlineColorAndroid='transparent'
   />
  <TouchableOpacity onPress={ this.submitForm } >
  <View style={styles.button}>
  <Text style={styles.buttonText}>LOGIN</Text>
  </View>
  </TouchableOpacity>

</View>
      );
    }
  }

//  ()=>navigate("heart",{})



  const styles = StyleSheet.create({

    button: {
      marginBottom: 30,
      width: 150,
      alignItems: 'center',
      backgroundColor: '#ED116F',
    },
    buttonText: {
      padding: 20,
      color: 'white',
      fontSize:17
    },
    toolBar:{
      height:80,
      backgroundColor:'#ff0066',
    //  position: 'absolute',
      //top: 0,
      left: 0,
      //width: Dimensions.get('window').width


    },
    container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: 'white',
       paddingLeft:40,
       paddingRight: 40,
   },
   header: {
       fontSize: 24,
       marginBottom: 30,
       color: '#fff',
       fontWeight: 'bold',
   },
   textInput: {
       alignSelf: 'stretch',
       alignItems:'center',
       justifyContent:'center',
       paddingHorizontal:26 ,
       marginBottom: 30,
       backgroundColor: '#ffffff',
       borderRadius: 20,
       fontSize:17

   },
   btn: {
       alignSelf: 'stretch',
       backgroundColor: '#dcd1e0',
       padding: 20,
       alignItems: 'center',
   },
   logoText: {
     marginVertical: 20,
     marginBottom:20,
     fontSize:18,
     color:'#000000',
     fontWeight:'bold'
   }
  });
