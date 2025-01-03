import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { useDispatch } from "react-redux";
import { setUser } from "./store/Slice";
import axios from "axios";
import { Link, router, useNavigation } from "expo-router";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://userauthbackend.onrender.com/api/v1/auth/login",
        { email, password }
      );

      const { user, token } = response.data;

      dispatch(setUser({ user, token }));

      console.log("Login Successful:", user);
      router.push("/(tabs)");
    } catch (error) {
      console.error("Error:", error);
      setError("Invalid credentials or server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>OnePlus Community</Text>
          </View>
          <View style={styles.inputFields}>
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.textInput}
              placeholder="Email-address"
              keyboardType="email-address"
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry
            />

            {error && <Text style={styles.errorText}>{error}</Text>}

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                width: 250,
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "#EA261A" }}>Forgot Password</Text>
              <Link href={"/Registration"}>
              <Text style={{ color: "#EA261A" }}>Sign Up</Text>
              </Link>
            </View>

            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={handleSubmit}
              disabled={loading}
            >
              <Text
                style={{ fontSize: 20, color: "#EA261A", fontWeight: "bold" }}
              >
                {loading ? "Logging in..." : "Login"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: { backgroundColor: "white", height: "100%" },
  container: {
    marginTop: 90,
    borderRadius: 20,
    marginHorizontal: 20,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
    paddingVertical: 20,
  },
  heading: {
    paddingBottom: 30,
  },
  headingText: {
    color: "#EA261A",
    fontSize: 40,
    fontWeight: "bold",
  },
  inputFields: {
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
    borderWidth: 0.7,
    paddingLeft: 20,
    alignItems: "center",
  },
  buttonStyle: {
    width: 200,
    borderColor: "black",
    marginTop: 0,
    height: 50,
    fontSize: 60,
    borderRadius: 20,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: -15,
    marginBottom: 10,
  },
});
