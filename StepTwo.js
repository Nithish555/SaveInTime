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
import FlipToggle from 'react-native-flip-toggle-button'
import StepIndicator from 'react-native-step-indicator';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Dropdown } from 'react-native-material-dropdown';
import ToggleSwitch from 'toggle-switch-react-native';

type Props = {};
export default class StepTwo extends Component<Props> {
    constructor() {
        super();
        this.state = {
                isActive:true
        }
    }
    nextPreprocess = () => {
        this.props.saveState(0,{key:'value'})
        this.props.nextFn()
      }
      previousPreprocess = () =>{
        this.props.getState()
        this.props.prevFn()
      }
      ShowHideTextComponentView = () =>{
 
        if(this.state.status == true)
        {
          this.setState({status: false})
        }
        else
        {
          this.setState({status: true})
        }
      }
  render() {
    let data = [{
        value: 'Dr.Nick Tesla',
      }, {
        value: 'Dr.Kumar',
      }, {
        value: 'Dr.Vani',
      }];
      let data1 = [{
        value: 'Male',
      }, {
        value: 'Female',
      },];
    return (
      
      <View style={styles.container}>
      <View style={styles.top}>
                     <TextInput
                    style={styles.textInput} placeholder='Name'
                    onChangeText={(username) => this.setState({username})}
                    underlineColorAndroid='#000000'
                    placeholderTextColor='#000000'
                   />
                   </View>
          <View style={styles.top1}>
          <TextInput
          style={styles.textInput} placeholder='Age'
              onChangeText={(username) => this.setState({username})}
                    underlineColorAndroid='#000000'
                    placeholderTextColor='#000000'
                   />
                   <View style={{width:100,paddingLeft:10}}>
       <Dropdown
        label='Sex'
        data={data1} 
        baseColor={'black'}
        fontSize={18}
         />
         </View>
            </View>
    <View style={styles.top2}>
<ToggleSwitch
    isOn={false}
    onColor='green'
    offColor='red'
    label='Pregnant'
    labelStyle={{color: 'black',fontWeight: '900',fontSize:17,paddingHorizontal:50}}
    size='medium'
    onToggle={ (isOn) => console.log('changed to : ', isOn) }
/>
</View>
<View style={styles.top}>
<TextInput
                    style={styles.textInput1} placeholder='BP'
                    onChangeText={(username) => this.setState({username})}
                    underlineColorAndroid='#000000'
                    placeholderTextColor='#000000'
                   />

</View>
<View style={styles.top2}>
<ToggleSwitch
    isOn={false}
    onColor='green'
    offColor='red'
    label='ECG Taken'
    labelStyle={{color: 'black',fontWeight: '900',fontSize:17,paddingHorizontal:50}}
    size='medium'
    onToggle={ this.ShowHideTextComponentView }
/>
</View>
{this.state.status ?<View style ={styles.top3}>
   <TouchableOpacity>
            <View style={styles.button}>
            <Text style={styles.buttonText}>upload ECG</Text>
            </View>
            </TouchableOpacity>
    </View>:null}
    <View style={styles.top2}>
<ToggleSwitch
    isOn={false}
    onColor='green'
    offColor='red'
    label='Chest Discomfort'
    labelStyle={{color: 'black',fontWeight: '900',fontSize:17,paddingHorizontal:50}}
    size='medium'
    onToggle={ (isOn) => console.log('changed to : ', isOn) }
/>
  </View>
  <View>
        <TouchableOpacity onPress={ this.previousPreprocess } >
        <View style={styles.button1}>
            <Text style={styles.buttonText}>Prev</Text>
          </View>
        </TouchableOpacity>
        </View>
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
    //justifyContent: 'center',
    //alignItems: 'center',
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
  textInput: {
    //alignSelf: 'stretch',
    //alignItems:'center',
    //justifyContent:'center',
    //paddingHorizontal:30 ,
    marginTop:10,
    //marginBottom: 4,
    paddingLeft:30, 
    backgroundColor: '#ffffff',
    //borderRadius: 20,
    fontSize:17,
    marginLeft:15,
    marginRight:15,
    width:250
},
textInput1: {
  //alignSelf: 'stretch',
  //alignItems:'center',
  //justifyContent:'center',
  //paddingHorizontal:30 ,
  //marginTop:10,
  //marginBottom: 4,
  paddingLeft:30, 
  backgroundColor: '#ffffff',
  //borderRadius: 20,
  fontSize:17,
  marginLeft:15,
  marginRight:15,
  width:250
},
button: {
  marginTop:10,
  marginBottom: 10,
  width: 150,
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
  width: 150,
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
  fontSize:17
},
top:{
  height:Dimensions.get('window').height/100*8,
  //position:'relative',
  //flexDirection:'row',
   alignSelf:'stretch',
 //justifyContent:'space-around',

},
top1:{
  height:Dimensions.get('window').height/100*8,
  //position:'relative',
  
   flexDirection:'row',
   alignSelf:'stretch',
 //justifyContent:'space-around',

},
top2:{
  height:Dimensions.get('window').height/100*5,
  //position:'relative',
  
   marginTop:25,
   alignSelf:'stretch',
 //justifyContent:'space-around',

},
top3:{
  height:Dimensions.get('window').height/100*13,
  //position:'relative',
   alignSelf:'stretch',
 //justifyContent:'space-around',

},
top4:{
  height:Dimensions.get('window').height/100*13,
  //position:'relative',
   flexDirection:'row',
 //justifyContent:'space-around',

},
});
