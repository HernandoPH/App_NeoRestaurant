import * as React from 'react';
import { Button, View, Text } from 'react-native';
import MesaComponent from '../components/MesaComponent';

 class MesaDetalleScreen extends React.Component<Props> {
 
  handleSubmit = formState => {
  //  this.props.route.params.addContact(formState);
    //this.props.navigation.navigate('ContactList');
  };

  render() {
    return <MesaComponent navigation={this.props} />;
  }
}

export default MesaDetalleScreen