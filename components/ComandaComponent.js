import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Svg, { Circle } from 'react-native-svg';

import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,TouchableHighlight
} from 'react-native';
import miFetch from "./funciones/miFetch"

export default class OrderComponent extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
      datos:"",
      arrayComanda:[]

		  }
	
    }
    
    getdatos_comandas()
    {
      var temp=miFetch("null","null","get_comandas")
      var temp2=Promise.resolve(temp)
      temp2.then((value) => {
        this.setState({
          datos: value
        });
        let myArray=[]
        for(let i=0;i<value.length;i++){
           myArray.push(this.state.datos[i].id)
          myArray.push(value[i].comanda)
          myArray.push(value[i].user)
          this.setState({
            arrayComanda: myArray
          });
              
          }
      });
      
      
    }


  componentDidMount(prevProps, prevState){
    this.getdatos_comandas()
    const intervalId = setInterval(() => this.getdatos_comandas(), 3000);
    this.setState({ intervalId })
    
    }

    componentWillUnmount() {
      // Make sure to clear the interval, on unmount
      clearInterval(this.state.intervalId);
    }
    

   

    componente(props){
      let str =props.comanda
str=str.concat(";")
let count = 0;
let position = str.indexOf(';');
let  position2 = str.indexOf(';', position + 1);
let titulo=[str.substring(position+1,position2)]
let comandaArray=[]

while (position !== -1) {
  count++;
  position = str.indexOf(';', position + 1);
  position2 = str.indexOf(';', position2 + 1);
  if(count%2===0){
  	titulo.push(str.substring(position+1,position2))
  }else{
  	comandaArray.push(str.substring(position+1,position2))
  }
  
}
titulo.pop()
comandaArray.pop()


////

let count2 = 0;
let position3 
let  position4
let comandaFinal=[]
let arrayTemp=[]
for(let i=0;i<comandaArray.length;i++){
arrayTemp=[]
 count2 = 0;
 comandaArray[i]=comandaArray[i].concat(".")
 position3 = comandaArray[i].indexOf('.');
  position4 = comandaArray[i].indexOf('.', position3 + 1);
    arrayTemp.push(comandaArray[i].substring(position3+1,position4))
  while (position3 !== -1) {
  count2++;
  position3 = comandaArray[i].indexOf('.', position3 + 1);
  position4 = comandaArray[i].indexOf('.', position4 + 1);
  arrayTemp.push(comandaArray[i].substring(position3+1,position4))
}
arrayTemp.pop()
arrayTemp.pop()
comandaFinal.push(arrayTemp)
}

let cont=0
return comandaFinal.map((item) => {
  return item.map((itemComanda) => {

  return (
        <Text>{itemComanda} </Text>
  )
})
cont++
})
}
cambiarCobrado(item){
  let color
  if(item.cobrado==="green"){
    color="#DC7633"
  }else{
    color="green"
  }
  var temp=miFetch(item.id,color,"cambiarCobradoComanda")
  var temp2=Promise.resolve(temp)
  temp2.then((value) => {
  });
  var temp=miFetch(item.num_mesa_comanda,"null","cambiarMesaLibre")
  var temp2=Promise.resolve(temp)
  temp2.then((value) => {
  });
}
cambiarRecoger(item){
  let color
  if(item.recoger==="green"){
    color="#DC7633"
  }else{
    color="green"
  }
  var temp=miFetch(item.id,color,"cambiarRecogerComanda")
  var temp2=Promise.resolve(temp)
  temp2.then((value) => {
  });
}


	render(){
   
		return(
			<View style={styles.container}>
    {  <FlatList
        data={this.state.datos}
        renderItem={({ item }) =>
         
        <View style={{backgroundColor:"#BDBDBD",paddingBottom:50,marginTop:10,alignContent:"center",justifyContent:"center"}}
        >
          <View style={{}}>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <Text style={{fontSize:30,fontWeight:"bold" ,padding:8}} >ID{item.id}</Text>
              <View style={{flexDirection:"column"}}>
                <Text>usuario:</Text>
                <Text style={{fontWeight:"bold",fontSize:18}}>{item.user}</Text>
              </View>
              <View style={{flexDirection:"column"}}>
                <Text>num de Mesa:  </Text>
                <Text style={{fontWeight:"bold",fontSize:18}}>{item.num_mesa_comanda}</Text>
              </View>
            </View>
            <Text style={{alignSelf:"center"}}>{item.hora_comanda} </Text>
          <View style={{flexDirection:"row" ,flex:1}}>
            <View>
            <View style={{flex:1,flexDirection:"column"}}>
            <this.componente  comanda={item.comanda} />
          </View>
          <View style={{flexDirection:"row"}}>
                <Text>precio:</Text>
                <Text style={{fontWeight:"bold",fontSize:18 ,marginLeft:12,marginBottom:10}}>{item.precio_comanda}€</Text>
              </View>
              
              </View>
              <View style={{height:100,marginLeft:"0%"}}>
                
                <View style={{flexDirection:"row"}}>
                  <View>
                  
                <TouchableHighlight
                        style={{ 
                          marginTop:10,
                          height:"85%",
                        padding:13,
                        backgroundColor:item.recoger,
                        borderRadius:10,
                        borderWidth: 1,
                        borderColor: item.recoger,
                        justifyContent:"center"}}
                        underlayColor='#fff'
                        onPress={()=>this.cambiarRecoger(item)}
                        >
                          <Text style={styles.submitText}>Recoger</Text>
                      </TouchableHighlight>
                </View>
                <View  style={{marginLeft:20}}>
                <TouchableHighlight
                        style={{ height:"85%",
                        marginTop:10,
                        padding:13,
                        backgroundColor:item.finalzado,
                        borderRadius:10,
                        borderWidth: 1,
                        borderColor: item.finalzado,
                        justifyContent:"center"}}
                        onPress={() => console.log("nada")}
                        underlayColor='#fff'>
                          <Text style={styles.submitText}>Finalizado</Text>
                      </TouchableHighlight>
                </View>
              </View>
                      <TouchableHighlight
                        style={{
                          height:"20%",
                          marginRight:40,
                          marginLeft:40,
                          marginTop:10,
                          paddingTop:20,
                          paddingBottom:20,
                          backgroundColor:item.cobrado,
                          borderRadius:10,
                          borderWidth: 1,
                          borderColor: item.cobrado,
                          justifyContent:"center"
                        }}
                        onLongPress={()=>this.cambiarCobrado(item)}
                        underlayColor='#fff'>
                          <Text style={styles.submitText}>Cobrado</Text>
                      </TouchableHighlight>
              </View>
              </View>
          </View>
          <View style={{ width:"50%",flexDirection:"column"}}>
                <Text style={{fontWeight:"bold",fontSize:18}}>{item.notas_comanda}</Text>
              </View>
        </View>  
      
      
      
      }
        keyExtractor={item => item.id}
        contentContainerStyle={{
          flexGrow: 1,
          }}
      />}
            </View>
            
			)
	}
 }

 const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#424242"
  },
  submit:{
    height:"20%",
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent:"center"
  },
  submitText:{
    alignSelf:"center",
      color:'#fff',
      textAlign:'center',
  },
    tarjeta:{
        flex:2,
        width:"90%",
        backgroundColor:"white",
        alignSelf:"center",
        marginTop:10,
        flexDirection:"row",
        alignSelf:"center",
    },
  
}) 