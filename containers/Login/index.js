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

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    }
  }

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
              <Icon active name='user'
                type='FontAwesome' />
              <Input placeholder='Username'
                onChangeText={(username) => this.setState({ username })} />
            </Item>
            <Item last>
              <Icon active name='key' />
              <Input placeholder='Password'
                secureTextEntry
                onChangeText={(username) => this.setState({ password })} />
            </Item>
            <Button block
              style={{ marginTop: 10 }}
              onPress={() => this.props.navigation.navigate('Home')}>
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
        </Content>
      </Container>
    );
  }
}

