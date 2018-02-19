import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Input,
  Text,
  Body,
  Title,
  Right,
  Left,
  Button,
  Icon,
  Label,
  Picker,
  Item
} from 'native-base';
import DatePicker from 'react-native-datepicker';
import Api from '../../helper/Api';
import { configs } from '../../constants/string';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      date: null,
      gender: "Male",
      isLoading: false
    }
  }

  onValueChange(value) {
    this.setState({
      gender: value
    });
  }

  goRegister() {
    if (this.state.username.length > 0) {
      if (this.state.password.length > 0) {
        if (this.state.date != null || this.state.date.length > 0) {
          this.setState({
            isLoading: true
          }, () => {
            const url = `${configs.host}${configs.register}`;
            const body = {
              'username': this.state.username,
              'password': this.state.password,
              'gender': this.state.gender,
              'birthdate': this.state.date
            };
            Api.post(url, body).then(resp => {
              if (resp.success) {
                AsyncStorage.setItem('register', JSON.stringify(resp.data))
                  .then(() => {
                    this.dismissLoading();
                    alert("Register Success !");
                    this.props.navigation.navigate('Home');
                  })
                  .catch(err => {
                    this.dismissLoading();
                    alert(err);
                  });
              } else {
                this.dismissLoading();
                alert(resp.message);
              }
            }).catch(err => {
              this.dismissLoading();
              alert(err);
            });
          });
        } else {
          alert('Please enter your birthdate');
        }
      }
      else {
        alert('Please enter your password');
      }
    } else {
      alert('Username cannot be empty');
    }
  }

  dismissLoading() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    const { isLoading } = this.state;
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
          {isLoading == true ? (
            <ActivityIndicator size="large" />
          ) : (
              <Form>
                <Item>
                  <Icon active name="user"
                    type="FontAwesome" />
                  <Input placeholder="Username"
                    onChangeText={(username) => this.setState({ username })} />
                </Item>
                <Item>
                  <Icon active name="key" />
                  <Input placeholder="Password"
                    secureTextEntry
                    onChangeText={(password) => this.setState({ password })} />
                </Item>
                <Item>
                  <Icon active name="transgender" />
                  <Picker
                    mode="dropdown"
                    placeholder="Gender"
                    style={{ flex: 1 }}
                    selectedValue={this.state.gender}
                    onValueChange={this.onValueChange.bind(this)}
                  >
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
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
                    date={this.state.date}
                    customStyles={datePickerCustomStyle}
                    style={{ flex: 1, marginLeft: 10 }}
                    onDateChange={(date) => { this.setState({ date: date }) }}
                  />
                </Item>
                <Button block
                  style={{ marginTop: 10 }}
                  onPress={() => this.goRegister()}
                >
                  <Text style={{ fontSize: 17 }}>Register</Text>
                </Button>
              </Form>
            )}
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