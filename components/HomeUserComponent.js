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
  TouchableOpacity
} from 'react-native';

export default class App extends Component<Props> {
	render(){


		return(
            <View style={styles.container}>

                <TouchableOpacity 
                    style={styles.tarjeta} 
                    //  onPress={/*() => props.onSelectContact(props)*/}
                >
                     <Text style={{marginLeft:20,padding:28}}>Nombre de Usuario: {this.props.datos_user[0].nombre_app_user}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.tarjeta} 
                    //  onPress={/*() => props.onSelectContact(props)*/}
                >
                     <Text style={{marginLeft:20,padding:28}}>Contraseña: ****</Text>
                </TouchableOpacity>
                <View 
                    style={styles.tarjeta} 
                    //  onPress={/*() => props.onSelectContact(props)*/}
                >
                     <Text style={{marginLeft:20,padding:28}}>Role:  {this.props.datos_user[0].role}</Text>
                </View>

            </View>
			)
	}
 }

 const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#424242"
      },
    tarjeta:{
        height:"20%",
        width:"90%",
        backgroundColor:"#BDBDBD",
        alignSelf:"center",
        marginTop:10,
        flexDirection:"row",
        alignSelf:"center",
    },
  
}) 