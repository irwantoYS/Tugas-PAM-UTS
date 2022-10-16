import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Butt,
} from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.designlogo}
        source={require("../assets/cameralogo.png")}
      />
      <Text style={styles.designtextlogo}>
        Greatest <Text style={{ color: "red" }}>Gift!</Text>
      </Text>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate("imagepicker")}>
          <Text style={styles.buttonstyles}>Pick An Image</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <Text style={styles.buttonstyles}>Open Camera</Text>
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
});
