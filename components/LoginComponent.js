import React, { Component } from 'react';

import { StyleSheet, TextInput, View, Alert, TouchableOpacity, Text } from 'react-native';
import miFetch from "./funciones/miFetch"


const BASE_API = 'http://refoxfumigaciones.com/Test/config.php';

export default class LoginForm extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			datos:"",

		  }
	
	  }
	//Hacemos la función asincrona
	async getSuggestion(){
		//Hacemos una constante donde haremos toda la consulta de la consulta (redundante no?), fijate que despues del nombre del archivo va "?opcion=1" esto es importante ya que con esto podemos elegir que acción hará el archivo de consulta en PHP.
		var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
		targetUrl = 'http://refoxfumigaciones.com/Test/config.php?opcion=1'

		const query = await fetch(proxyUrl + targetUrl, {

			//Le indico que la consulta es de forma POST
			method: 'POST',
			//Le indico que tipo de consulta va a obtener o su contenido
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			//Le indico que el cuerpo es un JSON y quiero que lo convierta así.
			body: JSON.stringify()
				}).then((response) => response.json()) //Si es así que realice un tipo mapeo
				.then((data) => { //Si obtiene los datos que lo guarde o haga un callback en "data"
				//Hago retornar "data" para que se guarde en la constante "query"
						return data
				}).catch((error) => {
			//Si no obtiene nada que me lo arroje en consola
					console.error(error);
				});
			// Aqui ya solo retorno la constante "query" para que DidMount lo recupere y obtenga los datos y lo arroje en los estados.

			return query;
	}
///


redirecionar(value){
  if(value!="Usuario o contraseña Incorrectos"){
    this.props.navigation.navigation.navigate('User_Tabs', {
      datos_user:value,
 });
    
  }
}
DoLogin(){
  var temp=miFetch(this.state.email,this.state.password,"login")
  var temp2=Promise.resolve(temp)
  temp2.then((value) => {
    this.setState({datos:value})
    this.redirecionar(value)
    }
    );


}

	render(){
		return(

			<View style={styles.MainContainer}>

			<Text style={{ fontSize: 20, color: "#DC7633", textAlign: 'center', marginBottom: 15 }}>Login NeoRestaurant</Text>
	
		   
	
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
	
			<TouchableOpacity style={styles.button} onPress={()=>this.DoLogin()} >
	
			  <Text style={styles.text}>Click Here to Login </Text>
	
			</TouchableOpacity>
		
	
		  </View>

			
			)
	}
 }

const styles = StyleSheet.create({

  MainContainer: {
	backgroundColor:"#424242",
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10
  },

  TextInputStyleClass: {
	color:"white",
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: '#DC7633',
    borderRadius: 5,
  },

  button: {

    width: '80%',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#DC7633',
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
