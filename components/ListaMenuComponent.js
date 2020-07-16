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
  Image,
  CheckBox,
  SectionList
} from 'react-native';
import miFetch from "./funciones/miFetch"

export default class OrderComponent extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			datos:"",
      comanda:[],
      comandaFinal:[],
      comandatemp:[],
      arrayComidas:[],
      categorias:[],
      sectionListMenu:[]
		  }
	
    }
    
    getdatos_menu()
    {
      var temp=miFetch("null","null","get_menu")
      var temp2=Promise.resolve(temp)
      temp2.then((value) => {
        this.setState({
          datos: value,
          precio:0
        });
//      this.setState({datos:value})
      });

     //buscamos todas las categorias
     var tempCategorias=miFetch("empezar","null","get_categorias")
     var tempCategorias2=Promise.resolve(tempCategorias)
     tempCategorias2.then((value2) => {
      this.setState(prevState => ({
        categorias:value2,
      })) //      this.setState({datos:value})
     });



      //buscamos  todos los productos con la categoria =para empezar
      var tempEmpezar=miFetch("empezar","null","get_menu_categorias")
      var tempEmpezar2=Promise.resolve(tempEmpezar)
      tempEmpezar2.then((value2) => {
        this.setState(prevState => ({
          arrayComidas: [...prevState.arrayComidas, value2],
        }))        
      });

   //buscamos  todos los productos con la categoria =frios
   var tempEmpezar=miFetch("frios","null","get_menu_categorias")
   var tempEmpezar2=Promise.resolve(tempEmpezar)
   tempEmpezar2.then((value2) => {
//     console.log("FRIOS",value2)
this.setState(prevState => ({
  arrayComidas: [...prevState.arrayComidas, value2],
}))     

   });
        //buscamos  todos los productos con la categoria =para empezar
        var tempEmpezar=miFetch("calientes","null","get_menu_categorias")
        var tempEmpezar2=Promise.resolve(tempEmpezar)
        tempEmpezar2.then((value2) => {
        //  console.log("empezar",value2)
        this.setState(prevState => ({
          arrayComidas: [...prevState.arrayComidas, value2],
        }))     
        });
         //buscamos  todos los productos con la categoria =para empezar
         var tempEmpezar=miFetch("arroces","null","get_menu_categorias")
         var tempEmpezar2=Promise.resolve(tempEmpezar)
         tempEmpezar2.then((value2) => {
           //console.log("empezar",value2)
           this.setState(prevState => ({
            arrayComidas: [...prevState.arrayComidas, value2],
          }))     
   //      this.setState({datos:value})
         });
   //buscamos  todos los productos con la categoria =para empezar
   var tempEmpezar=miFetch("cuchara","null","get_menu_categorias")
   var tempEmpezar2=Promise.resolve(tempEmpezar)
   tempEmpezar2.then((value2) => {
     //console.log("empezar",value2)
     this.setState(prevState => ({
      arrayComidas: [...prevState.arrayComidas, value2],
    }))     
//      this.setState({datos:value})
   });
      //buscamos  todos los productos con la categoria =para empezar
      var tempEmpezar=miFetch("carnes","null","get_menu_categorias")
      var tempEmpezar2=Promise.resolve(tempEmpezar)
      tempEmpezar2.then((value2) => {
        //console.log("empezar",value2)
        this.setState(prevState => ({
          arrayComidas: [...prevState.arrayComidas, value2],
        }))     
//      this.setState({datos:value})
      });
         //buscamos  todos los productos con la categoria =para empezar
         var tempEmpezar=miFetch("postres","null","get_menu_categorias")
         var tempEmpezar2=Promise.resolve(tempEmpezar)
         tempEmpezar2.then((value2) => {
           //console.log("empezar",value2)
           this.setState(prevState => ({
            arrayComidas: [...prevState.arrayComidas, value2],
          }))     
   //      this.setState({datos:value})
         });

    }


  componentDidMount(prevProps, prevState){
    this.getdatos_menu()
    }
