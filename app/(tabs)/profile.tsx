import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function PROFILEPAGE() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        backgroundColor: "white",
      }}
    >
      
    

       
       <View style={{ backgroundColor: ""  }}>
        <Image
          style={{ borderRadius: 100 }}
          source={require("@/assets/images/loginPeople.jpeg")}
        ></Image>
        </View>
      
      <Text style={{ backgroundColor: " ", fontSize: 16, color: "grey" }}>
        Please log in to continue
      </Text>
      <Link href="/Registration">
        <Text style={{ color: "red", fontSize: 12 }}>Login or register </Text>
      </Link>
       
    </View>
  );
}

const styles = StyleSheet.create({});
