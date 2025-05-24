import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet } from 'react-native';

export default function ProfileScreen({ route }) {
  const { name, email, password } = route.params;

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleSave = () => {
    setIsEditing(false);
    alert(`Name updated to: ${editedName}`);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://i.pravatar.cc/150?u=' + email,
        }}
        style={styles.avatar}
      />

      <Text style={styles.label}>Name:</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={editedName}
          onChangeText={setEditedName}
        />
      ) : (
        <Text style={styles.text}>{editedName}</Text>
      )}

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.text}>{email}</Text>

      <Text style={styles.label}>Password:</Text>
      <Text style={styles.text}>••••••••</Text>

      <View style={styles.buttonContainer}>
        {isEditing ? (
          <>
            <Button title="Save" onPress={handleSave} />
            <Button title="Cancel" onPress={() => {
              setIsEditing(false);
              setEditedName(name);
            }} />
          </>
        ) : (
          <Button title="Edit Name" onPress={() => setIsEditing(true)} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 24,
  },
  label: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  text: {
    fontSize: 18,
    alignSelf: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 8,
    fontSize: 18,
    width: '100%',
  },
  buttonContainer: {
    marginTop: 24,
    width: '100%',
    gap: 12,
  },
});
