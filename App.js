import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Text } from 'react-native';

export default function App() {
  const [myGuess, setMyGuess] = React.useState(null);
  const [title, setTitle] = React.useState('Guess a number between 1-100');
  const [randomNumber] = React.useState(Math.floor(Math.random() * 100) + 1);
  const [count, setCount] = React.useState(0);

  const guess = () => {
    
    if (myGuess > randomNumber) {
      setTitle('Your guess ' + myGuess + ' is too high!')
    } else if (myGuess < randomNumber) {
      setTitle('Your guess ' + myGuess + ' is too low!')
    } else {
      Alert.alert('You guessed the number in ' + count + ' guesses')
    }
    setCount(count + 1)
  };
  
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setMyGuess}
        value={myGuess}
        keyboardType="numeric"
        clearButtonMode="always"
      />
      <View style={styles.button}>
      <Button onPress={guess} title="Make a guess" />
      
      </View>
      <StatusBar style="auto" />
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
  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  }
});
