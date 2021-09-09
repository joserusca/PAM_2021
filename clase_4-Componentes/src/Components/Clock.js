import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    Button,
    Alert,
    Text
} from 'react-native';
import styles from './Estilos';

export default function Clock() {
    const [ cont, setCont ] = useState(new Date().toLocaleTimeString());
    const [ isRunning, setIsRunning ] = useState(false);

    function startWatch() {
        setIsRunning(true);
        idTimer = setInterval(() => {
            //this.setState({cont: new Date().toLocaleTimeString(), isRunning: true});
            setCont(new Date().toLocaleTimeString());
        }, 1000);
    }

    function stopWatch() {
        clearInterval(idTimer);
        //this.setState({isRunning: false});
        setIsRunning(false);
    }

    useEffect(() => {
        //startWatch()
        console.log("init!");
    }, []);

    return (
        <View style={styles.tarjeta}>
            <Text style={styles.tarjetaTexto}>{cont}</Text>
            <Button title="Start Watch!" onPress={startWatch} disabled={isRunning} ></Button>
            <Button title="Stop Watch!" onPress={stopWatch} disabled={!isRunning} ></Button>
        </View>
    )
}



