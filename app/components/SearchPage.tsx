import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
export default function SearchPage() {
    const handleBack = ()=>{
router.push('/(tabs)')
    }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />

        </TouchableOpacity>
        <TextInput style={styles.main} placeholder="Search..."></TextInput>
      </View>

      <View style={{flexDirection:"row" ,marginLeft:40 ,gap:20  }}>
      <View style={styles.suggestion}>
        <Text style={{color:"white" , fontSize:10 }}>OneplusNord</Text>
      </View>
      <View style={styles.suggestion}>
        <Text style={{color:"white" , fontSize:10 }}>Oneplus 8</Text>
      </View>
      <View style={styles.suggestion}>
        <Text style={{color:"white" , fontSize:10 }}>OnePlus 11R</Text>
      </View>
      <View style={styles.suggestion}>
        <Text style={{color:"white" , fontSize:10 }}>Oneplus 12</Text>
      </View>
     
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row",backgroundColor:"" },

  header: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 420,
    backgroundColor: "",
    flexDirection:"row"
  },
  searchBar: {},
  main: {
    width: "85%",
    marginTop: 10,
    backgroundColor: "white",
    fontSize: 15,
    height: 55,
    marginHorizontal: 10,
    borderRadius: 20,
    padding: 10,
    fontWeight: "bold",
    marginRight:10,

  },
  
  suggestion: {
     justifyContent:"center" ,alignItems:"center",
// alignContent:"center",
    height: 25,
    width: 70,
    backgroundColor: "black",
    marginTop:8,
    borderRadius:30,
    // marginLeft:12,
    gap:20
  },
});
