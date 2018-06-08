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
  ScrollView

  //Header,
} from 'react-native';
import MultiStep from 'react-native-multistep-wizard';
import { ViewPager } from 'rn-viewpager';
import FlipToggle from 'react-native-flip-toggle-button'
import StepIndicator from 'react-native-step-indicator';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Dropdown } from 'react-native-material-dropdown';
import ToggleSwitch from 'toggle-switch-react-native';



var ImagePicker = require('react-native-image-picker');

var options = {
  title: 'choose',
//  customButtons: [
  //  {name: 'fb', title: 'Choose Photo from Facebook'},
  //],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  }
};
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

      <ScrollView contentContainerStyle={styles.container}>
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
        labelColor={'#000000'}
        fontSize={18}
        labelStyle={fontWeight='bold'}
         />
         </View>
            </View>
    <View style={styles.top2}>
<ToggleSwitch
    isOn={false}
    onColor='green'
    offColor='red'
    label='Pregnant'
    labelStyle={{color:'#000000',fontSize:17,paddingLeft:10,paddingRight:230}}
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
    labelStyle={{color: '#000000',fontSize:17,paddingLeft:10,paddingRight:210}}
    size='medium'
    onToggle={ this.ShowHideTextComponentView }
/>
</View>
{this.state.status ?<View style ={styles.top3}>
   <TouchableOpacity onPress ={this.show.bind(this)}>
            <View style={styles.button2}>
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
    labelStyle={{color: '#000000',fontSize:17,paddingLeft:10,paddingRight:160}}
    size='medium'
    onToggle={ (isOn) => console.log('changed to : ', isOn) }
/>
  </View>
  <View style={{flexDirection:'row',paddingTop:16}}>
  <View style={{paddingLeft:10}}>
        <TouchableOpacity onPress={ this.previousPreprocess } >
        <View style={styles.button1}>
            <Text style={styles.buttonText}>Prev</Text>
          </View>
        </TouchableOpacity>
        </View>
  <View style={{alignItems:'flex-end',paddingLeft:145,marginRight:20}}>
        <TouchableOpacity onPress={ this.nextPreprocess } >
        <View style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
</ScrollView>
    );
  }
  show(){
      ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        //let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });

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
    //paddingLeft:30,
    backgroundColor: '#ffffff',
    //borderRadius: 20,
    fontSize:17,
    marginLeft:15,
    marginRight:15,
    width:250,
    color:'#000000',
   // fontWeight:'bold'
},
textInput1: {
  //alignSelf: 'stretch',
  //alignItems:'center',
  //justifyContent:'center',
  //paddingHorizontal:30 ,
  //marginTop:10,
  //marginBottom: 4,
  //paddingLeft:30,
  backgroundColor: '#ffffff',
  //borderRadius: 20,
  fontSize:17,
  marginLeft:15,
  marginRight:15,
  width:250,
  color:'#000000',
 // fontWeight:'bold'
},

button: {
  marginTop:10,
  marginBottom: 10,
  width: 80,
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
button2: {
  marginTop:10,
  marginBottom: 10,
  width: 140,
  alignItems: 'center',
  backgroundColor: '#ED116F',
  marginLeft:50,
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
  alignItems:'flex-start',
   marginTop:25,
   alignSelf:'flex-start',
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
