import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';



var ImagePicker = require('react-native-image-picker');

var options = {
  title: 'Select Avatar',
//  customButtons: [
  //  {name: 'fb', title: 'Choose Photo from Facebook'},
  //],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

export default class first extends Component {

  render() {
    return (
      <View>
      <Text>hi</Text>
      <TouchableOpacity onPress ={this.show.bind(this)}>
      <Text> show image picker</Text>
      </TouchableOpacity>
      </View>
    )
  }

  show(){
    ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    }
    else {
      let source = { uri: response.uri };

      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };

      this.setState({
        avatarSource: source
      });
    }
  });

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

});
