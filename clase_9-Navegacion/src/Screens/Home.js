import React, {useRef} from 'react';

import {
    View,
    StyleSheet,
    Animated,
    PanResponder,
    Button
} from 'react-native';

export function Home({navigation}) { 

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <Button title="Animation" onPress={ () => navigation.navigate("Animation", {id: 86})}></Button>
            <Button title="Tactil" onPress={ ()=> navigation.navigate("Tactil")}></Button>
            <Button title="Open Drawer" onPress={ ()=> navigation.openDrawer()}></Button>
            <Button title="Close Drawer" onPress={ ()=> navigation.closeDrawer()}></Button>
        </View>
    );
}