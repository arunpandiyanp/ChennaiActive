// File: launchscreen.tsx

import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const LaunchScreen = ({navigation}) => {
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
    backgroundColor:'blue',
    height:'100%',
    width:'100%',
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
    fontWeight:'bold'
  },
  button: {
    backgroundColor: 'teal',
   height:50,
   width:200,
    borderRadius: 25,
    justifyContent:'center',
    alignSelf:'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf:'center'
  },
});

export default LaunchScreen;
