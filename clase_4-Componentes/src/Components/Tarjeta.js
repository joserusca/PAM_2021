import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export function Tarjeta(props) {
    console.log(props.item.picture.thumbnail);
    return (
        <TouchableOpacity onPress={props.mostrarModal.bind(this, props.item)}>
        <View style={styles.Tarjeta}>
            <View style={styles.viewFoto}>
                <Image style={styles.imagen} source={{uri: props.item.picture.thumbnail}}/>
            </View>
            <View  style={styles.viewData}>
                <Text style={styles.texto}>{props.item.name.first}</Text>
                <Text style={styles.texto}>{props.item.name.last}</Text>
                <Text style={styles.texto}>{new Date(props.item.dob.date).getFullYear()} ({props.item.dob.age})</Text>
                
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 20
    },
    Tarjeta: {
        marginLeft: 30,
        marginRight: 30,
        height: 160,
        backgroundColor: 'orange',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2
    },
    imagen: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    viewFoto: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewData: {
        flex:1
    }
})