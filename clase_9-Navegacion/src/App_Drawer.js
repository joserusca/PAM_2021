import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  SafeAreaView,
  Text
} from 'react-native';

import { Animation } from './Screens/Animation';
import { Tactil } from './Screens/Tactil';
import { Home } from './Screens/Home';
import { Admin } from './Screens/Admin';
import { CustomDrawer } from './Screens/CustomDrawer';

export default function App() {

  var Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={ (props) => <CustomDrawer {...props}/>} 
      screenOptions={{
        drawerType: 'back',
       }}
    >
            <Drawer.Screen name="Home" component={Home} options={{title:"Pantalla Principal"}}/>
            <Drawer.Screen name="Animation" component={Animation} initialParams={{id:2}}/>
            <Drawer.Screen name="Tactil" component={Tactil}/>
            <Drawer.Screen name="Admin" component={Admin}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


