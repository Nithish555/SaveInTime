import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import heart from './heart'
import stroke from './stroke'
import others from './other'

class MyHomeScreen extends React.Component {
  

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

class ProfileScreen extends React.Component {

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const MyApp = TabNavigator({
  HEART: {
    screen: heart,
    navigationOptions : {
      //tabBarLabel: 'MyHome',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons
          name="favorite-border"
          size={ 30 } 
          style={{ color: tintColor }}
        />
      ),
    }
  },
  STROKE: {
    screen: stroke,
    navigationOptions :{
      //tabBarLabel: 'MyHome',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons
          name="favorite-border"
          size={ 30 } 
          style={{ color: tintColor }}
        />
      ),
    }
  },
  OTHERS: {
    screen: others,
    navigationOptions : {
      //tabBarLabel: 'MyHome',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({}) => (
        <MaterialIcons
          name="favorite-border"
          size={ 30 } 
          style={{ color: '#000000' }}
        />
      ),
    }
  },
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
     tabBarOptions: {
       activeTintColor: '#e91e63',
       showIcon:true,
       style: {
        backgroundColor: 'white',
      },
     },
     
  });

export default MyApp;