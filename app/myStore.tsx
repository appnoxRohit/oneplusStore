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

const allProducts = [
  {
    id: "1",
    name: "OnePlus 11 5G",
    price: "$899",
    imageUri: "https://m.media-amazon.com/images/I/61amb0CfMGL.jpg",
    category: "Phone",
  },
  {
    id: "2",
    name: "OnePlus Nord N200",
    price: "$249",
    imageUri:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQprhCN5qCAJ5C-3lyvSi8CD8-7h80PEo6-_Jd1DOg5gEk2AUohqTCmMKYhBKqdRB6q9XP6ge48TZljd-c4wP180t--UR7gj25lEkeqLda72GH6Y19lesvZeNwY0oM_8U7aNtFMPQ&usqp=CAc",
    category: "Phone",
  },
  {
    id: "3",
    name: "OnePlus Buds Pro",
    price: "$149",
    imageUri:
      "data:image/webp;base64,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",
    category: "Accessories",
  },
  {
    id: "4",
    name: "OnePlus Watch",
    price: "$199",
    imageUri:
      "data:image/webp;base64,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",
    category: "Accessories",
  },
  {
    id: "5",
    name: "OnePlus Power Bank",
    price: "$49",
    imageUri:
      "data:image/jpeg;base64,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",
    category: "Accessories",
  },
  {
    id: "6",
    name: "OnePlus 10 Pro",
    price: "$899",
    imageUri:
      "data:image/webp;base64,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",
    category: "Phone",
  },
  {
    id: "7",
    name: "OnePlus Nord CE 5G",
    price: "$399",
    imageUri: "https://via.placeholder.com/150",
    category: "Phone",
  },
  {
    id: "8",
    name: "OnePlus Buds Z",
    price: "$59",
    imageUri: "https://via.placeholder.com/150",
    category: "Accessories",
  },
  {
    id: "9",
    name: "OnePlus 9 Pro",
    price: "$969",
    imageUri: "https://via.placeholder.com/150",
    category: "Phone",
  },
  {
    id: "10",
    name: "OnePlus 8T",
    price: "$749",
    imageUri: "https://via.placeholder.com/150",
    category: "Phone",
  },
  {
    id: "11",
    name: "OnePlus 7T Pro",
    price: "$699",
    imageUri: "https://via.placeholder.com/150",
    category: "Phone",
  },
  {
    id: "12",
    name: "OnePlus 8",
    price: "$599",
    imageUri: "https://via.placeholder.com/150",
    category: "Phone",
  },
  {
    id: "13",
    name: "OnePlus Nord N100",
    price: "$179",
    imageUri: "https://via.placeholder.com/150",
    category: "Phone",
  },
  {
    id: "14",
    name: "OnePlus 9R",
    price: "$499",
    imageUri: "https://via.placeholder.com/150",
    category: "Phone",
  },
  {
    id: "15",
    name: "OnePlus 9",
    price: "$729",
    imageUri: "https://via.placeholder.com/150",
    category: "Phone",
  },
  {
    id: "16",
    name: "OnePlus Buds",
    price: "$79",
    imageUri: "https://via.placeholder.com/150",
    category: "Accessories",
  },
  {
    id: "17",
    name: "OnePlus Nord 2",
    price: "$499",
    imageUri: "https://via.placeholder.com/150",
    category: "Phone",
  },
  {
    id: "18",
    name: "OnePlus 10T",
    price: "$649",
    imageUri: "https://via.placeholder.com/150",
    category: "Phone",
  },
  {
    id: "19",
    name: "OnePlus Power Bank 10000mAh",
    price: "$59",
    imageUri: "https://via.placeholder.com/150",
    category: "Accessories",
  },
  {
    id: "20",
    name: "OnePlus Watch Harry Potter Edition",
    price: "$249",
    imageUri: "https://via.placeholder.com/150",
    category: "Accessories",
  },
];

export default function MyFollowing() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  const renderProduct = ({ item }: any) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.imageUri }} style={styles.productImage} />
      <Text style={styles.productName} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.cartIcon}>
        <AntDesign name="shoppingcart" size={24} color="#EA261A" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.pageContainer}>
      {/* Heading Section */}
      <View style={styles.heading}>
        <Text style={styles.headingText}>OnePlus Store</Text>
      </View>

      {/* Sidebar and Product Section */}
      <View style={styles.contentContainer}>
        {/* Sidebar */}
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

        {/* Products */}
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
    backgroundColor: "#F1F1F1",
  },
  heading: {
    backgroundColor: "#EA261A", // OnePlus Red
    padding: 20,
    alignItems: "center",
  },
  headingText: {
    color: "white",
    fontSize: 24,
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
    width: "45%", // Ensures uniform card width
    height: 250, // Fixed height for all cards
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: "100%",
    height: 120, // Fixed height for images
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "contain", // Ensures image maintains aspect ratio
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
    color: "#EA261A", // OnePlus Red
    marginBottom: 10,
    textAlign: "center",
  },
  cartIcon: {
    marginTop: 10,
  },
});
