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
type Props = {};
export default class StepThree extends Component<Props> {
  constructor() {
    super();
    this.state = {
        text:" ",
        variable:true
    }
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
  True = () =>{

  }
  
  render() {
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
          <View style={{width:150}}>
          <Dropdown
        label='List'
        data={data}
        disabled={this.state.variable} 
        baseColor={'black'}
        fontSize={20}
         />
         </View>
        </RadioButton>
      </RadioGroup>
      </View>
      <View style={{flexDirection:'row'}}>
      <View style={{alignItems:'flex-start',marginLeft:20}}>
        <TouchableOpacity onPress={ this.previousPreprocess } >
        <View style={styles.button}>
            <Text style={styles.buttonText}>Prev</Text>
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
    fontWeight:'bold',
    padding:13,
    textAlign:'center'
  },
  baseText1:{
    fontSize:20,
    fontWeight:'bold',
    padding:20,
  },
  baseText2:{
    fontSize:20,
  },
  button: {
    marginTop:50,
    width: 125,
    backgroundColor: '#ED116F',
    marginRight:25,
    borderRadius:5,
    alignSelf: 'auto',
    alignItems:'center',

  },
  buttonText: {
    padding: 20,
    color: '#ffffff',
    fontSize:18
  },
});
