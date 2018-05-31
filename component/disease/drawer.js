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
  Image
  //Header,
} from 'react-native';
import { StackNavigator, TabNavigator,TabBarBottom,TabView,DrawerNavigator,DrawerItems} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import stroke from './stroke'
import others from './other'
//import { Icon } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown';
import {Icon } from 'react-native-elements';
import {Container,Content,Left, Body,He} from 'native-base';
import chat from 'SaveInLife/component/chat.js';
import review_history from 'SaveInLife/component/review.js';
import on_going_treatments from 'SaveInLife/component/request.js';
import preference from 'SaveInLife/component/preference.js';
import signout from 'SaveInLife/component/signout.js';

const util=require('util');