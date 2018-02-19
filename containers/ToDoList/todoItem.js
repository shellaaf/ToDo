/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';


export default class ToDoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
        checked: false
    }
  }

  check() {
      this.setState({
          checked: !this.state.checked
      })
  }
  render() {
    return (
      <View style={styles.container}>
            <TouchableOpacity
            style={{flex: 0.1}}
            onPress={()=> this.check()}>
            <Image source={this.state.checked == false ? require('../../assets/checkbox-blank-outline.png') : require('../../assets/checkbox-marked-outline.png')}/>
                </TouchableOpacity>
            <Text style={{flex: 0.2}}>{this.props.todo}</Text>
            <Button
            onPress={()=> this.props.onDelete(this.props.todo)}
            title="x"
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#F5FCFF',
    flexDirection: 'row'
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#FF3300',
    height: 60
  },
  inputItem: {
    flexDirection: 'row',
    margin: 20
  }
});
