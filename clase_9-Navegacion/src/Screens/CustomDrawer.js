import React, {useRef} from 'react';
import { 
    DrawerContentScrollView, 
    DrawerItemList, 
    DrawerItem 
} from '@react-navigation/drawer';

import {
    View,
    StyleSheet,
    Animated,
    PanResponder,
    Button,
    Alert
} from 'react-native';

export function CustomDrawer(props) { 

    return (
        <DrawerContentScrollView>            
            <DrawerItemList {...props}/>
            <DrawerItem label="Tacil_2" onPress={ () => props.navigation.navigate("Tactil")}/>
            <DrawerItem label="Help" onPress={ ()=> Alert.alert("Show link") }/>
        </DrawerContentScrollView>
    );
}