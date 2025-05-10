import React, { useState } from 'react';
import {
  View,
  Text,
  SectionList,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function App() {
  const [sections, setSections] = useState([
    { title: 'A', data: ['Alice', 'Andrew'] },
    { title: 'B', data: ['Bob', 'Bella'] },
    { title: 'C', data: ['Carlos', 'Cecilia'] },
  ]);

  const [newName, setNewName] = useState('');

  const handleAddName = () => {
    if (!newName.trim()) return;

    const name = newName.trim();
    const firstLetter = name[0].toUpperCase();

    const updatedSections = [...sections];
    const sectionIndex = updatedSections.findIndex(
      (sec) => sec.title === firstLetter
    );

    if (sectionIndex >= 0) {
      updatedSections[sectionIndex].data.push(name);
    } else {
      updatedSections.push({ title: firstLetter, data: [name] });
      updatedSections.sort((a, b) => a.title.localeCompare(b.title));
    }

    setSections(updatedSections);
    setNewName('');
    Keyboard.dismiss();
  };  

  const handleDeleteName = (sectionTitle, itemToRemove) => {
    const updatedSections = sections.map((section) => {
      if (section.title !== sectionTitle) return section;

      const filteredData = section.data.filter((item) => item !== itemToRemove);
      return { ...section, data: filteredData };
    });

    setSections(updatedSections);
  };

  const confirmDelete = (sectionTitle, itemToRemove) => {
    Alert.alert(
      'Confirm Deletion',
      `Are you sure you want to delete "${itemToRemove}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => handleDeleteName(sectionTitle, itemToRemove),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type a name and press enter"
        value={newName}
        onChangeText={setNewName}
        onSubmitEditing={handleAddName}
        returnKeyType="done"
      />

      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, section }) => (
          <TouchableOpacity onPress={() => confirmDelete(section.title, item)}>
            <Text style={styles.item}>{item}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.header}>
              {section.title}
              <Text style={styles.headerCount}> ({section.data.length})</Text>
            </Text>
            {section.data.length === 0 && (
              <Text style={styles.emptyItem}>No more items</Text>
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  sectionHeaderContainer: {
    paddingBottom: 4,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#f4f4f4',
    paddingVertical: 4,
    paddingLeft: 4,
  },
  headerCount: {
    fontSize: 14,
    color: '#888',
  },
  item: {
    fontSize: 16,
    paddingVertical: 8,
    paddingLeft: 10,
  },
  emptyItem: {
    backgroundColor: '#fdd',
    color: '#a00',
    fontStyle: 'italic',
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
});
