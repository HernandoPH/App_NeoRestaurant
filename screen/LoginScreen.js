import * as React from 'react';
import { Button, View, Text } from 'react-native';
import LoginForm from '../components/LoginComponent';

 class LoginScreen extends React.Component<Props> {
 
  handleSubmit = formState => {
  //  this.props.route.params.addContact(formState);
    //this.props.navigation.navigate('ContactList');
  };

  render() {
    return <LoginForm navigation={this.props} />;
  }
}

export default LoginScreen