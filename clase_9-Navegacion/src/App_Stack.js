import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SafeAreaView,
} from 'react-native';

import { Animation } from './Screens/Animation';
import { Tactil } from './Screens/Tactil';
import { Home } from './Screens/Home';
import { Admin } from './Screens/Admin';

export default function App() {
  var [ login, setLogin] = useState(true);
  var Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerTintColor: 'blue',
        headerStyle: { backgroundColor: 'orange'}        
      }}>
        {login? 
            <>
            <Stack.Screen name="Home" component={Home}
              options={{title:"Pantalla Principal"}}
            />
            <Stack.Screen name="Animation" component={Animation}/>
            <Stack.Screen name="Tactil" component={Tactil}/>
            </>
            :
            <Stack.Screen name="Admin" component={Admin}/>
        }     
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