componentDidUpdate(){
  //this.crearArraySectionList()

}
    crearArraySectionList(props){
      console.log(props)
      let categorias=props.categorias
      let arraydeComidas=props.arraydeComidas
      console.log("categorias",categorias)
      console.log("arraydeComidas",arraydeComidas)


      let varTemp
      let arrayTemp=[]
      let flag=true
      for(let i=0;i<categorias.length;i++){
        for(let y=0;y<arraydeComidas.length;y++){
          for(let x=0;x<arraydeComidas[y].length;x++){
         // console.log("categoria",categorias[i].nombre_categoria)
          //console.log("comidas",arraydeComidas[y][x].categoria_menu)
  
          if(categorias[i].nombre_categoria===arraydeComidas[y][x].categoria_menu){
            if(flag){
            flag=false
          //  console.log("quiero insertar data=>",arraydeComidas[y])
            //console.log("quiero insertar title=>",categorias[i])
            varTemp={title:categorias[i].nombre_categoria,data:arraydeComidas[y]}
            arrayTemp.push(varTemp)
            }
            
            
          }
        }
        }

        flag=true
      }
      //console.log(arrayTemp)
    /*  this.setState(prevState => ({
        sectionListMenu:arrayTemp,
      }))*/
      return(
        <SectionList
        sections={arrayTemp}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <View style={styles.container}>
              <View style={{flex:1,flexDirection:"row",alignContent:"space-between"}}>
                <TouchableOpacity
                style={styles.botonesSumar_Restar}
                  onPress={()=>
                    this.RestarComanda(item)
                  }
                ><Text style={styles.sumaYResta}>-</Text></TouchableOpacity>
               <Text style={{paddingLeft:50,paddingRight:20,flex:2}} > {item.nombre_menu}</Text>
               <TouchableOpacity
                style={styles.botonesSumar_Restar}
                onPress={()=>
                  this.crearComanda(item)
                }
                ><Text style={styles.sumaYResta}>+</Text></TouchableOpacity>
              </View>
          </View>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
      )
    }
  
    

  //añadimos al estado la comanda
crearComanda(item){
  let precioTemp=parseInt(item.precio)
  let temp={cantidad:0,nombre:item.nombre_menu}
  this.setState((prevState) => ({
    comanda:[...prevState.comanda, item.nombre_menu],
    precio:prevState.precio+precioTemp
 }))
 this.setState((prevState) => ({
  comandatemp:[...prevState.comanda, item]
}))




}
//Restamos un elemento a la comanda 
RestarComanda(item){
  let precioTemp=parseInt(item.precio)

  var array = this.state.comanda
  let bool=true
  let i=0
  let indexRemove=array.indexOf(item.nombre_menu)
  array.splice(indexRemove, 1);
  this.setState((prevState) => ({
    comanda:array,
    precio:prevState.precio-precioTemp
 }))

}

