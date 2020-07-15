import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function InicioScreen({ navigation }) {
  return (
    <View style={styles.container}>
    <Text style={styles.instructions}>
        Bienvenido(a)
      </Text>

      <Image source={require('./fall-vibes.jpg')} style={styles.logo} />
      
      <TouchableOpacity onPress={() => {navigation.navigate('Board');}} style={styles.button}>
        <Text style={styles.buttonText}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color:'#888',
    fontSize: 28,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, 
});
