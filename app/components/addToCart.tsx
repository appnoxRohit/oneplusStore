import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '@/app/store/CartSlice';
import { AntDesign } from '@expo/vector-icons';

export default function AddToCart() {
    
  const cartItems = useSelector((state:any) => (state.cart.items));

  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUri }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}> {item.price}</Text>
        <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
        <TouchableOpacity
          onPress={() => dispatch(removeFromCart(item.id))}
          style={styles.removeButton}
        >
          <AntDesign name="delete" size={20} color="white" />
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.heading}>Your Cart</Text>

      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.emptyText}>Your cart is empty!</Text>
      )}

      {cartItems.length > 0 && (
        <TouchableOpacity
          style={styles.clearCartButton}
          onPress={() => dispatch(clearCart())}
        >
          <Text style={styles.clearCartText}>Clear Cart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EA261A',
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginTop: 50,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 4,
    shadowColor: '#ed0808',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    
    width: 80,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#EA261A',
    marginVertical: 5,
  },
  quantity: {
    fontSize: 14,
    color: '#666',
  },
  removeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#EA261A',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    fontSize: 14,
    color: 'white',
    marginLeft: 5,
  },
  clearCartButton: {
    backgroundColor: '#EA261A',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  clearCartText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
