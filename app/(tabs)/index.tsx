import React, { useState, useEffect } from "react";
import { Text, View, Image, Dimensions, StyleSheet, Animated, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RecomendedCard from "../components/RecomendedCard";
import Horizontal from "../components/Horizontal";
import TrendingTopics from "../components/TrendingTopics";
import Post from "../components/Post";
import FabButton from "../components/FabButton";

export default function Index() {

  const [modalVisible,setModalVisible]=useState('false');

  const handlePress = () =>{
    setModalVisible('true');

  }
  const { width, height } = Dimensions.get("window");

  // Image sources
  const images = [
    require("@/assets/images/autum.webp"),
    require("@/assets/images/shutterimg.jpeg"),
    require("@/assets/images/shutterimg2.jpeg"),
    require("@/assets/images/shutterimg3.jpeg"),
  ];

  

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slideAnim = new Animated.Value(-width);
  const textAnim = new Animated.Value(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); 
    }, 4000); 

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0, 
      duration: 300, 
      useNativeDriver: true, 
    }).start();

    if (currentImageIndex > 0) {
      Animated.timing(textAnim, {
        toValue: 0, 
        duration: 300, 
        useNativeDriver: true, 
      }).start();
    } else {
      Animated.timing(textAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [currentImageIndex]);

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView  >
        <View style={styles.imageArea}>
          <Animated.Text style={[styles.imageText, { opacity: textAnim }]}>
            Shot on
            <Text style={{ fontSize: 24 }}> OnePlus </Text> November
          </Animated.Text>

          <Animated.Text
            style={{
              fontSize: 20,
              color: "white",
              position: "absolute",
              zIndex: 3,
              bottom: 20,
              left: 10,
              fontWeight: 500,
              opacity: textAnim, 
            }}
          >
            The Last of Autumn
          </Animated.Text>

          <Animated.Image
            style={[
              {
                width: width,
                height: height * 0.25,
              },
              { transform: [{ translateX: slideAnim }] }, 
            ]}
            source={images[currentImageIndex]} 
            resizeMode="cover"
          />
        </View>
      
       
        <RecomendedCard />
        

        <Horizontal />
        <TrendingTopics />
        <Horizontal />
       <Post/>
       
      </ScrollView>
      <FabButton  />
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  imageArea: {
    position: "relative",
  },
  imageText: {
    color: "white",
    position: "absolute",
    zIndex: 3,
    fontSize: 20,
    top: 20,
    left: 10,
    fontWeight: 500,
  },
});
