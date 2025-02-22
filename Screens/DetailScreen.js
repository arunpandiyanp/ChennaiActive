import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ImageBackground } from 'react-native';

const DetailScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
          <ImageBackground 
            source={require('../images/flatlistImages/motionless.jpg')} // Replace 'image_url_here' with the actual URL or use require for local images
            style={styles.image} 
          >
              <View style={{backgroundColor:'clear',height:50,width:50,borderRadius:25,justifyContent:'flex-start',top:60}}>
              <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>

      <ImageBackground 
      source={require('../images/homeicons/menu.png')} 
      style={styles.backgroundImage}
    />
    </TouchableOpacity>

        </View> 
            </ImageBackground>
          <Text style={styles.title}>BMTH "Church of Genxsis" World Concert</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Price: 45,00 USD</Text>
            <Text style={styles.infoText}>Date: Nov 4-6</Text>
            <Text style={styles.infoText}>Location: Manahan</Text>
          </View>
          <Text style={styles.description}>
            It’s a fictional cult they’ve made up as part of the storyline in this album, which explores themes of control, faith, and the dark side of human nature. This creative narrative serves as backdrop for their music, adding a layer of depth.
          </Text>
          <Button title="Get Ticket" onPress={() => {}} />
        </View>
      );
    
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#121212', // Dark background color
    },
    image: {
      width: '100%',
      height: 200,
      marginBottom: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#FFFFFF', // White text color
      marginBottom: 16,
    },
    infoContainer: {
      marginBottom: 16,
      flexDirection:'row'
    },
    infoText: {
      fontSize: 16,
      color: '#BBBBBB', // Light gray text color
      marginBottom: 4,
    },
    description: {
      fontSize: 16,
      color: '#BBBBBB', // Light gray text color
      marginBottom: 16,
    },
    backgroundImage: {
        justifyContent: 'center',
        alignItems: 'center',
        height:"100%",
        width:"100%",
      },
      backButton: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    
  });
  

export default DetailScreen;
