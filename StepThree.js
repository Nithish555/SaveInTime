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
  Image,
  Dimensions,
  
  //Header,
} from 'react-native';
import MultiStep from 'react-native-multistep-wizard';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import { Dropdown } from 'react-native-material-dropdown';
import { StackNavigator, TabNavigator,TabBarBottom,TabView,DrawerNavigator,DrawerItems,SafeAreaView} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
import chat from './component/chat.js';
import review_history from './component/review.js';
import on_going_treatments from './component/request.js';
import preference from './component/preference.js';
import signout from './component/signout.js';
import specialist from './component/disease/specialist.js';

type Props = {};

const util=require('util');

export default class StepThree extends Component<Props> {
  constructor() {
    super();
    this.state = {
        text:" ",
        variable:true
    }
}
nextPreprocess = () => {
  this.props.saveState(0,{key:'value'})
  this.props.nextFn()
}
  previousPreprocess = () =>{
    this.props.prevFn()
  }
  onSelect = (index, value) =>{
    this.setState({
      text: `Selected index: ${index} , value: ${value}`
      
    })
    if(index == 1){
      this.setState({variable:false});
    }
    else{
      this.setState({variable:true});
    }
  }
  submitForm = () => {
    //this.props.navigation.navigate("on_going_treatments",{})
  }
  render() {
   //const {navigate}=this.props.navigation.navigate;
    let data = [{
      value: 'Dr.Nick Tesla',
    }, {
      value: 'Dr.Kumar',
    }, {
      value: 'Dr.Vani',
    }];
    return (
      
      <View style={styles.container}>
        <Text style={styles.baseText}>Thanks</Text>
        <Text style={styles.baseText1}>Whom do you want to consult ?</Text>
        <View style={{paddingLeft:50}}>
        <RadioGroup
        size={24}
        thickness={2}
        color='black'
       // highlightColor='#ccc8b9'
        selectedIndex={0}
        onSelect = {(index, value) => this.onSelect(index, value)}
      >
        <RadioButton value={'item1'} >
          <Text style={styles.baseText2}>Core Team</Text>
        </RadioButton>
 
        <RadioButton value={'item2'}>
          <Text style={styles.baseText2}>Select From List</Text>
        </RadioButton>
      </RadioGroup>
      <View style={{width:300,paddingLeft:16}}>
          <Dropdown
        label='List'
        data={data}
        disabled={this.state.variable} 
        baseColor={'black'}
        fontSize={20}
         />
        </View>
      </View>
 <View style={{flexDirection:'row',paddingTop:16}}>
  <View style={{paddingLeft:10}}>
        <TouchableOpacity onPress={ this.previousPreprocess } >
        <View style={styles.button1}>
            <Text style={styles.buttonText}>Prev</Text>
          </View>
        </TouchableOpacity>
        </View>
  <View style={{alignItems:'flex-end',paddingLeft:80,marginRight:20}}>
        <TouchableOpacity onPress={ this.nextPreprocess } >   
        <View style={styles.button}>
            <Text style={styles.buttonText}>Submit Review</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  baseText:{
    fontSize:20,
   // fontWeight:'bold',
    padding:13,
    textAlign:'center',
    color:'#000000'
  },
  baseText1:{
    fontSize:20,
   // fontWeight:'bold',
    padding:20,
    color:'#000000'
  },
  baseText2:{
    fontSize:20,
    color:'#000000'
  },
  button: {
    marginTop:10,
    marginBottom: 10,
    width: 160,
    alignItems: 'center',
    backgroundColor: '#ED116F',
    marginLeft:50,
    borderRadius:5,
    alignSelf: 'auto',
    alignItems:'center'
  },
  button1: {
    marginTop:10,
    marginBottom: 10,
    width: 80,
    alignItems: 'center',
    backgroundColor: '#ED116F',
    marginLeft:10,
    borderRadius:5,
    alignSelf: 'auto',
    alignItems:'center'
  },
  buttonText: {
    padding: 20,
    color: '#ffffff',
    fontSize:18
  },

});
