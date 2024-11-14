import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";

export default function loginPage() {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{ fontSize: 30 }}> Login</Text>
      </View>
      <View style={styles.inputField}>
        <TextInput
          style={styles.textInput}
          placeholder="User firstname "
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="User lastname "
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Email-address"
        ></TextInput>
        <TextInput style={styles.textInput} placeholder="Password"></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password"
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    alignItems: "center",

    justifyContent: "center",
    gap: 32,
  },
  heading: {
    backgroundColor: "",
  },
  inputField: { gap: 22 },
  textInput: {
    width: 300,
    borderColor: "black",
    borderRadius: 20,

    borderWidth: 1,

    alignItems: "center",
  },
});
