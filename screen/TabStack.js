import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons ,FontAwesome} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import Home_User from './Home_User'
import OrderScreen from './OrderScreen'
import ComandaScreen from './ComandaScreen'



const Tab = createBottomTabNavigator();

function MyTabs (props) {
      return(
    <Tab.Navigator initialRouteName="ContactList"  tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      inactiveBackgroundColor:"#9E9E9E",
      activeBackgroundColor:"#DC7633"
    }} >
      
      
        <Tab.Screen name="Home" component={Home_User}

          initialParams={ {
           datos_user:props.route.params.datos_user
          }}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-circle" color={color} size={size} />
            ),
          }}
        />
         <Tab.Screen name="Order" component={OrderScreen}
          initialParams={ {
            datos_user:props.route.params.datos_user
           }}
          options={{
            tabBarLabel: 'Mesas/Ordenar',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="lead-pencil" color={color} size={size} />
            ),
          }}
        />
                <Tab.Screen name="Comanda" component={ComandaScreen}
        
          options={{
            tabBarLabel: 'Comanda',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="book-open-variant" color={color} size={size} />
            ),
          }}
        />
 
 
    </Tab.Navigator>

      )

  
  }
  
  export default  MyTabs