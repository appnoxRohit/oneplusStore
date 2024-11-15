import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";

export default function Registration() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://userauthbackend.onrender.com/api/v1/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response && response?.status === 200) {
        console.log("====================================");
        console.log("-->");
        console.log("====================================");
        const data = await response.json();
        setFormData({
          fname: "",
          lname: "",
          email: "",
          password: "",
          password_confirmation: "",
        });

        Alert.alert(
          "Success",
          "Registration successful. Would you like to login now?",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            {
              text: "Login",
              onPress: () => {
                console.log("Login Pressed");
                router.push("/loginPage");
              },
            },
          ]
        );
      }
    } catch (error) {
      console.error("Error from server:", error);
      Alert.alert(
        "Error",
        error instanceof Error
          ? error.message
          : "Registration failed. Please try again."
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <View style={styles.heading}>
              <Text style={[styles.headingText, { color: "#EA261A" }]}>
                WELCOME
              </Text>
            </View>
            <View style={styles.inputField}>
              <TextInput
                value={formData.fname}
                style={styles.textInput}
                placeholder="User firstname"
                placeholderTextColor="#666"
                onChangeText={(text) => handleChange("fname", text)}
              />
              <TextInput
                value={formData.lname}
                style={styles.textInput}
                placeholder="User lastname"
                placeholderTextColor="#666"
                onChangeText={(text) => handleChange("lname", text)}
              />
              <TextInput
                value={formData.email}
                style={styles.textInput}
                placeholder="Email-address"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#666"
                onChangeText={(text) => handleChange("email", text)}
              />
              <TextInput
                value={formData.password}
                style={styles.textInput}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#666"
                onChangeText={(text) => handleChange("password", text)}
              />
              <TextInput
                value={formData.password_confirmation}
                style={styles.textInput}
                placeholder="Confirm Password"
                secureTextEntry
                placeholderTextColor="#666"
                onChangeText={(text) =>
                  handleChange("password_confirmation", text)
                }
              />
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={handleSubmit}
              >
                <Text
                  style={{ fontSize: 20, color: "#EA261A", fontWeight: "bold" }}
                >
                  Register
                </Text>
              </TouchableOpacity>
              <Text>
                Already have an account?{" "}
                <Link href="/loginPage">
                  <Text style={{ color: "red" }}>LOGIN</Text>
                </Link>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    marginTop: 20,
    borderRadius: 20,
    marginHorizontal: 20,
    backgroundColor: "offwhite",
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
    paddingVertical: 20,
  },
  heading: {
    paddingBottom: 30,
  },
  headingText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  inputField: {
    gap: 22,
    paddingBottom: 40,
    width: "100%",
    alignItems: "center",
  },
  textInput: {
    width: 300,
    borderColor: "black",
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    paddingLeft: 20,
  },
  buttonStyle: {
    width: 200,
    borderColor: "black",
    marginTop: 30,
    height: 50,
    borderRadius: 20,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
});
