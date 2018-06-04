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
import { StackNavigator, TabNavigator,TabBarBottom,TabView,DrawerNavigator,DrawerItems,SafeAreaView} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import stroke from './stroke'
import others from './other'
//import { Icon } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown';
import { Header, Icon,ButtonGroup } from 'react-native-elements';
import {Container,Content,Left, Body} from 'native-base';
import chat from 'try_camera/component/chat.js';
import review_history from 'try_camera/component/review.js';
import on_going_treatments from 'try_camera/component/request.js';
import preference from 'try_camera/component/preference.js';
import signout from 'try_camera/component/signout.js';
import SwitchSelector from 'react-native-switch-selector';
const util=require('util');

const options1 = [
  { label: 'Low', value: '1' },
  { label: 'Normal', value: '1.5' },
  { label: 'High', value: '2' },
  { label: 'Critical', value: '2.5' },
];


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
const { width, height } = Dimensions.get('window');
 class heart extends Component{

  static navigationOption={
    title:'heart',
  };
  state = {
    index: 0
  }
  updateIndex = (index) => {
    this.setState({index})
  }
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
  select = () =>{

    if(this.state.index==2)
    {
      return "orange"
    }
    else if(this.state.index==3)
    {
      return "red"
    }
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
  <ToolbarAndroid
    //style={styles.toolBar}
    //actions={toolbarActions}
   // title='Save In Time'
    //titleColor='#ffffff'
    //onActionSelected={this.onActionSelected.bind(this)}
    //subtitle={this.state.actionText}
   />
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
    style={styles.textInput} placeholder='Your Entry'
    onChangeText={(username) => this.setState({username})}
    underlineColorAndroid='#000000'
    placeholderTextColor='#000000'
   />
   </View>
   <View style ={styles.top2}>
   <TouchableOpacity onPress ={this.show.bind(this)}>
            <View style={styles.button}>
            <Text style={styles.buttonText}>upload ECG</Text>
            </View>
            </TouchableOpacity>
    </View>
    <View style = {styles.top4}>
   <Text style={styles.baseText1}> Question 3</Text>
   <TextInput
    style={styles.textInput} placeholder='Your Entry'
    onChangeText={(username) => this.setState({username})}
    underlineColorAndroid='#000000'
    placeholderTextColor='#000000'
   />
   </View>
   <View style={styles.top3}>
   <Text style={styles.baseText2}>Select Priority</Text>
   <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={this.state.index}
        buttons={['Low', 'Normal','High','Critical']}
        selectedButtonStyle={styles.button5}
        selectedTextStyle={{color:"#ffffff"}}
        containerStyle={{height: 30}} />
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

  /*const MyApp = TabNavigator({
    HEART: {
      screen: heart,
    },
    STROKE: {
      screen: stroke,
    },
    OTHERS: {
      screen: others,
      navigationOptions : {
        //tabBarLabel: 'MyHome',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({tintColor}) => (
          <Icon  raised
          name='checkbox-blank'
          type='material-community' style={{color:'grey'}} />
        ),
      }
    },
  }, {
      tabBarComponent:TabBarBottom,
      tabBarPosition: 'bottom',
      animationEnabled: true,
      swipeEnabled:true,
       tabBarOptions: {
         activeTintColor: 'red',
         showIcon:true,
        // inactiveTintColor:'grey',=

         style: {
          backgroundColor: 'white',

        },
        labelStyle:{
          fontSize:15,
          fontWeight:'bold',
          //color:"#000000"
        }
       },

    });*/
    const abc = createBottomTabNavigator({
      HEART: heart,
      STROKE: stroke,
      OTHERS: others
    },
  {
    navigationOptions : {
      //tabBarLabel: 'MyHome',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({tintColor}) =>
        <Icon
        name='square'
        type='font-awesome'
	      color={tintColor} />

    },
  tabBarComponent:TabView.TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  //swipeEnabled:true,
     tabBarOptions: {
       activeTintColor: '#ED116F',
       showIcon:true,
       style: {
        backgroundColor: '#ffffff',

      },
      labelStyle:{
        fontSize:15,
        fontWeight:'bold',
        //color:"#000000"
      }
    }
  }
    );

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
      alignSelf: 'auto',
      alignItems:'center'
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
     alignSelf: 'stretch',
     alignItems:'center'
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
    baseText2:{
      fontSize:18,
      marginBottom:8,
      marginTop:8

    },

    textInput: {
      alignSelf: 'stretch',
      alignItems:'center',
      justifyContent:'center',
      paddingHorizontal:30 ,
     // marginTop:5,
      marginBottom: 4,
      backgroundColor: '#ffffff',
      //borderRadius: 20,
      fontSize:17,
      marginLeft:15,
      marginRight:15

  },
  topMenu: {
    height: 53,
    backgroundColor: '#ED116F',
  },
  drawerImage:{
      height:100,
      width:100,
      alignItems:'center',
      justifyContent:'center',
  },
  top:
  {
     height:Dimensions.get('window').height/100*14,
     //position:'relative',
    //alignSelf:'stretch',
    alignItems:'stretch',
  },
  top2:{
    height:Dimensions.get('window').height/100*14,
    alignSelf:'auto',
    alignItems:'stretch',
    justifyContent:'center'
  },
  top3:{
    height:Dimensions.get('window').height/100*11,
    alignSelf:'auto',
    alignItems:'stretch',
    justifyContent:'center',
    position:'relative',
  },
  top4:{
    height:Dimensions.get('window').height/100*11,
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
  button5:{
    backgroundColor:"#ED116F",
  }
  });
  const CustomDrawerContentComponent = (props) => (
    <View>
    <View style ={{height: 150,width:300,paddingLeft:60,backgroundColor:'white'}}>

        <Image
          style={styles.drawerImage}
          source={require('../doctor.png')}
          />
          <Text style={{ fontWeight:'bold'}}>Dr. Nick Tesla</Text>
    </View>
      <DrawerItems {...props} />
     </View>
  )
  const MyApp = DrawerNavigator({
    'Requset a Review' :{screen:abc},
    'On Going Treatments':{screen:on_going_treatments},
    'Review History':{screen:review_history},
     Preference:{screen:preference},
    //Chat:{screen: chat},
     'Log Out':{screen:signout}
   },{
     initialRouteName:'Requset a Review',
     contentComponent: CustomDrawerContentComponent,
     drawerOpenRoute:'DrawerOpen',
     drawerCloseRoute:'DrawerClose',
     drawerToggleRoute:'DrawerToggle',
     drawerWidth:220,
     drawerBackgroundColor: "#404040",
     contentOptions: {
      labelStyle: {
        color: 'white',
      },
    }
   },
   {
   drawerWidth:150,
   drawerBackgroundColor: "#404040",
   contentOptions: {
    labelStyle: {
      color: 'white',
    },

    activeTintColor:'red'
  }
   },
   {
     navigationOptions: ({ navigation }) => ({
       headerLeft : <leftComponent navigate={navigation.navigate} />,
     })
   }
   );
export default MyApp;
