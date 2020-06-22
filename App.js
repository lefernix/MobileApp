import * as React from "react";
import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import LoginPage from "./src/components/loginPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MenuPage from "./src/components/menuPage";
import Account from "./src/components/Menu/Account/Account";
import AccountData from "./src/components/Menu/Account/data/data";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={LoginPage} />
          <Stack.Screen name="Menu" component={MenuPage} />
          {/* MENU */}
          <Stack.Screen name="Account" component={Account} />
          {/* ITEMS */}
          <Stack.Screen name="AccountData" component={AccountData} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
