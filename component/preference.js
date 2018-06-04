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
  FlatList,
  Dimensions,
  Animated,
  Easing
  //Header,
} from 'react-native';


const util=require('util');
import { Header, Icon } from 'react-native-elements';
import {Container,Content,Left} from 'native-base';
import SortableList from 'react-native-sortable-list';
import {Select,Option} from 'react-native-select-lists'
import PropTypes from 'prop-types';


const window = Dimensions.get('window');


const data = {
  0: {
    //image: 'https://placekitten.com/200/240',
    text: 'Dr.Nick Tesla',
  },
  1: {
    //image: 'https://placekitten.com/200/201',
    text: 'Dr.Aravindh',
  },
  2: {
    //image: 'https://placekitten.com/200/202',
    text: 'Dr.karthik',
  },
  3: {
    //image: 'https://placekitten.com/200/203',
    text: 'Dr.Arun',
  },
}
export default class preference extends Component{

  static navigationOption={
    title:'preference',
  };

render(){
  var {navigate}=this.props.navigation;

return (

  <View style={styles.container}>
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
        <View>
    <View style={styles.align}>
       <View style={{flexDirection:'row'}}>
     <Image style={{width:150,height:150}}
          source={require('try_camera/component/doctor.png')}/>
      <View>
      <Text style={{paddingTop:30,paddingLeft:30,
      color: 'black',fontSize:20}}>Dr Nick Tesla</Text>
      <Text style={{
      color: 'black',fontSize:13,paddingLeft:30}}>mbbs</Text>

      </View>
     </View>
        <Text style={styles.title}>Preference List</Text>
        <SortableList
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
          data={data}
          renderRow={this._renderRow} />
     <View style= {{alignItems : 'center',justifyContent:'center'}}>
     <TouchableOpacity >
         <View style={styles.button2}>
         <Text style={styles.buttonText}>save</Text>
         </View>
    </TouchableOpacity>
      </View>
    </View>
    </View>

  </View>
      );
    }
    _renderRow = ({data, active}) => {
      return <Row data={data} active={active} />
  }
}
class Row extends Component {

    constructor(props) {
      super(props);

      this._active = new Animated.Value(0);

      this._style = {
        ...Platform.select({
          ios: {
            transform: [{
              scale: this._active.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.1],
              }),
            }],
            shadowRadius: this._active.interpolate({
              inputRange: [0, 1],
              outputRange: [2, 10],
            }),
          },

          android: {
            transform: [{
              scale: this._active.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.07],
              }),
            }],
            elevation: this._active.interpolate({
              inputRange: [0, 1],
              outputRange: [2, 6],
            }),
          },
        })
      };
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.active !== nextProps.active) {
        Animated.timing(this._active, {
          duration: 300,
          easing: Easing.bounce,
          toValue: Number(nextProps.active),
        }).start();
      }
    }

    render() {
     const {data, active} = this.props;

      return (
        <Animated.View style={[
          styles.row,
          this._style,
        ]}>
          <Image source={{uri: data.image}} style={styles.image} />
          <Text style={styles.text}>{data.text}</Text>
        </Animated.View>
      );
    }
  }





  const styles = StyleSheet.create({



    screen: {
      backgroundColor: '#ffffff',
      flex: 1,
      alignContent:'stretch',
      alignSelf:'auto',
      alignItems:'stretch',
      ...Platform.select({
        ios: {
          paddingTop: 20,
        },
      }),

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
      color: '#ffffff',
      fontSize:18
    },
    align:{
      //flex:1,
      padding :10,
      backgroundColor:'white',
      //flexDirection : 'column',


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
      marginTop:10,
      marginBottom: 30,
      width: 200,
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
    },
    container: {
      flex:1,
      justifyContent: 'flex-start',
      //alignItems: 'center',
      //backgroundColor: '#eee',
      backgroundColor: '#ffffff',
      alignContent:'stretch',
      //alignSelf:'auto',
      //alignItems:'center',

      ...Platform.select({
        ios: {
          //paddingTop: 20,
        },
      }),
    },

    title: {
      fontSize: 20,
      paddingVertical: 20,
      color: '#999999',
    },

    list: {
     //flex: 1,
    },

    contentContainer: {
      width: window.width,

      ...Platform.select({
        ios: {
          paddingHorizontal: 30,
        },

        android: {
          paddingHorizontal: 0,
        }
      })
    },

    row: {
     flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 16,
      height: 40,
     flex: 1,
      marginTop: 15,
      marginBottom: 7,
      borderRadius: 4,


      ...Platform.select({
        ios: {
          width: window.width - 30 * 2,
          shadowColor: 'rgba(0,0,0,0.2)',
          shadowOpacity: 1,
          shadowOffset: {height: 2, width: 2},
          shadowRadius: 2,
        },

        android: {
          width: window.width - 40 * 2,
          elevation: 0,
          marginHorizontal: 30,
        },
      })
    },

    image: {
      width: 50,
      height: 50,
      marginRight: 30,
      borderRadius: 25,
    },

    text: {
      fontSize: 16,
      color: '#222222',
    },
  });
