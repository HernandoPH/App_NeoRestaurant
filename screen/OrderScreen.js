import * as React from 'react';
import { Button, View, Text } from 'react-native';
import HomeUserComponent from '../components/HomeUserComponent';
import OrderComponent from '../components/OrderComponent';

 class OrderScreen extends React.Component<Props> {
 
  handleSubmit = formState => {
  //  this.props.route.params.addContact(formState);
    //this.props.navigation.navigate('ContactList');
  };
  

  render() {
    

    return <OrderComponent   navigation={this.props}  />;
  }
}

export default OrderScreen