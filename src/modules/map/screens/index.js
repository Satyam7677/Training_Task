import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Marker, PROVIDER_GOOGLE, Heatmap} from 'react-native-maps';
import MapView from 'react-native-maps';
import coordinates from '../../../utils/mapData';

const MapScreen = () => {
  const [marker, setMarker] = useState({
    latitude: 28.606077,
    longitude: 77.367275,
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        maxZoomLevel={20}
        minZoomLevel={1}
        minPoints={2}
        initialRegion={{
          latitude: 28.606077,
          longitude: 77.367275,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
        zoomEnabled={true}
        // showsUserLocation={true}
        // showsMyLocationButton={true}
        onPress={element => {
          setMarker(element.nativeEvent.coordinate);
        }}>
        {coordinates.map((item, index) => {
          return <Marker coordinate={item} key={index} />;
        })}
        <Marker coordinate={marker} />
        <Heatmap points={coordinates} radius={100} />
      </MapView>
    </SafeAreaView>
  );
};
export default MapScreen;
