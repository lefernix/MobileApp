import * as React from "react";
import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import LoginPage from "./src/components/loginPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MenuPage from "./src/components/menuPage";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={LoginPage} />
          <Stack.Screen name="Menu" component={MenuPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
});
