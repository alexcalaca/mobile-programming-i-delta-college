import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.result}>{expression || '0'}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Enter expression'
        placeholderTextColor='#aaa'
        value={expression}
        onChangeText={setExpression}
      />
      <View style={styles.buttonsContainer}>
        {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', 'C', '=', '/', '⌫'].map((btn) => (
          <TouchableOpacity
            key={btn}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{btn}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  displayContainer: {
    padding: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    alignItems: 'center',
  },
  result: {
    fontSize: 40,
    color: '#4CAF50',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#333',
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '80%',
  },
  button: {
    width: '22%',
    margin: 8,
    height: 60,
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 28,
    color: '#fff',
  },
});
