import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Button,
  FlatList,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,Image
} from 'react-native';

import miFetchInsertComanda from "./funciones/FetchInsertComanda"
import miFetch from "./funciones/miFetch"

export default class MesaComponent extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			comandas:[],
            precioTotal:0,
            notaComanda:"",
            datos:0
		  }
	
    }
    
    
componente(props){
    let estado
    console.log(props)
    if(props.estado==="ocupado"){
        estado=true
    }else{
        estado=false
    }
    var array=[]
    for(var i=0;i<props.props;i++){
        
        array.push({id:i,text:"Comanda Numero: "+(i+1)})
    }
    if(!estado){
    return array.map((item) => {
        return (
            <TouchableOpacity 
                 style={styles.botones}
                onPress={()=>
                    props.navigation.navigation.navigate('ListaMenu', {
                    numComanda:[item.text],
               })
            }
                key={item.id}
            >      
            <Text>{item.text}</Text>         
            </TouchableOpacity>
        );
    });}else{
        return(
            <Text></Text>
        )
    }
}


    


componentWillReceiveProps(nextProps) {
    console.log("NExt",nextProps)
    let construirComanda={numComanda:nextProps.navigation.route.params.temp,comanda:nextProps.navigation.route.params.repetidos,id:nextProps.navigation.route.params.idrand}
    this.setState(prevState => ({
        comandas: [...prevState.comandas, construirComanda],
        precioTotal:prevState.precioTotal+nextProps.navigation.route.params.precioTotal
      }))

   }
    
