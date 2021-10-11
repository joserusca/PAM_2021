import React, {useState, useRef } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Animated,
    Button,
    Easing,
    TouchableWithoutFeedback
} from 'react-native';

export function Card(props) {
    const rotMovimiento = useRef(new Animated.Value(0)).current;

    const movimiento = ()=>{
            Animated.timing(rotMovimiento, {
                toValue: 1,
                duration: 1000,                
                useNativeDriver: true,
            }).start();
            console.log("1");
    }
    
    const spinAValue = rotMovimiento.interpolate({
        inputRange: [0,1],
        outputRange: [ '0deg', '180deg' ]
    })

    const spinBValue = rotMovimiento.interpolate({
        inputRange: [0,1],
        outputRange: [ '180deg', '0deg' ]
    })

    return (
        <TouchableWithoutFeedback onPress={movimiento}>
            <View>
            <Animated.View style={[styles.front,  {transform: [{rotateX: spinAValue}] }]}/>
            <Animated.View style={[styles.back,  {transform: [{rotateX: spinBValue}] }]}>
                <Text style={{fontSize: 30}}>{props.value}</Text>
            </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    front: {
        width: 80,
        height: 100,
        backgroundColor: 'red',      
        borderRadius: 20,
        margin: 10,
        backfaceVisibility: 'hidden'
    },
    back: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 100,
        backgroundColor: 'blue',      
        borderRadius: 20,
        margin: 10,
        position: 'absolute',
        backfaceVisibility: 'hidden'
    }

})