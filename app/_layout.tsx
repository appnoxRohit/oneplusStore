import { Link, Stack, Tabs, useNavigation, useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
  Pressable,
  
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RootLayout() {

  let navigate = useRouter();
  const handleExplore = () => {
    navigate.navigate('./')
    
  };
  const handleMyFollowing = () => {
    navigate.navigate('/myFollowing')
    
  };
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },

        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerLeft: () => (
          <View
            style={{
              paddingRight: 20,
              paddingLeft: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* <Image
              style={{ width: 25, height: 25, borderRadius: 10 }}
              source={require("@/assets/images/logoipsum.png")}
            /> */}
            <TouchableOpacity style={{ paddingRight: 20, paddingLeft: 10 }}>
             
                <Pressable
                  onPress={handleExplore}
                >
                  <Text
                    style={{
                      fontWeight: "normal",
                      color: "black",
                      fontSize: 22,
                    }}
                  >
                    Exploree
                  </Text>
                </Pressable>
              
            </TouchableOpacity>

            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Pressable onPress={handleMyFollowing}>
                <Text
                  style={{ fontWeight: "normal", color: "grey", fontSize: 23 }}
                >
                  My Following
                </Text>
              </Pressable>
            </TouchableOpacity>
          </View>
        ),
        headerRight: () => (
          <View style={{ flexDirection: "row", gap: 8, paddingRight: 10 }}>
            <AntDesign name="search1" size={22} color="black" />

            <AntDesign name="shoppingcart" size={22} color="black" />
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "",
          title: "home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="circle"
        options={{
          headerShown: true,
          headerTitle: "",

          title: "Circle",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-circle" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="social"
        options={{
          headerShown: true,
          headerTitle: "",

          title: "social",
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: true,
          headerTitle: "",

          title: "profile",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
