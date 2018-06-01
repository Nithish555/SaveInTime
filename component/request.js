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

const util=require('util');
import { Header, Icon } from 'react-native-elements';
import {Container,Content,Left} from 'native-base';
import { StackNavigator, TabNavigator,TabBarBottom,TabView,createDrawerNavigator} from 'react-navigation';

export default class on_going_treatments extends Component{

  static navigationOption={
    title:'request',
  };



render(){
  var {navigate}=this.props.navigation;

return (

  <View style={{flex:1, backgroundColor:"#ffffff"}}>
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
    <View style={{flexDirection:'row'}}>
    <View> 
     <Text style={{fontSize:18,fontWeight:'bold'}}>Patient 1</Text>
     <Text style={{paddingLeft:20,fontSize:15,paddingTop:8}}>Age : 50</Text>
     <Text style={{paddingLeft:20,fontSize:15,paddingTop:4}}>Gender : Male</Text>
     <Text style={{paddingLeft:20,fontSize:15,paddingTop:4}}>HeartAttack/Stroke : HeartAttack</Text>
     </View>
     <View style={{paddingLeft:80,paddingTop:27}} >
    <Image style={{width:40,height:40,alignItems:'flex-end'}}
          source={require('./circle.png')}/>
      </View>
    </View>
    <View style={{flexDirection:'row',marginTop:20}}>
    <View> 
     <Text style={{fontSize:18,fontWeight:'bold'}}>Patient 2</Text>
     <Text style={{paddingLeft:20,fontSize:15,paddingTop:8}}>Age : 60</Text>
     <Text style={{paddingLeft:20,fontSize:15,paddingTop:4}}>Gender : Male</Text>
     <Text style={{paddingLeft:20,fontSize:15,paddingTop:4}}>HeartAttack/Stroke :  Stroke         </Text>
     </View>
     <View style={{paddingLeft:80,paddingTop:27}} >
    <Image style={{width:40,height:40,alignItems:'flex-end'}}
          source={require('./red.png')}/>
      </View>
    </View>
    <View style={{flexDirection:'row',marginTop:20}}>
    <View> 
     <Text style={{fontSize:18,fontWeight:'bold'}}>Patient 3</Text>
     <Text style={{paddingLeft:20,fontSize:15,paddingTop:8}}>Age : 40</Text>
     <Text style={{paddingLeft:20,fontSize:15,paddingTop:4}}>Gender : Female</Text>
     <Text style={{paddingLeft:20,fontSize:15,paddingTop:4}}>HeartAttack/Stroke : HeartAttack</Text>
     </View>
     <View style={{paddingLeft:80,paddingTop:27}} >
    <Image style={{width:40,height:40,alignItems:'flex-end'}}
          source={require('./blue.png')}/>
      </View>
    </View>
    <View style={{flexDirection:'row',marginTop:20}}>
    <View> 
     <Text style={{fontSize:18,fontWeight:'bold'}}>Patient 4</Text>
     <Text style={{paddingLeft:20,fontSize:15,paddingTop:8}}>Age : 70</Text>
     <Text style={{paddingLeft:20,fontSize:15,paddingTop:4}}>Gender : Female</Text>
     <Text style={{paddingLeft:20,fontSize:15,paddingTop:4}}>HeartAttack/Stroke :  Stroke         </Text>
     </View>
     <View style={{paddingLeft:80,paddingTop:27}} >
    <Image style={{width:40,height:40,alignItems:'flex-end'}}
          source={require('./red.png')}/>
      </View>
    </View>
    </View>
  </View>

      );
    }
  }

  




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
