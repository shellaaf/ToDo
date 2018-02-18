import React, { Component } from 'react';
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
  Label
} from 'native-base';
import {
  ActivityIndicator,
  AsyncStorage,
  View,
  StyleSheet
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import  Api  from '../../helper/Api';
import { configs } from '../../constants/string';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      isLoading: false,
      // logedIn: false
    }
  }

  goLogin() {
    if (this.state.username.length > 0) {
      if (this.state.password.length > 0) {
        this.setState({
          isLoading: true
        }, () => {
          const url = `${configs.host}${configs.login}`;
          const body = {
            'username': this.state.username,
            'password': this.state.password
          };
          Api.post(url, body).then(resp => {
            if (resp.success) {
              AsyncStorage.setItem('login', JSON.stringify(resp.data))
                .then(() => {
                  this.dismissLoading();
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

  async getLogin() {
    AsyncStorage.getItem('login').then(data => {
      if (data != null) {
        const login = JSON.parse(data);
        this.props.navigation.navigate('Home')
        return login;
      }
    }).catch(err => {
      console.log(err);
    });
  }

  componentDidMount() {
    this.getLogin();
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
                  <Icon active name='user'
                    type='FontAwesome' />
                  <Input placeholder='Username'
                    onChangeText={(username) => this.setState({ username })} />
                </Item>
                <Item last>
                  <Icon active name='key' />
                  <Input placeholder='Password'
                    secureTextEntry
                    onChangeText={(password) => this.setState({ password })} />
                </Item>
                <Button block
                  style={{ marginTop: 10 }}
                  onPress={() => this.goLogin()}>
                  <Text style={{ fontSize: 17 }}>Login</Text>
                </Button>
                <Body style={{ marginTop: 10 }}><Text>Don't have an account?</Text></Body>
                <Body>
                  <Button transparent
                    onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={{ fontSize: 17 }}>Register</Text>
                  </Button>
                </Body>
              </Form>
            )
          }
        </Content>
      </Container>
    );
  }
}

// const styles = StyleSheet.create({
//   container:{
//       flex: 1,
//       justifyContent: 'center',
//       backgroundColor: 'grey'
// }
// });

