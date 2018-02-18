import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
  StyleSheet
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
  Button,
  Icon,
  Label,
  Picker
} from 'native-base';
import DatePicker from 'react-native-datepicker';

export default class Register extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left style={{ flex: 1 }}>
          </Left>

          <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Title>To Do</Title>
          </Body>

          <Right style={{ flex: 1 }}>
          </Right>
        </Header>
        <Content style={{ backgroundColor: 'white' }} padder>
          <Form>
            <Item>
              <Icon active name="user"
                type="FontAwesome" />
              <Input placeholder="Username" />
            </Item>
            <Item>
              <Icon active name="key" />
              <Input placeholder="Password"
                secureTextEntry />
            </Item>
            <Item>
              <Icon active name="transgender" />
              <Picker
                mode="dropdown"
                placeholder="Gender"
                style={{ flex: 1 }}
              >
                <Item label="Male" value="Male" />
                <Item label="Female" value="Female" />
              </Picker>
            </Item>
            <Item>
            <Icon active name="calendar" />
            <DatePicker
            maxDate={new Date()}
            mode="date"
            showIcon={false}
            androidMode="calendar"
            placeholder="Birthdate"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={datePickerCustomStyle}
            style={{ flex: 1, marginLeft:10 }}
          />
            </Item>
            <Button block
              style={{marginTop:10}}>
            <Text style={{ fontSize: 17 }}>Register</Text>
          </Button>
          </Form>

          

        </Content>
      </Container>
    );
  }
}

const datePickerCustomStyle = {
  dateInput: {
    borderWidth: 0,
    alignItems: 'flex-start'
  },
  dateTouchBody: {
    borderWidth: 0
  },
  placeholderText: {
    color: 'black',
    fontSize: 16,
  },
  dateText: {
    color: 'black',
    fontSize: 16,
  },
  btnTextConfirm: {
    color: 'grey',
    fontSize: 16,
  },
  btnTextCancel: {
    color: 'grey',
    fontSize: 16,
  }
};