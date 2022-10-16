import home from "./screen/Home";
import Login from "./screen/Login";
import Registerscreen from "./screen/Registerscreen";
import ImagePickerExample from "./screen/Imagepicker";
import Camera from "./screen/Camera";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ title: "Upload Image" }}
        />
        <Stack.Screen
          name="Registerscreen"
          component={Registerscreen}
          options={{ title: "BACK" }}
        />
        <Stack.Screen
          name="imagepicker"
          component={ImagePickerExample}
          options={{ title: "Pick An Image" }}
        />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
