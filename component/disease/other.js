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
  Dimensions,
  Image
  //Header,
} from 'react-native';
import { StackNavigator, TabNavigator,createDrawerNavigator } from 'react-navigation';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Dropdown } from 'react-native-material-dropdown';
import { Header, Icon } from 'react-native-elements';
import {Container,Content,Left} from 'native-base';
const { width, height } = Dimensions.get('window');

const util=require('util');

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

 export  default class stroke extends Component{
  constructor(){
    super();
    this.state={
     // actionText :'welcome to save'
    }
  }
    onSettingsClick(){
      console.log('settings clicked');
    }
  onActionSelected(){

  }

render(){
  var {navigate}=this.props.navigation;
  let data = [{
    value: 'Urgent',
  }, {
    value: 'Normal',
  },
    ];

return (

  <View style={styles.screen}>
  <View>
          <Header
            outerContainerStyles={styles.topMenu}
            centerComponent={{
              text: 'Save In Time',
              style: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
            }}
            rightComponent={


                              <Image style={{width:30,height:30}}
                                   source={require('try_camera/component/doctor.png')}/>
            }
            leftComponent={
              <Icon
                name="menu"
                color='#fff'
                onPress={() => this.props.navigation.openDrawer()}
                underlayColor={'#fff'}
              />
            }
          />
        </View>
        <View style={styles.top}>
     <Text style={styles.baseText}> Question 1</Text>
     <TextInput
    style={styles.textInput} placeholder='Your Entry'
    onChangeText={(username) => this.setState({username})}
    underlineColorAndroid='#000000'
    placeholderTextColor='#000000'
   />
   </View>
   <View style={styles.top}>
     <Text style={styles.baseText1}> Question 2</Text>
     <TextInput
    style={styles.textInput} placeholder='Lorem ipsum sit amet,consectetur.'
    onChangeText={(username) => this.setState({username})}
    underlineColorAndroid='#000000'
    placeholderTextColor='#000000'
   />
    </View>
    <View style={styles.top2}>
    <View style={styles.button3}>
            <TouchableOpacity onPress ={this.show.bind(this)}>
            <View style={styles.button4}>
            <Text style={styles.buttonText}>upload ECG</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress ={this.show.bind(this)}>
            <View style={styles.button4}>
            <Text style={styles.buttonText}>upload SCAN</Text>
            </View>
            </TouchableOpacity>
            </View>
    </View>
    <View style={styles.top4}>
   <Text style={styles.baseText1}> Question 3</Text>
   <TextInput
    style={styles.textInput} placeholder='Your Entry'
    onChangeText={(username) => this.setState({username})}
    underlineColorAndroid='#000000'
    placeholderTextColor='#000000'
   />
   </View>
   <View style={styles.top3}>
<View style={{ width:200 ,marginLeft:30}}>
<Dropdown
        label='Select Priority'
        data={data}
       // dropdownOffset={{data: 0}}
       fontSize={17}
       labelFontSize= {18}

      />
  </View>
  </View>
  <View style={styles.top5}>
<TouchableOpacity onPress={()=>navigate("",{})}>
    <View style={styles.button2}>
    <Text style={styles.buttonText}>request review</Text>
    </View>
    </TouchableOpacity>
    </View>
    </View>

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

  const toolbarActions =[

    // {title: 'Settings', icon: require('./menu.png'), show:'always'},
    {title:'action1'},
    {title:'action2'},
    {title:'action3'},
    {title:'action4'},
    //{title: 'Settings', icon: require('./component/menu.png'), show: 'always'}
  ]

  const styles = StyleSheet.create({
    screen: {
      backgroundColor: '#ffffff',
      flex: 1,
      alignContent:'stretch',
      alignSelf:'auto',
      alignItems:'stretch'

    },

    toolBar:{
      height:80,
      backgroundColor:'#ED116F',
    //  position: 'absolute',
      //top: 0,
      left: 0,
      //width: Dimensions.get('window').width


    },
    mainText:{
        padding : 20,
    },
    button: {
      marginTop:20,
      marginBottom: 20,
      width: 150,
      alignItems: 'center',
      backgroundColor: '#ED116F',
      marginLeft:50,
      borderRadius:5,
      alignContent:'stretch',
      alignSelf:'auto',
    },
    buttonText: {
      padding: 20,
      color: '#ffffff',
      fontSize:17
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
      marginTop:20,
      marginLeft:90,
      marginBottom: 20,
      width: 200,
      justifyContent:'center',
      alignItems: 'center',
      borderRadius:5,
      backgroundColor: '#ED116F',
      alignContent:'stretch',
      alignSelf:'auto',
    },
    button3: {
      flexDirection:'row',
      justifyContent:'space-around',
    },
    button4: {
      marginTop:20,
      marginBottom: 20,
      width: 150,
      alignItems: 'center',
      backgroundColor: '#ED116F',
      borderRadius:5
    },
    icon: {
      width: 26,
      height: 26,
    },
    baseText:{
      fontSize:18,
      marginTop:25,

    },
    baseText1:{
      fontSize:18,
      marginTop:15,

    },

    textInput: {
      alignSelf: 'stretch',
      alignItems:'center',
      justifyContent:'center',
      paddingHorizontal:30 ,
      //marginTop:5,
      marginBottom: 4,
      backgroundColor: '#ffffff',
      borderRadius: 20,
      fontSize:17,
      marginLeft:15,
      marginRight:15

  },
  topMenu: {
    height: 53,
    backgroundColor: '#ED116F',
  },
  top:
  {
     height:Dimensions.get('window').height/100*14,
     //position:'relative',
    //alignSelf:'stretch',
    alignItems:'stretch',
  },
  top2:{
    height:Dimensions.get('window').height/100*15,
    alignSelf:'auto',
    alignItems:'stretch',
    justifyContent:'center'
  },
  top3:{
    height:Dimensions.get('window').height/100*12,
    alignSelf:'auto',
    alignItems:'stretch',
    justifyContent:'center',
    position:'relative',
  },
  top4:{
    height:Dimensions.get('window').height/100*10,
    alignSelf:'auto',
    alignItems:'stretch',
    justifyContent:'center',
  },
  top5:{
    height:Dimensions.get('window').height/100*15,
    alignSelf:'auto',
    alignItems:'stretch',
    justifyContent:'center',
  },
  });
