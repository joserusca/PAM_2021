import React, {useRef} from 'react';

import {
    View,
    StyleSheet,
    Animated,
    PanResponder,
    Button
} from 'react-native';

export function Tactil({navigation}) {
    const pan = useRef(new Animated.ValueXY()).current;
    const opacity = useRef(new Animated.Value(1)).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                console.log("Grant " + pan.x._value);
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value,
                });
            },                        
            onPanResponderRelease: (e, gesto) => {
                if(gesto.moveY<200) {
                    pan.flattenOffset();
                    Animated.timing(opacity, {
                        toValue: 0,
                        duration: 1000,
                        useNativeDriver: false
                    }).start()
                }else {
                    Animated.spring(pan,{
                        toValue: {x: 0, y: 0},
                        friction: 5,
                        useNativeDriver: false
                    }).start()
                }
            },
            onPanResponderMove: 
                Animated.event(
                    [null,
                    {  dy: pan.y},
                ], {useNativeDriver: false})                       
        })     
    ).current

    var init = () => {
        opacity.setValue(1);
        pan.setValue({x: 0, y:0});
    } 

    return  (
        <View style={styles.container} > 
            <View style={styles.drop}>

            </View>
            <Animated.View  style={[styles.box, {
                transform: [{translateX: pan.x}, {translateY: pan.y}],
                // opacity: opacity
            }]} 
            {...panResponder.panHandlers}
            > 
            
            </Animated.View>
            <Button title="Reset" onPress={init}/>
            <Button title="Go To Animation" onPress={ ()=> navigation.navigate("Animation") }/>
        </View>
    )
}

var styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    box: {
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: 'blue'
    },
    drop: {
        backgroundColor: 'black',
        height: 200,
        width: '100%'
    }
})