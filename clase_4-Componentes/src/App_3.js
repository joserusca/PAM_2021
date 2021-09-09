import React, {useState, useEffect} from 'react';
import { 
    Alert, 
    StyleSheet, 
    Text, 
    View, 
    TouchableWithoutFeedback,
    TextInput,
    Modal,
    FlatList,
    Image
} from 'react-native';
import { Tarjeta } from './Components/Tarjeta'

export default function App_3 (){
    const [ color, setColor ] = useState("#ff00aa");
    const [ texto, setTexto ] = useState();
    const [ edad, setEdad ] = useState();
    const [ showModal, setShowModal ] = useState(false);
    const [ datos ] = useState([
        {id: 1, nombre: "Juan", apellido: "Perez", edad: 35},
        {id: 2, nombre: "Pablo", apellido: "Fernandez", edad: 25},
        {id: 3, nombre: "Ernesto", apellido: "Garcia", edad:43},
      ]);
    const [ usuarios, setUsuarios ] = useState();
    const [ usuarioActual, setUsuarioActual ] = useState(null);

    useEffect( () => {
        fetch("https://randomuser.me/api?results=100")
        .then( res => res.json())
        .catch( msg => console.log(msg))
        .then( resultado => 
            setUsuarios(resultado.results)   
        )
    },[]) 

    const mostrar = () => {
        Alert.alert("Hola " + texto + "! ");
    }

    const cambiarColor = () => {
        if(color=="#00ffaa")
            setColor("#ff0000");
        else        
            setColor("#00ffaa");
    }

    function mostrarModal(usuario) {
        console.log(usuario);
        setUsuarioActual(usuario);
        setShowModal(true);
    }
    var usr = "";
    if(usuarioActual!=null)
        usr = (        
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            
                <Image style={{height: 100, width: 100, borderRadius: 100}} source={{uri: usuarioActual.picture.thumbnail}}/>

                <Text style={styles.texto}>{usuarioActual.name.first}</Text>
                <Text style={styles.texto}>{usuarioActual.name.last}</Text>
                <Text style={styles.texto}>{new Date(usuarioActual.dob.date).getFullYear()} ({usuarioActual.dob.age})</Text>

        </View>)
    else
        usr = <Text></Text>;


    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{texto} ({edad})</Text>
            <TextInput style={styles.input}
                onChangeText={ texto => setTexto(texto)}
                placeholder="Ingrese su nombre"
                placeholderTextColor="#000000"
                secureTextEntry={true}
            />
            <TextInput style={styles.input}
                onChangeText={ texto => setEdad(texto)}
                placeholder="Ingrese su edad"
                placeholderTextColor="#000000"
                keyboardType="number-pad"    
                            
            />           

            <TouchableWithoutFeedback 
                //onPress={mostrar}
                onPressIn={cambiarColor}
                //onPressOut={cambiarColor.bind(this, "#ff00aa")}
                >
                <View style={[styles.boton, {backgroundColor: color}]}>
                    <Text>Touch me!</Text>
                </View>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback 
                onPress={() => setShowModal(true)}>
                <View style={[styles.boton, {backgroundColor: color}]}>
                    <Text>Show Modal</Text>                   
                </View>
            </TouchableWithoutFeedback>
            <View style={{justifyContent: 'center'}}>
            <FlatList
             
                data={usuarios}
                renderItem={ ({item}) => <Tarjeta item={item} mostrarModal={mostrarModal}/>}
                // ({item}) => <Text style={styles.texto}
                // onPress={ ()=> Alert.alert(item.name.first)}> - {item.name.first}</Text>
                ItemSeparatorComponent={ () => <View style={{height: 10, width: '100%'}}/>}
                keyExtractor={ (item, index) => index.toString()}
               
            />
            </View>

            <Modal 
                visible={showModal}
                transparent={true}
                animationType="slide"
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal}> 
                    { usr }
                <Text style={styles.textCloseModal} onPress={ ()=> setShowModal(false)}>X</Text>
                    </View>
                </View>

            </Modal>
        </View>
    )
}



const styles = StyleSheet.create({
    textCloseModal: {
        position: "absolute",
        right: 20,
        top: 10,
        fontSize: 20
    },
    modal: {
        width: "100%",
        height: 600,
        backgroundColor: "#cccccc",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    modalContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    container: {
        marginTop: 75,
        flex:1,
        backgroundColor: "#aaaaaa",
    },
    boton: {
        width: 100,
        height: 70,        
        //backgroundColor: "#ff00aa",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"

    },
    input: {
        borderStyle: 'solid',
        borderWidth: 3,
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: 'white'
    },
    texto: {
        fontSize: 30,
    }
})