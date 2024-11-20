import { Button, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { Link, router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/Slice";

export default function PROFILEPAGE() {

  const token =useSelector((state:any)=>state.auth.token) 
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Token updated:", token);
  }, [token]);

  const handleLogout = async()=>{
    await dispatch(logout());
    router.push("/loginPage")

  }
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
      
      <Text style={{ backgroundColor: " ", fontSize: 23, color: "grey" }}>
        Please log in to continue
      </Text>
     {!token? 
      <Link href="/Registration">
      <Text style={{ color: "red", fontSize: 15 }}>Login or register </Text>
    </Link> : 
    <TouchableOpacity onPress={handleLogout}>
      <Text>
        Logout
        </Text></TouchableOpacity>}
       
    </View>
  );
}

const styles = StyleSheet.create({});
