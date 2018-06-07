
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ToolbarAndroid,
  ScrollView,
  TouchableOpacity,
  Picker,
  Navigator,
  //Header,
} from 'react-native';

import { StackNavigator,DrawerNavigator ,createDrawerNavigator} from 'react-navigation';

import login from './component/login.js';
import other from './component/disease/other.js';
import stroke from './component/disease/stroke.js';
import heart from './component/disease/heart.js';
import chat from './component/chat.js';
import review_history from './component/review.js';
import on_going_treatments from './component/request.js';
import preference from './component/preference.js';
import signout from './component/signout.js';
import specialist from './component/disease/specialist.js';
import Screen1 from './Screen1.js';
import StepOne from './StepOne.js';
import StepTwo from './StepTwo.js';
import StepThree from './StepThree.js';
const myDrawer =DrawerNavigator({
  login:{screen: login},
  on_going_treatments:{screen:on_going_treatments},
  review_history:{screen:review_history},
  preference:{screen:preference},
   chat:{screen: chat},
   signout:{screen:signout},
   //heart:{screen: heart},
   //home:{screen:mydrawer},
   //other:{screen: other},
   //home:{screen:mydrawer},
   //stroke:{screen: stroke},

},{
drawerPosition:'left',
drawerWidth:300,
contentOptions:{
    activeTintColor:'red'
}});
//const MyApp = createDrawerNavigator({
 // login:{screen: login},
  //heart:{screen: heart},
   //home:{screen:mydrawer},
   //stroke:{screen: stroke},
  //other:{screen: other},
//},
//{
  //navigationOptions: ({ navigation }) => ({
    //headerLeft : <leftComponent navigate={navigation.navigate} />,
 // })
//}
//);
const Navigation =StackNavigator({

//home:{screen:mydrawer}
//login:{screen: login},

login:{screen: login},
Screen1:{screen:Screen1},
},
{
  headerMode: 'none'
},
{
navigationOptions: ({ navigation }) => ({
  headerLeft : <leftComponent navigate={navigation.navigate} />,
}),
// chat:{screen:chat},
}

);


export default Navigation;