import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, SafeAreaView, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function social() {
  const posts = [
    {
      id: '1',
      username: 'techlover123',
      imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQEOS-b83YWOSeYdBzWWsEeENYrajb8sROQ&s',
      description: 'OnePlus 12 is a game-changer, can\'t wait for the official release!',
      likes: 125,
      comments: [
        { id: '1', username: 'user1', comment: 'I totally agree!' },
        { id: '2', username: 'user2', comment: 'Excited for the new features!' },
      ],
    },
    {
      id: '2',
      username: 'gadgetgeek',
      imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzm4DZBM2Huqn6jIc4xOcL3WKMz5RyKzaow&s',
      description: 'OxygenOS 14 is amazing. So smooth and customizable!',
      likes: 200,
      comments: [
        { id: '1', username: 'user3', comment: 'The customization is insane!' },
        { id: '2', username: 'user4', comment: 'Love the new updates!' },
      ],
    },
    // Add more posts as necessary
  ];
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://example.com/oneplus-logo.png' }}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>OnePlus Social</Text>
      </View>

      {/* Social Feed */}
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.postItem}>
            {/* Post Header */}
            <View style={styles.postHeader}>
              <Image
                source={{ uri: 'https://example.com/user-avatar.jpg' }}
                style={styles.avatar}
              />
              <Text style={styles.username}>{item.username}</Text>
            </View>

            {/* Post Image */}
            <Image source={{ uri: item.imageUri }} style={styles.postImage} />

            {/* Post Description */}
            <Text style={styles.description}>{item.description}</Text>

            {/* Likes and Comments */}
            <View style={styles.actions}>
              <View style={styles.actionRow}>
                <TouchableOpacity style={styles.actionButton}>
                  <AntDesign name="hearto" size={20} color="black" />
                  <Text style={styles.actionText}>{item.likes} Likes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <MaterialIcons name="comment" size={20} color="black" />
                  <Text style={styles.actionText}>{item.comments.length} Comments</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Comments Section */}
            {item.comments.map((comment) => (
              <View key={comment.id} style={styles.comment}>
                <Text style={styles.commentUser}>{comment.username}:</Text>
                <Text style={styles.commentText}>{comment.comment}</Text>
              </View>
            ))}
            
            {/* Add a comment */}
            <TextInput style={styles.commentInput} placeholder="Add a comment..." />
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
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
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
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
  },
  description: {
    color: '#333',
    fontSize: 16,
    marginVertical: 10,
  },
  actions: {
    marginTop: 10,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 5,
    color: 'black',
    fontSize: 14,
  },
  comment: {
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 5,
  },
  commentUser: {
    fontWeight: 'bold',
  },
  commentText: {
    fontSize: 14,
    color: 'grey',
  },
  commentInput: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
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

