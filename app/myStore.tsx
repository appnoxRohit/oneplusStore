import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons/";
import { Link } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/app/store/CartSlice";
import allProducts from "@/constants/Data";

export default function MyFollowing() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const dispatch = useDispatch();

  const totalQuantity = useSelector((state:any) => state.cart.totalQuantity); 
  const length = useSelector((state:any) => state.cart.items.length);
  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };

  const renderProduct = ({ item }: any) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.imageUri }} style={styles.productImage} />
      <Text style={styles.productName} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity
        style={styles.cartIcon}
        onPress={() => handleAddToCart(item)}
      >
        <AntDesign name="shoppingcart" size={24} color="#EA261A" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.pageContainer}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>OnePlus Store</Text>
        <Link href="/components/addToCart" style={styles.cartContainer}>
        <View>
          <AntDesign name="shoppingcart" size={28} color="white" />
          {totalQuantity > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{length}</Text>
            </View>
          )}
          </View>
        </Link>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.sidebar}>
          <Text style={styles.sidebarTitle}>Categories</Text>
          <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => setSelectedCategory("All")}
          >
            <Text style={styles.sidebarItemText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => setSelectedCategory("Phone")}
          >
            <Text style={styles.sidebarItemText}>Phones</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sidebarItem}
            onPress={() => setSelectedCategory("Accessories")}
          >
            <Text style={styles.sidebarItemText}>Accessories</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={filteredProducts}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#F1F1F1",
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#EA261A",
    padding: 20,
    alignItems: "center",
  },
  headingText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  cartContainer: {
    
    position: "relative",
  },
  cartBadge: {
    position: "absolute",
    top: -2,
    right:-4,
    
    backgroundColor: "white",
    borderRadius: 10,
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: "#EA261A",
    fontSize: 12,
    fontWeight: "bold",
  },
  contentContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  sidebar: {
    width: 100,
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: "#fff",
    elevation: 2,
  },
  sidebarTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sidebarItem: {
    paddingVertical: 10,
  },
  sidebarItemText: {
    fontSize: 16,
    color: "#333",
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  productCard: {
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "45%",
    height: 250,
    shadowColor: "#31a2f8",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  productImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
    textAlign: "center",
  },
  productPrice: {
    fontSize: 14,
    color: "#EA261A",
    marginBottom: 10,
    textAlign: "center",
  },
  cartIcon: {
    marginTop: 10,
  },
});
