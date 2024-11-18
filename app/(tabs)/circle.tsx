import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function circle() {
    // Dummy data for posts
    const posts = [
      { id: '1', title: 'OnePlus 12 Release: What to Expect', date: 'Nov 15, 2024' },
      { id: '2', title: 'Is OxygenOS 14 the Best Update Yet?', date: 'Nov 14, 2024' },
      { id: '3', title: 'Top Features of OnePlus 11', date: 'Nov 12, 2024' },
      { id: '4', title: 'OnePlus Camera vs. konkon 15 Pro Max', date: 'Nov 11, 2024' },
      { id: '5', title: 'OnePlus Camera vs. sony Pro Max', date: 'Nov 11, 2024' },
      { id: '6', title: 'OnePlus Camera vs. iPhone 16 Pro Max', date: 'Nov 11, 2024' },
    ];
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://example.com/oneplus-logo.png' }}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>OnePlus Community</Text>
      </View>

      {/* Circle Page Content */}
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.postItem}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postDate}>{item.date}</Text>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
        style={styles.postsList}
      />

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab} onPress={() => alert('Create New Post')}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#EA261A',  // OnePlus Red
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  postsList: {
    flex: 1,
    paddingHorizontal: 15,
  },
  postItem: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  postDate: {
    color: 'grey',
    fontSize: 14,
    marginVertical: 5,
  },
  viewButton: {
    backgroundColor: '#EA261A', // OnePlus Red
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#EA261A',  // OnePlus Red
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});


