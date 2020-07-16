import * as React from 'react';
import { Button, View, Text } from 'react-native';
import HomeUserComponent from '../components/HomeUserComponent';

 class HomeUser extends React.Component<Props> {
 
  handleSubmit = formState => {
  //  this.props.route.params.addContact(formState);
    //this.props.navigation.navigate('ContactList');
  };
  render() {
    

    return <HomeUserComponent datos_user={this.props.route.params.datos_user} />;
  }
}

export default HomeUser