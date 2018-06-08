import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  Dimensions
  //Header,
} from 'react-native';
import { StackNavigator, TabNavigator,TabBarBottom,TabView,DrawerNavigator,DrawerItems,SafeAreaView} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import stroke from './stroke'
import others from './other'
//import { Icon } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown';
import { Header, Icon } from 'react-native-elements';
import {Container,Content,Left, Body} from 'native-base';
import chat from 'SaveInLife/component/chat.js';
import review_history from 'SaveInLife/component/review.js';
import on_going_treatments from 'SaveInLife/component/request.js';
import preference from 'SaveInLife/component/preference.js';
import signout from 'SaveInLife/component/signout.js';

const util=require('util');

const { width, height } = Dimensions.get('window');
 class specialist extends Component{

  static navigationOption={
    title:'specialist',
  };


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
              <Icon
                name="search"
                color='#fff'
                onPress={() => console.log('pressed')}
                //underlayColor={'#64b5f6'}
              />
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
      
</View>
      );
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
    /*const abc = createBottomTabNavigator({
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
    );*/

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
  const CustomDrawerContentComponent = (props) => (
    <View>
    <View style ={{height: 150,width:300,paddingLeft:60,backgroundColor:'white'}}>
      
        <Image 
          style={styles.drawerImage}
          source={require('../logo.png')}
          />
          <Text style={{ fontWeight:'bold'}}>Dr. Nick Tesla</Text>
    </View>
      <DrawerItems {...props} />
     </View>
  )
  const MyApp = DrawerNavigator({
     Home :{screen:specialist},
   // 'On Going Treatments':{screen:on_going_treatments},
    //'Review History':{screen:review_history},
     Preference:{screen:preference},
    //Chat:{screen: chat},
    'Log Out':{screen:signout}
   },{
     initialRouteName:'Home',
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