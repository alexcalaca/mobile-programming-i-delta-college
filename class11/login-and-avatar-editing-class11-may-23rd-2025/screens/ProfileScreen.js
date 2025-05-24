import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet, Pressable, Alert } from 'react-native';

export default function ProfileScreen({ route }) {
  const { name, email, password } = route.params;

  const [profile, setProfile] = useState({ name, email, password });
  const [editableField, setEditableField] = useState(null);
  const [tempProfile, setTempProfile] = useState(profile);

  const handleSave = () => {
    setProfile(tempProfile);
    setEditableField(null);
    Alert.alert('Profile updated!');
  };

  const handleCancel = () => {
    setTempProfile(profile);
    setEditableField(null);
  };

  const handleDoubleTap = (field) => {
    if (editableField === null) {
      setEditableField(field);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?u=' + profile.email }}
        style={styles.avatar}
      />

      {/* Name */}
      <Text style={styles.label}>Name:</Text>
      <Pressable onPress={() => handleDoubleTap('name')} delayLongPress={250} delayPressIn={200}>
        {editableField === 'name' || editableField === 'all' ? (
          <TextInput
            style={styles.input}
            value={tempProfile.name}
            onChangeText={(text) => setTempProfile({ ...tempProfile, name: text })}
          />
        ) : (
          <Text style={styles.text}>{profile.name}</Text>
        )}
      </Pressable>

      {/* Email */}
      <Text style={styles.label}>Email:</Text>
      <Pressable onPress={() => handleDoubleTap('email')}>
        {editableField === 'email' || editableField === 'all' ? (
          <TextInput
            style={styles.input}
            value={tempProfile.email}
            onChangeText={(text) => setTempProfile({ ...tempProfile, email: text })}
          />
        ) : (
          <Text style={styles.text}>{profile.email}</Text>
        )}
      </Pressable>

      {/* Password */}
      <Text style={styles.label}>Password:</Text>
      <Pressable onPress={() => handleDoubleTap('password')}>
        {editableField === 'password' || editableField === 'all' ? (
          <TextInput
            style={styles.input}
            secureTextEntry
            value={tempProfile.password}
            onChangeText={(text) => setTempProfile({ ...tempProfile, password: text })}
          />
        ) : (
          <Text style={styles.text}>••••••••</Text>
        )}
      </Pressable>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {editableField ? (
          <>
            <Button title="Save" onPress={handleSave} />
            <Button title="Cancel" onPress={handleCancel} />
          </>
        ) : (
          <Button title="Edit" onPress={() => setEditableField('all')} />
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
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 8,
    fontSize: 18,
    marginBottom: 8,
    width: 300,
  },
  buttonContainer: {
    marginTop: 24,
    width: '100%',
    gap: 12,
  },
});