Item({cantidad, nombre }) {
    return (
   
    <View style={{flexDirection:"row"}}>
        <Text>{nombre}</Text>
        <Text>{cantidad}</Text>
    </View>
        

    )
  }
   
  CrearFlatLists(props){
   
       return props.props.map((arrayprops) => {
           return (
              <TouchableOpacity  key={arrayprops.id} style={{paddingBottom:20}} onPress={()=>{
                  let temporalComanda=props.state.state.comandas
                  if(temporalComanda.length===1 ){
                      temporalComanda.pop()
                  }else{
                  for(let i=0;i<temporalComanda.length;i++){
                      
                      if(arrayprops.id===temporalComanda[i].id){
                      temporalComanda = temporalComanda.splice(i, 1);
                  }
                  
              }}
              props.state.setState({comandas:temporalComanda})

                }
                    
                } 
              >
               <Text  style={{marginLeft:25,fontSize:17,color:"white"}} > {arrayprops.numComanda} </Text> 
               <FlatList
                   data={arrayprops.comanda}
                   //renderItem={({ item }) => <this.Item  cantidad={item.cantidad}  nombre={item.nombre}  />}
                   renderItem={({ item }) =>
                        <View style={{flexDirection:"row" ,marginLeft:25,backgroundColor:"#BDBDBD"}}>
                            <Text style={{color:"white",marginLeft:8}}>{item.nombre}</Text>
                        </View>

                 }
                   keyExtractor={item => item.id.toString()}
                   contentContainerStyle={{
                   flexGrow: 1,
                   }}
               />
               </TouchableOpacity>
              
         );
       });
   }

   insertarComanda(comanda,user,numMesa,precio,notaComanda)
   {
       console.log("aqui te interesa",comanda)
        let comandaString=""
       for(let i=0;i<comanda.length;i++){
      
        comandaString=comandaString.concat(" ;",comanda[i].numComanda[0],"; ")
        for(let y=0;y<comanda[i].comanda.length;y++){
            comandaString=comandaString.concat(".",comanda[i].comanda[y].nombre)
        }
       }
     var temp=miFetchInsertComanda(comandaString,user,numMesa,precio,notaComanda,"insert_comanda")
   
     
   }
   CambiarEstadoMesa(numMesa)
   {
     
     var temp=miFetch(numMesa,"null","cambiarEstadoMesa")
     var temp2=Promise.resolve(temp)
     temp2.then((value) => {
//      this.setState({datos:value})
     });
   }
   CambiarEstadoMesaLongPress(numMesa,estado)
   {
       let nuevoEstado
     if(estado==="ocupado"){
        nuevoEstado="libre"
     }else{
         nuevoEstado="ocupado"
     }
     var temp=miFetch(numMesa,nuevoEstado,"cambiarEstadoMesaLongPress")
     var temp2=Promise.resolve(temp)
     temp2.then((value) => {
//      this.setState({datos:value})
     });
   }


   finalizarComanda(){
    this.insertarComanda(this.state.comandas,this.props.navigation.route.params.datos_user[0].nombre_app_user,this.props.navigation.route.params.datos_mesa[2] ,this.state.precioTotal,this.state.notaComanda)
    this.CambiarEstadoMesa(this.props.navigation.route.params.datos_mesa[2])
    this.props.navigation.navigation.navigate('Order');
  
  }
	render(){
        let colorEstado
        if(this.props.navigation.route.params.datos_mesa[0]==="ocupado"){
            colorEstado="red"
        }else if(this.props.navigation.route.params.datos_mesa[0]==="libre"){
            colorEstado="green"
            }
            console.log("props al renderizar siempre esta screen",this.props.navigation.route.params)
            console.log("precioTotal",this.state.datos)
            if(this.props.navigation.route.params.datos_mesa[2]==="Delivery"){
                if(this.props.navigation.route.params.repetidos===undefined){
     

                    return(
                        <ScrollView style={styles.container}>
                            <Text style={{color:colorEstado,alignSelf:"center",fontSize:30,fontWeight:"bold"}}> {this.props.navigation.route.params.datos_mesa[0].toUpperCase()} </Text>
                            <View style={{flexDirection:"row" ,justifyContent:"space-between",flexWrap:"wrap"}}>
                                <this.componente     navigation={this.props.navigation} props={this.props.navigation.route.params.datos_mesa[1]}></this.componente>
                            </View>
                        </ScrollView>
                        )
                    }else{
                        
                        console.log("stateComandas",this.state.comandas)
                        return(
                            <ScrollView style={styles.container}>
                            <Text style={{color:colorEstado,alignSelf:"center",fontSize:30,fontWeight:"bold"}}> {this.props.navigation.route.params.datos_mesa[0].toUpperCase()} </Text>
                                <View style={{flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"}}>
                                <this.componente    navigation={this.props.navigation} props={this.props.navigation.route.params.datos_mesa[1]}></this.componente>
                                </View>
                                <TextInput
                                placeholder="Añadir Nota"
                                onChangeText={data => this.setState({ notaComanda: data })}
                                underlineColorAndroid='transparent'
                                style={{padding:20, color:"white"}}
                                />
                                <View style={{flexDirection:"row",flexWrap:"wrap"}}>
                                   <this.CrearFlatLists props={this.state.comandas} state={this} />
            
                                </View>
                                <Button
                                    title="Finalizar Comanda"
                                    onPress={()=>this.finalizarComanda()} 
                                    color="#DC7633"
                                    />
                            </ScrollView>
                            )
                    }
            }else{
        if(this.props.navigation.route.params.repetidos===undefined){
     

		return(
            <ScrollView style={styles.container}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <View>
                        <Text style={styles.titulosDatos}>Num  de la mesa </Text>
                        <Text style={styles.datos}> {this.props.navigation.route.params.datos_mesa[2]}</Text>
                    </View>
                    <View>
                        <Text style={styles.titulosDatos}>Num  de Asientos </Text>
                        <Text style={styles.datos}>  {this.props.navigation.route.params.datos_mesa[1]}</Text>
                    </View>                    
                </View>
                <TouchableOpacity onLongPress={()=>this.CambiarEstadoMesaLongPress(this.props.navigation.route.params.datos_mesa[2],this.props.navigation.route.params.datos_mesa[0])}>
                <Text style={{color:colorEstado,alignSelf:"center",fontSize:30,fontWeight:"bold"}}> {this.props.navigation.route.params.datos_mesa[0].toUpperCase()} </Text>
                </TouchableOpacity>
                <View style={{flexDirection:"row" ,justifyContent:"space-between",flexWrap:"wrap"}}>
                    <this.componente estado={this.props.navigation.route.params.datos_mesa[0]}  navigation={this.props.navigation} props={this.props.navigation.route.params.datos_mesa[1]}></this.componente>
                </View>
            </ScrollView>
            )
        }else{
            
            console.log("stateComandas",this.state.comandas)
            return(
                <ScrollView style={styles.container}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <View>
                        <Text style={styles.titulosDatos}>Num  de la mesa </Text>
                        <Text style={styles.datos}> {this.props.navigation.route.params.datos_mesa[2]}</Text>
                    </View>
                    <View>
                        <Text style={styles.titulosDatos}>Num  de Asientos </Text>
                        <Text style={styles.datos}>  {this.props.navigation.route.params.datos_mesa[1]}</Text>
                    </View>                    
                </View>
                <Text style={{color:colorEstado,alignSelf:"center",fontSize:30,fontWeight:"bold"}}> {this.props.navigation.route.params.datos_mesa[0].toUpperCase()} </Text>
                    <View style={{flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"}}>
                    <this.componente  estado={this.props.navigation.route.params.datos_mesa[0]} navigation={this.props.navigation} props={this.props.navigation.route.params.datos_mesa[1]}></this.componente>
                    </View>
                    <TextInput
                    placeholder="Añadir Nota"
                    onChangeText={data => this.setState({ notaComanda: data })}
                    underlineColorAndroid='transparent'
                    style={{padding:20, color:"white"}}
                    />
                    <View style={{flexDirection:"row",flexWrap:"wrap"}}>
                       <this.CrearFlatLists props={this.state.comandas} state={this} />

                    </View>
                    <Button
                        title="Finalizar Comanda"
                        onPress={()=>this.finalizarComanda()} 
                        color="#DC7633"
                        />
                </ScrollView>
                )
        }
        }
	}
 }

 const styles = StyleSheet.create({
     botones:{
         margin:15,
        width:100,
        flexDirection:"row",
        backgroundColor:"#DC7633",
        padding:15
     },
     datos:{fontSize:60,fontWeight:"bold",alignSelf:"center",color:"white"},
     titulosDatos:{
        fontSize:20 ,color:"white"
     },
    container:{
        flex:1,
        backgroundColor:"#424242"
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