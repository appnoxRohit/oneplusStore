import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TrendingTopics() {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          Trending Topics
        </Text>
        <Text
          style={{
            color: "#EA261A",
            fontWeight: "bold",
            fontSize: 12,
            paddingRight: 8,
          }}
        >
          {" "}
          All Topics
        </Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.mainText}># OxygenOs15</Text>
        <Text  style={{color:"grey",fontSize:12,marginTop:3}}> 2194 Threads . 68.7k views </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{ marginTop: 13,
        marginBottom:5},
  header: {
    backgroundColor: "",
    flexDirection: "row",

    paddingLeft: 10,
    justifyContent: "space-between",
  },
  main:{
    marginTop:10,
    backgroundColor:"#efeeee",
    fontSize:15,
    height:55,
   marginHorizontal:10,
    borderRadius:20,
    padding:10,
  },
  mainText:{
    fontWeight:"bold"
  }
});
