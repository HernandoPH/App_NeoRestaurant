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
  TouchableOpacity,
  Image
} from 'react-native';
import miFetch from "./funciones/miFetch"

export default class OrderComponent extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			datos:"",

		  }
	
    }
    
    getdatos_mesas()
    {
      var temp=miFetch("null","null","get_mesas")
      var temp2=Promise.resolve(temp)
      temp2.then((value) => {
        this.setState({
          datos: value
        });
//      this.setState({datos:value})
      });
      
    }


  componentDidMount(prevProps, prevState){
    this.getdatos_mesas()
    const intervalId = setInterval(() => this.getdatos_mesas(), 3000);
    this.setState({ intervalId })
    }

    componentWillUnmount() {
      // Make sure to clear the interval, on unmount
      clearInterval(this.state.intervalId);
    }
    

    Item({ estado,cantidadAsientos,numMesa,props }) {
      let colorestado
      
      if(estado==="ocupado"){
        colorestado="red"
      }else if(estado==="libre"){
        colorestado="green"
      }
      return (
        <TouchableOpacity style={styles.tarjeta}
         onPress={()=>
         props.navigation.navigation.navigate('MesaDetalleScreen', {
         datos_mesa:[estado,cantidadAsientos,numMesa],
         datos_user: props.navigation.route.params.datos_user
          })
        }
        >
          
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={styles.textoTarjetaNumMesa} >{numMesa}</Text>
            <View >
            <Text style={styles.textoTarjeta} >Asientos</Text>
            <Text style={styles.textoTarjetaNumAsietnos} >{cantidadAsientos}</Text>

            </View>
            <Text style={{color:colorestado,alignSelf:"center",fontSize:30,fontWeight:"bold"}} >{estado.toUpperCase()} </Text>
          </View>
        </TouchableOpacity>
      );
    }
  
	render(){
		return(
			<View style={styles.container}>
          <TouchableOpacity style={styles.tarjetaD}
          onPress={()=>
            this.props.navigation.navigation.navigate('MesaDetalleScreen', {
            datos_mesa:["Delivery",1,"Delivery"],
            datos_user: this.props.navigation.route.params.datos_user
             })
           }
            >
          <View style={{flexDirection:"row", justifyContent:"center"}}>
            <View >
            <Text style={styles.textoDelivery} >DELIVERY</Text>

            </View>
          </View>
        </TouchableOpacity>
      <FlatList
        data={this.state.datos}
        renderItem={({ item }) => <this.Item estado={item.estado}  props={this.props} cantidadAsientos={item.cantidad_asientos} numMesa={item.id_num_mesa}/>}
        keyExtractor={item => item.id_num_mesa}
        contentContainerStyle={{
          flexGrow: 1,
          }}
      />
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
        backgroundColor:"#BDBDBD",padding:10,marginTop:10,alignContent:"flex-start",justifyContent:"space-between", marginLeft:13,marginRight:13
    },
    tarjetaD:{
      backgroundColor:"#BDBDBD",padding:10,alignContent:"flex-start",justifyContent:"space-between"
    },
    textoTarjetaNumMesa:{
      fontSize:38,
      fontWeight:"bold",
      
    },
    textoTarjeta:{
      
      alignSelf:"center",
      fontSize:17
    },
    textoTarjetaNumAsietnos:{
      fontSize:18,
      alignSelf:"center",
      fontWeight:"bold"
    },
    textoDelivery:{
      alignSelf:"center",
      fontSize:25,
      color:"#DC7633",
      fontWeight:"bold"
    },
  
}) 