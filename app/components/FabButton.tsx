import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const FABIcon = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.fab} onPress={toggleModal}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>

      {modalVisible && (
        <>
          <View style={styles.modal}>
            {/* First Row of Buttons (Icons) */}
            <View style={styles.iconsRow}>
              <TouchableOpacity style={styles.modalButton} onPress={() => alert('Button 1 pressed')}>
                <MaterialCommunityIcons name="view-gallery-outline" size={24} color="red" />
                <Text style={styles.buttonText}>Moment</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={() => alert('Button 2 pressed')}>
                <MaterialIcons name="article" size={24} color="red" />
                <Text style={styles.buttonText}>Article</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={() => alert('Button 3 pressed')}>
                <MaterialIcons name="feedback" size={24} color="red" />
                <Text style={styles.buttonText}>Feedback</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={() => alert('Button 4 pressed')}>
                <FontAwesome5 name="poll" size={24} color="red" />
                <Text style={styles.buttonText}>Poll</Text>
              </TouchableOpacity>
            </View>

            {/* Close Button */}
            <View style={styles.closeButtonContainer}>
              <TouchableWithoutFeedback onPress={toggleModal}>
                <View style={styles.closeButton}>
                  <Text style={styles.buttonText}>Close</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  fab: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#EA261A',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  modal: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    zIndex: 2,
    elevation: 10,
    height:150,
    width: '90%',
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap', 
    marginBottom: 10,
  },
  modalButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '',
    height: 50,
    width: 65,
    borderRadius: 10,
    margin: 5,
    padding: 5,
  },
  buttonText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 13,
  },
  closeButtonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  closeButton: {
    backgroundColor: '',
    height: 40,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
  },
});

export default FABIcon;
