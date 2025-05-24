import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen({ route }) {
  const { userEmail } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.message}>Hello, {userEmail} 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  message: {
    fontSize: 20,
    color: '#555',
  },
});