//Regresa a la ventana anterior y crea el resultado enviado de la comanda
finalizarComanda(){
  let precioTotal=this.state.precio
  var array = this.state.comanda
  var repetidos = [];
  let i=0;
  
  array.forEach(function(numero){
    repetidos[i] = {id:i ,nombre:numero, cantidad:((repetidos[numero] || 0) + 1) }
    i++
  });
  let temp=this.props.props.route.params.numComanda
  var number = Math.random() // 0.9394456857981651
  number.toString(36); // '0.xtis06h6'
  var idrand = number.toString(36).substr(2, 9); // 'xtis06h6'
     this.setState({comandaFinal:repetidos})
   this.props.props.navigation.navigate('MesaDetalleScreen', { temp, repetidos,idrand,precioTotal} );

}

	render(){
    console.log("COMIDAS",this.state.arrayComidas.sort())
  //  console.log("CATEGORIA ESTATE",this.state.categorias.sort())

    //console.log("VARTEMP",this.state.sectionListMenu)
if(this.state.arrayComidas.length>5){
  let categorias=this.state.categorias
      let arraydeComidas=this.state.arrayComidas.sort()
      console.log("categorias",categorias)
      console.log("arraydeComidas",arraydeComidas)


      let varTemp
      let arrayTemp=[]
      let flag=true
      for(let i=0;i<categorias.length;i++){
        for(let y=0;y<arraydeComidas.length;y++){
          for(let x=0;x<arraydeComidas[y].length;x++){
         // console.log("categoria",categorias[i].nombre_categoria)
          //console.log("comidas",arraydeComidas[y][x].categoria_menu)
  
          if(categorias[i].nombre_categoria===arraydeComidas[y][x].categoria_menu){
            if(flag){
            flag=false
          //  console.log("quiero insertar data=>",arraydeComidas[y])
            //console.log("quiero insertar title=>",categorias[i])
            varTemp={title:categorias[i].nombre_categoria,data:arraydeComidas[y]}
            arrayTemp.push(varTemp)
            }
            
            
          }
        }
        }

        flag=true
      }
      //console.log(arrayTemp)
    /*  this.setState(prevState => ({
        sectionListMenu:arrayTemp,
      }))*/
      return(
        <View style={styles.containerMain}>
        <SectionList
        sections={arrayTemp}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <View style={styles.container}>
              <View style={{flex:1,flexDirection:"row",alignContent:"space-between",}}>
                <TouchableOpacity
                style={styles.botonesSumar_Restar}
                  onPress={()=>
                    this.RestarComanda(item)
                  }
                ><Text style={styles.sumaYResta}>-</Text></TouchableOpacity>
               <Text style={{paddingLeft:50,paddingRight:20,flex:2}} > {item.nombre_menu}</Text>
               <TouchableOpacity
                style={styles.botonesSumar_Restar}
                onPress={()=>
                  this.crearComanda(item)
                }
                ><Text style={styles.sumaYResta}>+</Text></TouchableOpacity>
              </View>
          </View>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{marginBottom:20,marginTop:20,padding:20,fontSize:20,color:"white",fontWeight:"bold",borderColor:"#DC7633",borderWidth:3,alignSelf:"center"}}>{title.toUpperCase()}</Text>
        )}
      />
      <View>
      <Button
        title="Finalizar comanda"
        onPress={
          ()=>this.finalizarComanda()
        }
        color="#DC7633"
      />
    </View>
    </View>
      )
}else{
    return(<Text></Text>)
  /*
    return(
			<View style={styles.containerMain}>

        <FlatList        
          data={this.state.datos}
          renderItem={({ item }) =>
            <View style={styles.container}>
                <View style={{flex:1,flexDirection:"row",alignContent:"space-between"}}>
                  <TouchableOpacity
                  style={styles.botonesSumar_Restar}
                    onPress={()=>
                      this.RestarComanda(item)
                    }
                  ><Text style={styles.sumaYResta}>-</Text></TouchableOpacity>
                 <Text style={{paddingLeft:50,paddingRight:20,flex:2}} > {item.nombre_menu}</Text>
                 <TouchableOpacity
                  style={styles.botonesSumar_Restar}
                  onPress={()=>
                    this.crearComanda(item)
                  }
                  ><Text style={styles.sumaYResta}>+</Text></TouchableOpacity>
                </View>
            </View>
          }
          keyExtractor={item => item.id}
        ></FlatList>
        <View>
          <Button
            title="Finalizar comanda"
            onPress={
              ()=>this.finalizarComanda()
            }
            color="#DC7633"
          />
        </View>
        </View>
            
          )*/}
	}
 }

 const styles = StyleSheet.create({
   sumaYResta:{fontSize:25,alignSelf:"center",marginBottom:10,},
   containerMain:{
    flex:1,
    backgroundColor:"#424242",
    paddingBottom:20
  },
container:{
  flex:1,backgroundColor:"#BDBDBD",padding:10,marginTop:10,alignContent:"center"
},
    botonesSumar_Restar:{
      flex:1,
      borderWidth: 3,
      borderRadius:5,
      borderColor:"#DC7633",
      width:25,
      height:35,
      alignContent:"center",
      
    },
  
}) 