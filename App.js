
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

import login from 'SaveInLife/component/login.js';
import other from 'SaveInLife/component/disease/other.js';
import stroke from 'SaveInLife/component/disease/stroke.js';
import heart from 'SaveInLife/component/disease/heart.js';
import chat from 'SaveInLife/component/chat.js';
import review_history from 'SaveInLife/component/review.js';
import on_going_treatments from 'SaveInLife/component/request.js';
import preference from 'SaveInLife/component/preference.js';
import signout from 'SaveInLife/component/signout.js';
import specialist from 'SaveInLife/component/disease/specialist.js';


const myDrawer =DrawerNavigator({
  'Login' :{screen: login},
  'Ongoing Treatments':{screen:on_going_treatments},
  'Review History':{screen:review_history},
  'Preferences':{screen:preference},
  'Chat':{screen: chat},
  'Sign Out':{screen:signout},
},{
drawerPosition:'left',
drawerWidth:500,
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
//MyApp:{screen:MyApp},
heart:{screen: heart},
stroke:{screen: stroke},
other:{screen: other},
review_history:{screen:review_history},
preference:{screen:preference},
signout:{screen:signout},
on_going_treatments:{screen:on_going_treatments},
chat:{screen: chat},
specialist:{screen:specialist},
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
