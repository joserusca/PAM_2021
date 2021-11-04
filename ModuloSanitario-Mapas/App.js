import React, { useEffect, useState} from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView from 'react-native-maps';

export default function App() {
  const [ initialPosition, setInitialPosition ] = useState(null);
  const [ lastPosition, setLastPosition ] = useState(null);
  var watchID = null;

  useEffect( ()=> {
    console.log("Start location");
    Geolocation.getCurrentPosition(
      position => {
        console.log(position.coords.latitude);
       setInitialPosition(position);        
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 2000, maximumAge: 1000},
    );
    watchID = Geolocation.watchPosition(position => {
      console.log("watchPosition");
      setLastPosition(position);      
    });

    return function () {
      watchID != null && Geolocation.clearWatch(watchID);
    }
  }, [])

  if(initialPosition===null)
    var map = <MapView></MapView>;  
  else
    var map = (      <MapView style={styles.map}
    initialRegion={{
      latitude: initialPosition.coords.latitude,
      longitude: initialPosition.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    />);
  return (
    <View style={{flex:1}}>
      <View style={{flex:1}}>

      {map}
      </View>
      <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
        <Text>
          <Text>Initial position: </Text>
          {JSON.stringify(initialPosition)}
        </Text>
        <Text>
          <Text>Current position: </Text>
          {JSON.stringify(lastPosition)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});