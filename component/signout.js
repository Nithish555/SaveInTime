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
  //Header,
} from 'react-native';

const util=require('util');


export default class signout extends Component{

  static navigationOption={
    title:'signout',
  };





render(){
  var {navigate}=this.props.navigation;

return (

  <View style={{alignItems:'center', justifyContent:'center',backgroundColor:'#ffffff',flex:1}}>
    <TouchableOpacity onPress={()=>navigate("login",{})}>
    <View style={styles.button}>
    <Text style={styles.buttonText}>Log Out</Text>
    </View>
    </TouchableOpacity>


  </View>

      );
    }
  }

  const styles = StyleSheet.create({
    screen: {
      backgroundColor: '#33cc33',
      flex: 1,
    },

    toolBar:{
      height:80,
      backgroundColor:'#ff0066',
    //  position: 'absolute',
      //top: 0,
      left: 0,
      //width: Dimensions.get('window').width


    },
    mainText:{
        padding : 20,
    },
    button: {
      marginBottom: 30,
      //width: 260,
      alignItems: 'center',
      backgroundColor: '#ff0066'
    },
    buttonText: {
      padding: 20,
      color: '#ffffff'
    },
    align:{
      padding :10,
      backgroundColor:'white',
      flexDirection : 'column',


    },
    textDesign :{
      fontSize :20,
      fontWeight: 'bold',
      color :'blue',
    },
    box:{
      flexDirection:'row',
      justifyContent:'space-around',
    },
    button2: {
      marginBottom: 30,
      //width: 100,
      alignItems: 'center',
      backgroundColor: '#ff0066'
    },
    button3: {
      flexDirection:'row',
      justifyContent:'space-around',
    },
    button4: {
      marginBottom: 30,
      width: 150,
      alignItems: 'center',
      backgroundColor: '#ff0066'
    },
  });
