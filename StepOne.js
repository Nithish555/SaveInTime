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
import { ViewPager } from 'rn-viewpager';
import { Header, Icon,ButtonGroup } from 'react-native-elements';
import StepIndicator from 'react-native-step-indicator';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

type Props = {};
export default class StepOne extends Component<Props> {
    constructor() {

        super();
        this.state = {
            currentcolor: "red",
            currentcolor1: "red"
        }
    }
    state = {
        index:0,
        index1:0
      }
      updateIndex = (index) => {
        this.props.getState()
        this.setState({index})
        if(index==1){
            this.setState({currentcolor:"orange"});
        }
        else if(index==2) {
            this.setState({currentcolor:"red"});
        }
        else{
            this.setState({currentcolor:"green"});
        }
      }
      updateIndex1 = (index1) => {
        this.setState({index1})
        if(index1==2){
            this.setState({currentcolor1:"orange"});
        }
        else if(index1==1) {
            this.setState({currentcolor1:"yellow"});
        }
        else if(index1==3) {
            this.setState({currentcolor1:"red"});
        }
        else{
            this.setState({currentcolor1:"green"});
        }
      }
    nextPreprocess = () => {
        this.props.saveState(0,{key:this.state.index})
        this.props.nextFn()
      }
      updateColor = (index) => {
          if(this.state.index==1){
              return "orange"
          }
          else{
              return "red"
          }
      }
  render() {
    return (
      
      <View style={styles.container}>
        <Text style={styles.baseText}>Welcome, Dr.Nick Tesla</Text>
        <Text style={styles.baseText2}>What are you looking to report?</Text>
        <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={this.state.index}
        buttons={['HeartAttack', 'Stroke','Others']}
        selectedButtonStyle={{backgroundColor:"#ED116F"}}
        selectedTextStyle={{color:"#ffffff"}}
    containerStyle={{height: 50,borderRadius:10}} />
        <Text style={styles.baseText2}>What is the priority?</Text>
        <ButtonGroup
        onPress={this.updateIndex1}
        selectedIndex={this.state.index1}
        buttons={['Low', 'Normal','High','Critical']}
        selectedButtonStyle={{backgroundColor:this.state.currentcolor1}}
        selectedTextStyle={{color:"#ffffff"}}
        containerStyle={{height: 50}} />
        <View style={{alignItems:'flex-end',marginRight:20}}>
        <TouchableOpacity onPress={ this.nextPreprocess } >
        
        <View style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
            </View>
        </TouchableOpacity>
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
   // fontWeight:'900',
    padding:13,
    color:'#000000',
  },
  baseText1:{
    fontSize:18,
    paddingLeft:50,
    color:'#000000',
  },
  baseText2:{
    fontSize:20,
    //fontWeight:'bold',
    paddingLeft:20,
    paddingRight:20,
    paddingTop:30,
    padding:20,
    color:'#000000',
  },
  button: {
    marginTop:50,
    width: 80,
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
  button5:{
    backgroundColor:"#ED116F",
  }
});
