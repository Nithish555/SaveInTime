import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
//import { Constants } from 'expo';
import { Header, Icon } from 'react-native-elements'; // 0.19.1
import {Button,Container,Content,Left} from 'native-base';
import { StackNavigator,DrawerNavigator,createDrawerNavigator } from 'react-navigation';

export default class new2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header
            outerContainerStyles={styles.topMenu}
            centerComponent={{
              text: 'Events',
              style: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
            }}
            rightComponent={
              <Icon
                name="search"
                color='#fff'
                onPress={() => console.log('pressed')}
                underlayColor={'#64b5f6'}
              />
            }
            leftComponent={
              <Icon
                name="menu"
                color='#fff'
                onPress={() => this.props.navigation.openDrawer()}
                underlayColor={'#64b5f6'}
              />
            }
          />
        </View>
        <Text> Hai New 2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    paddingTop:0,
    backgroundColor: '#ecf0f1',
  },
  topMenu: {
    height: 53,
    backgroundColor: '#64b5f6',
  },
});