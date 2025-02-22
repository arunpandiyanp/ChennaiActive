import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const LaunchScreen = ({ navigation }) => {

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      console.log('iOS Permission Result: ', result);
      if (result === RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
          },
          (error) => {
            console.error(error);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }
    } else if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Required',
          message: 'We need access to your location',
        }
      );
      console.log('Android Permission Result: ', granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
          },
          (error) => {
            console.error(error);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <ImageBackground 
      source={require('../images/launchImage.jpeg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.tagline}>Connecting Communities, Creating Memories</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    height: '100%',
    width: '100%',
  },
  overlay: {
    padding: 20,
    borderRadius: 10,
  },
  tagline: {
    fontSize: 34,
    color: 'teal',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'teal',
    height: 50,
    width: 200,
    borderRadius: 25,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
});

export default LaunchScreen;
