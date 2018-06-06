import MultiStep from 'react-native-multistep-wizard';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
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
} from 'react-native';
import { Header, Icon,ButtonGroup } from 'react-native-elements';
import { StackNavigator, TabNavigator,TabBarBottom,TabView,DrawerNavigator,DrawerItems,SafeAreaView} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
const steps = [
  {name: 'StepOne', component: <StepOne/>},
  {name: 'StepTwo', component: <StepTwo/>},
  {name: 'StepThree', component: <StepThree/>},
];
class App extends Component<Props> {
  state = {
    index: 0
  }
  updateIndex = (index) => {
    this.setState({index})
  }
  finish = () => {
    //code to be executed when wizard is finished
            
        }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
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
	    <MultiStep steps={steps} onFinish={this.finish}/>
	    </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
button5:{
  backgroundColor:"#ED116F",
}
});
const CustomDrawerContentComponent = (props) => (
  <View>
  <View style ={{height: 150,width:300,paddingLeft:60,backgroundColor:'white'}}>
    
      <Image 
        style={styles.drawerImage}
        source={require('./component/logo.png')}
        />
        <Text style={{ fontWeight:'bold'}}>Dr. Nick Tesla</Text>
  </View>
    <DrawerItems {...props} />
   </View>
)
const MyApp = DrawerNavigator({
    Home:{screen:App},
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
