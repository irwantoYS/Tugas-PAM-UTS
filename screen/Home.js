import React from "react";
import { StatusBar } from "expo-status-bar";
import { ResizeMode } from "expo-av";
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpecity,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.designlogo}
        source={require("../assets/cameralogo.png")}
      />
      <Text style={styles.designtextlogo}>
        Greatest <Text style={{ color: "red" }}>Gift!</Text>
      </Text>
      <StatusBar style="auto" />

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={styles.buttonstyles}>Upload Image</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate("Registerscreen")}>
          <Text style={styles.buttonstyles}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#add8e6",
    alignItems: "center",
    justifyContent: "center",
  },
  designlogo: {
    width: 150,
    height: 150,
  },
  designtextlogo: {
    color: "#000000",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#ffffff",
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    top: 100,

    marginVertical: 4,
  },

  buttonstyles: {
    fontWeight: "400",
    letterSpacing: 0.4,
  },
});
