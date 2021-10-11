import React, {useState, useEffect} from 'react';

import {
    View,
    StyleSheet,
    Button,
    Text
} from 'react-native';

import { Card } from '../Components/Card';

export function Animation({navigation, route}) {

    const { id } = route.params;

    var arreglo = [1,34,5,4, 40, 100];
    var listado = arreglo.map((item) => 
        <Card value={item} key={item}/>
    )

    useEffect( () => {
        console.log("Refresh");
        const unsuscribe = navigation.addListener('focus', ()=> {
            console.log("Focus");
        });        
        return unsuscribe;
    }, [navigation]);

    console.log(id);
    return (  
        <View style={styles.container}>
            { listado }
            <Text>{id}</Text>
            <View>
                <Button title="Go To Tactil" onPress={()=> navigation.navigate("Tactil")}/>
                <Button title="Go To Animation" onPress={()=> navigation.navigate("Animation")}/>
                <Button title="Go To Self" onPress={()=> navigation.push("Animation")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:10,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: 'red',      
        borderRadius: 20  
    },
    box2: {
        width: 150,
        height: 150,
        backgroundColor: 'blue',    
    }
})
