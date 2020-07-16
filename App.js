import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Constants } from 'expo';
import StackScreen from './screen/StackScreen';
const BASE_API = 'http://refoxfumigaciones.com/Test/config.php';

export default class App extends Component {
	render(){

		return(
			<NavigationContainer style={{backgroundColor:"#424242"}}>
			<StackScreen   
			  screenProps={{
			  }} 
			/>  
		  </NavigationContainer>    
			)
	}
 }

//export default  Api;


/*
export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  registration_Function = () => {
var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'http://refoxfumigaciones.com/Test/registration_api.php'

	
    fetch(proxyUrl + targetUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_email: this.state.email,
        user_password: this.state.password

	  })


	})

	

	/*
	.then(res => res.text())          // convert to plain text
  .then(text => console.log(text))

	
	.then((response) => response.json())
    .then((json) => {
		console.log(json)
		//return JSON.parse(json);
    })
    .catch((error) => {
      console.error(error);
    });
	


  }
  Login_Function = () => {

	console.log(this.state.data)
  }

  render() {
    return (

      <View style={styles.MainContainer}>

        <Text style={{ fontSize: 20, color: "#DD2C00", textAlign: 'center', marginBottom: 15 }}>App User Registration Form</Text>

       

        <TextInput
          placeholder="Enter User Email Address"
          onChangeText={data => this.setState({ email: data })}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Enter User Password"
          onChangeText={data => this.setState({ password: data })}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={this.registration_Function} >

          <Text style={styles.text}>Click Here to Login </Text>

        </TouchableOpacity>
		<TouchableOpacity style={styles.button} onPress={this.Login_Function} >

<Text style={styles.text}>Click Here to print </Text>

</TouchableOpacity>

      </View>

    );
  }
}
*/
const styles = StyleSheet.create({

  MainContainer: {

    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10
  },

  TextInputStyleClass: {

    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: '#DD2C00',
    borderRadius: 5,
  },

  button: {

    width: '80%',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#DD2C00',
    borderRadius: 3,
    marginTop: 20
  },

  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 5
  }

});
