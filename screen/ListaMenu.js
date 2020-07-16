import * as React from 'react';
import { Button, View, Text } from 'react-native';
import ListaMenuComponent from '../components/ListaMenuComponent';

 class ListaMenu extends React.Component<Props> {
 
  handleSubmit = formState => {
  //  this.props.route.params.addContact(formState);
    //this.props.navigation.navigate('ContactList');
  };
  render() {
    

    return <ListaMenuComponent   props={this.props} />;
  }
}

export default ListaMenu