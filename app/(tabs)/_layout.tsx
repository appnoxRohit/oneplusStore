import {
  Link,
  router,
  Stack,
  Tabs,
  useNavigation,
  useRouter,
} from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSelector } from "react-redux";

export default function TabLayout() {
  let navigation = useNavigation();
  const length = useSelector((state:any) => state.cart.items.length);
  const totalQuantity = useSelector((state:any) => state.cart.totalQuantity); 



  const handleExplore = () => {
    // navigation.navigate('')
  };
  const handleMyFollowing = () => {
    router.push("../myStore");
  };
  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        
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
              <Link href={""} onPress={handleExplore}>
                <Text
                  style={{
                    fontWeight: "normal",
                    color: "black",
                    fontSize: 22,
                  }}
                >
                  Explore
                </Text>
              </Link>
            </TouchableOpacity>

            <TouchableOpacity  style={{ paddingRight: 10  }} >
              <Link href={"/myStore"} onPress={handleMyFollowing}>
                <Text
                  style={{ fontWeight: "normal", color: "grey", fontSize: 21 }}
                >
                  My Store
                </Text>
              </Link>
            </TouchableOpacity>
          </View>
        ),
        headerRight: () => (
          
          <View style={{ flexDirection: "row", gap: 15, paddingRight: 10 }}>
            <Link href={"/components/SearchPage"}>
              <AntDesign name="search1" size={22} color="black" />
            </Link>
           
            <Link href={"/components/addToCart"}>
              {" "}
              <View style={{}}>
              <AntDesign name="shoppingcart" size={22} color="black" />
{totalQuantity>0 &&  <Text style={styles.cartBadge}>{length}</Text>}
             

              </View>
            </Link>
            
           
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
          headerShown: false,
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
const styles = StyleSheet.create({
  cartContainer: {
    
    position: "relative",
    backgroundColor:"pink",
   
  },
  cartBadge: {
    position: "absolute",
    top: -5,
    right:-8,
    paddingLeft:5 ,
    
    backgroundColor: "red",
    borderRadius: 10,
    color:"white",
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
  },

})
