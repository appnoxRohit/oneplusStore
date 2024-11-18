import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function RecomendedCard() {
  return (
    <View>
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 13,
          marginBottom: 13,
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        Recommended
      </Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{ flexDirection: "row", backgroundColor: "" }}
      >
        <View style={{ flexDirection: "row" }}>
          {/* Card 1 */}
          <View style={styles.container}>
            <View style={styles.img}>
              <Image
                style={{ width: 140, height: 80, borderRadius: 10 }}
                source={require("../../assets/images/Rec01.jpeg")}
              />
            </View>
            <View style={styles.heading}>
              <Text style={{ fontSize: 14 }}>
                Lorem ipsum dolor elit. Facere, minos and bros.
              </Text>
            </View>
            <View style={styles.footer}>
              <Image
                style={styles.circleImg}
                source={require("../../assets/images/logo.jpeg")}
              />
              <Text style={styles.circleTitle}>Mr. john</Text>
            </View>
          </View>

          {/* Card 2 */}
          <View style={styles.container}>
            <View style={styles.img}>
              <Image
                style={{ width: 140, height: 80, borderRadius: 10 }}
                source={require("../../assets/images/Rec02.png")}
              />
            </View>
            <View style={styles.heading}>
              <Text style={{ fontSize: 14 }}>
                Lorem ipsum dolor elit. Facere, minos and bros.
              </Text>
            </View>
            <View style={styles.footer}>
              <Image
                style={styles.circleImg}
                source={require("../../assets/images/logo.jpeg")}
              />
              <Text style={styles.circleTitle}>Mr. john</Text>
            </View>
          </View>

          {/* Card 3 */}
          <View style={styles.container}>
            <View style={styles.img}>
              <Image
                style={{ width: 140, height: 80, borderRadius: 10 }}
                source={require("../../assets/images/Rec03.jpeg")}
              />
            </View>
            <View style={styles.heading}>
              <Text style={{ fontSize: 14 }}>
                Lorem ipsum dolor elit. Facere, minos and bros.
              </Text>
            </View>
            <View style={styles.footer}>
              <Image
                style={styles.circleImg}
                source={require("../../assets/images/logo.jpeg")}
              />
              <Text style={styles.circleTitle}>Mr. john</Text>
            </View>
          </View>

          {/* Card 4 */}
          <View style={styles.container}>
            <View style={styles.img}>
              <Image
                style={{ width: 140, height: 80, borderRadius: 10 }}
                source={require("../../assets/images/Rec04.png")}
              />
            </View>
            <View style={styles.heading}>
              <Text style={{ fontSize: 14 }}>
                Lorem ipsum dolor elit. Facere, minos and bros.
              </Text>
            </View>
            <View style={styles.footer}>
              <Image
                style={styles.circleImg}
                source={require("../../assets/images/logo.jpeg")}
              />
              <Text style={styles.circleTitle}>Mr. john</Text>
            </View>
          </View>

          {/* Card 5 */}
          <View style={styles.container}>
            <View style={styles.img}>
              <Image
                style={{ width: 140, height: 80, borderRadius: 10 }}
                source={require("../../assets/images/Rec05.jpeg")}
              />
            </View>
            <View style={styles.heading}>
              <Text style={{ fontSize: 14 }}>
                Lorem ipsum dolor elit. Facere, minos and bros.
              </Text>
            </View>
            <View style={styles.footer}>
              <Image
                style={styles.circleImg}
                source={require("../../assets/images/logo.jpeg")}
              />
              <Text style={styles.circleTitle}>Mr. john</Text>
            </View>
          </View>

          {/* Card 6 */}
          <View style={styles.container}>
            <View style={styles.img}>
              <Image
                style={{ width: 140, height: 80, borderRadius: 10 }}
                source={require("../../assets/images/Rec06.jpeg")}
              />
            </View>
            <View style={styles.heading}>
              <Text style={{ fontSize: 14 }}>
                Lorem ipsum dolor elit. Facere, minos and bros.
              </Text>
            </View>
            <View style={styles.footer}>
              <Image
                style={styles.circleImg}
                source={require("../../assets/images/logo.jpeg")}
              />
              <Text style={styles.circleTitle}>Mr. john</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 160,
    marginHorizontal: 8,
  },
  img: {
    borderRadius: 20,
  },
  heading: {
    marginTop: 5,
    marginBottom: 5,
  },
  footer: {
    flexDirection: "row",
    gap: 15,
  },
  circleImg: {
    height: 17,
    width: 17,
    borderRadius: 50,
  },
  circleTitle: {
    color: "grey",
  },
});
