import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View,Button,TouchableOpacity} from 'react-native'
import LoginScreen from './LoginScreen'
import Home_User from './Home_User'
import Tab_User from './TabStack'
import MesaDetalleScreen from './MesaDetalleScreen'
import ListaMenu from './ListaMenu'




import { Ionicons  } from '@expo/vector-icons';


const Stack = createStackNavigator();
function StackScreen (props) {

  return (
      <Stack.Navigator>
        
      <Stack.Screen 
        name="LoginForm"
        component={LoginScreen}  
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#DC7633' },
          title: 'Inicio de Sesion',
          headerTitleAlign:"center",
          
        }}        
      /> 
      <Stack.Screen 
        name="User_Home"
        component={Home_User}  
        options={{
          title: 'Home',
          headerTitleAlign:"center",
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#DC7633' },
        }}        
      /> 
           <Stack.Screen 
        name="MesaDetalleScreen"
        component={MesaDetalleScreen}  
        options={{
          title: 'Mesa',
          headerTitleAlign:"center",
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#DC7633' },
        }}        
      /> 
      <Stack.Screen 
        name="ListaMenu"
        component={ListaMenu}  
        options={{
          title: 'Menu',
          headerTitleAlign:"center",
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#DC7633' },
        }}        
      />        

<Stack.Screen 
        name="User_Tabs"
        component={Tab_User}
        options={{
          title: 'Menu Camarero',
          headerTitleAlign:"center",
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#DC7633' },
        }}  
        />
      </Stack.Navigator>
  )
}

export default StackScreen;