import React, { Component } from 'react';

import { StyleSheet, TextInput, View, Alert, TouchableOpacity, Text } from 'react-native';

 export default  async  function miFetch(dato1,dato2,opcion){
	//Hacemos una constante donde haremos toda la consulta de la consulta (redundante no?), fijate que despues del nombre del archivo va "?opcion=1" esto es importante ya que con esto podemos elegir que acción hará el archivo de consulta en PHP.
	var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
	targetUrl = 'http://refoxfumigaciones.com/Test/login.php?opcion='+opcion

	const query = await fetch("http://refoxfumigaciones.com/Test/login.php?opcion="+opcion, {

		//Le indico que la consulta es de forma POST
		method: 'POST',
		//Le indico que tipo de consulta va a obtener o su contenido
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		//Le indico que el cuerpo es un JSON y quiero que lo convierta así.
		body: JSON.stringify({ 
			dato_eviado1: dato1,
			dato_eviado2: dato2
		  })
			}).then((response) => response.json()) //Si es así que realice un tipo mapeo
			.then((data) => { //Si obtiene los datos que lo guarde o haga un callback en "data"
			//Hago retornar "data" para que se guarde en la constante "query"
					return data
			}).catch((error) => {
		//Si no obtiene nada que me lo arroje en consola
				console.error(error);
			});
    // Aqui ya solo retorno la constante "query" para que DidMount lo recupere y obtenga los datos y lo arroje en los estados.
   // console.log("Respuesta Fetch",query)
		return query;
}