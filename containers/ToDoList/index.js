/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Modal,
  StyleSheet,
  TextInput,
  FlatList,
  Button
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Text,
  Body,
  Title,
  Right,
  Left,
  Icon,
  Label,
  View,
  Fab
} from 'native-base';
import ToDoItem from './todoItem';


export default class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      nama: null,
      date: null,
      modalVisible: false
    }
  }

  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  addNewItem() {
    const data = this.state.data;
    data.push(this.state.nama);
    this.setState({
      data: data,
      nama: null
    })
  }

  deleteItem(item) {
    const data = this.state.data;
    const index = data.indexOf(item);
    data.splice(index, 1);
    this.setState({
      data: data
    })
  }

  render() {
    const { data, nama } = this.state;
    return (
      // <Container>
      //   <Header>
      //     <Left style={{ flex: 1 }}>
      //     </Left>

      //     <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //       <Title>To Do</Title>
      //     </Body>

      //     <Right style={{ flex: 1 }}>
      //     </Right>
      //   </Header>
      //   <View style={{ flex: 1, backgroundColor: 'white' }}>
      //     <Fab
      //       containerStyle={{}}
      //       style={{ backgroundColor: '#007AFF' }}
      //       position="bottomRight"
      //       onPress={() => this.openModal()}>
      //       <Icon name="add" />
      //     </Fab>

      //     <Modal
      //       visible={this.state.modalVisible}
      //       animationType={'slide'}
      //       onRequestClose={() => this.closeModal()}
      //       transparent
      //     >
      //       <View style={styles.modalContainer}>
      //         <View style={styles.innerContainer}>
                    
      //                   <Icon active name="tasks"
      //                     type="FontAwesome" />
      //                   <TextInput placeholder="Task Name" />
      //               <Button block
      //                 style={{ marginTop: 10 }}
      //                 onPress={() => this.closeModal()}
      //               >
      //                 <Text style={{ fontSize: 17 }}>Close</Text>
      //               </Button>
      //         </View>
      //       </View>
      //     </Modal>
      //   </View>
      // </Container>
      //{
       <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          To Do List
      </Text>
      </View>
      <View style={styles.inputItem}>
        <TextInput
          style={{ height: 40, width: '80%', borderColor: 'black', borderWidth: 1, fontSize: 20 }}
          placeholder="Enter New Item"
          onChangeText={(nama) => this.setState({ nama })}
        />
        <Button
          title="+"
          color="#FF6633"
          onPress={() => this.addNewItem()} />
      </View>
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => <ToDoItem
        todo={item}
        onDelete={this.deleteItem}>
        </ToDoItem>}
        extraData={this.state}
      />
    </View>
  // }
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//   },
//   modalContainer: {
//     alignItems : 'center',
//     justifyContent: 'center',
//     backgroundColor: '#EFF0F1',
//   },
//   innerContainer: {
//     alignItems: 'center',
//   },
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#F5FCFF'
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
