import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containertwo}>
        <img style={styles.image} src="https://assets.stickpng.com/images/5ece4ff9123d6d0004ce5f89.png"></img>
      </View>
      <Text style={styles.paragraph}>
        We play the music. You enjoy it. Deal?
      </Text>
      <View style={styles.buttons}>
        <button type="button" class="buttonOne" style={styles.buttonOne}>SIGN UP</button>
        <button type="button" class="buttonTwo" style={styles.buttonTwo}>LOG IN</button>
      </View>
      <Text style={styles.paragraphtwo}>
        By clicking on sign up, you agree to Spotify's Terms and Conditions of Use.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  containertwo: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    padding: 20,
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraphtwo: {
    margin: 24,
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 50,
  },
  buttons: {
    paddingTop: 30,
  },
  buttonOne: {
    padding: 15,
    margin: 5,
    backgroundColor: '#1EB955',
    color: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 0,
    borderColor: '#457500'
  },
  buttonTwo: {
    padding: 15,
    margin: 5,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    color: 'black',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'gainsboro',
  },
});
