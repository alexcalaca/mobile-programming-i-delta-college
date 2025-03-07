import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleOperation = (operator) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    if (isNaN(number1) || isNaN(number2)) {
      setResult('Invalid Input');
      return;
    }

    switch (operator) {
      case '+':
        setResult((number1 + number2).toString());
        break;
      case '-':
        setResult((number1 - number2).toString());
        break;
      case '*':
        setResult((number1 * number2).toString());
        break;
      case '/':
        setResult(number2 !== 0 ? (number1 / number2).toString() : 'Error');
        break;
      default:
        setResult('Error');
    }
  };

  return (
    <View style={styles.container}>
      {isVisible && (
        <View style={styles.displayContainer}>
          <Text 
            style={styles.result} 
            onLongPress={() => setResult('')}>
            {result}
          </Text>
        </View>
      )}
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Enter first number'
        placeholderTextColor='#aaa'
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Enter second number'
        placeholderTextColor='#aaa'
        value={num2}
        onChangeText={setNum2}
      />
      <View style={styles.buttonsContainer}>
        {['+', '-', '*', '/'].map((operator) => (
          <TouchableOpacity
            key={operator}
            style={styles.button}
            onPress={() => handleOperation(operator)}
          >
            <Text style={styles.buttonText}>{operator}</Text>
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
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  button: {
    flex: 1,
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
