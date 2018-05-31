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
  //Header,
} from 'react-native';

const util=require('util');
import { Header, Icon } from 'react-native-elements';
import {Container,Content,Left} from 'native-base';
import { StackNavigator, TabNavigator,TabBarBottom,TabView,createDrawerNavigator} from 'react-navigation';

export default class on_going_treatments extends Component{

  static navigationOption={
    title:'request',
  };


  constructor(){
    super();
    this.state={
      actionText :'welcome to save'
    }
  }
    onSettingsClick(){
      console.log('settings clicked');
    }
  onActionSelected(){

  }

render(){
  var {navigate}=this.props.navigation;

return (

  <View>
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

    <View style={styles.align}>
     <Text style={styles.textDesign}>ongoing treatments</Text>
    </View>
  </View>

      );
    }
  }

  const toolbarActions =[

     //{title: 'Settings', icon: require('./menu.png'), show:'always'},
    {title:'action1'},
    {title:'action2'},
    {title:'action3'},
    {title:'action4'},
    //{title: 'Settings', icon: require('./component/menu.png'), show: 'always'}
  ]




  const styles = StyleSheet.create({



    screen: {
      backgroundColor: '#33cc33',
      flex: 1,
    },

    toolBar:{
      height:80,
      backgroundColor:'#ff0066',
    //  position: 'absolute',
      //top: 0,
      left: 0,
      //width: Dimensions.get('window').width


    },
    mainText:{
        padding : 20,
    },
    button: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#ff0066'
    },
    buttonText: {
      padding: 20,
      color: 'black'
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
      marginBottom: 30,
      width: 100,
      alignItems: 'center',
      backgroundColor: '#ff0066'
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
    topMenu: {
      height: 53,
      backgroundColor: '#ED116F',
    }
  });
