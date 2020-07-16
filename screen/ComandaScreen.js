import * as React from 'react';
import { Button, View, Text } from 'react-native';
import ComandaComponent from '../components/ComandaComponent';

 class ComandaScreen extends React.Component<Props> {
 
  handleSubmit = formState => {
  //  this.props.route.params.addContact(formState);
    //this.props.navigation.navigate('ContactList');
  };
  render() {
    

    return <ComandaComponent />;
  }
}

export default ComandaScreen