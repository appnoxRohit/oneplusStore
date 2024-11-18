import { Text, View, Image, Dimensions, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { width, height } = Dimensions.get("window");

  return (
    <SafeAreaView style={{ backgroundColor: "", flex: 1 }}>
      <View>
      <View style={styles.imageArea}>
        <Text style={styles.imageText}>
          Shot on
          <Text style={{ fontSize: 24 }}> OnePlus </Text>
           November
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            position: "absolute",
            zIndex: 3,
            bottom: 20,
            left:10,
            fontWeight:500
          }}
        >
          The Last of Autumn
        </Text>

        <Image
          style={{
            width: width,
            height: height * 0.25,
          }}
          source={require("@/assets/images/autum.webp")}
          resizeMode="cover"
        />
      </View>
      <View>
        <Text className="">Recommended</Text>

      </View>
      </View>

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
    fontSize:20,
    top:20,
    left:10,
    fontWeight:500
  },
});
