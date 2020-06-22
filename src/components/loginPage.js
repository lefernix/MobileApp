import React, { Component } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  Dimensions,
  AsyncStorage,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
  Text,
} from "react-native";
import { CheckBox, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/AntDesign";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: "",
      checked: false,
    };
  }

  onLogin = () => {
    try {
      const { key } = this.state;
      this.props.navigation.push("Menu", { key: this.state.key });
      AsyncStorage.setItem("APIKey", key);
    } catch (err) {
      Alert.alert(err);
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={Keyboard.dismiss}
        accessible={false}
      >
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/gw2bg.png")}
            style={styles.logo}
          />
          <TextInput
            onChangeText={(key) => this.setState({ key })}
            placeholder={"XXXX-XXXX-XXXX-XXXX"}
            style={styles.input}
            leftIcon={<Icon name="user" size={24} color="black" />}
            value={this.state.checked && this.state.key}
          />
          <CheckBox
            title="Se souvenir de ma clé"
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />
          <Button
            icon={<Icons name="login" size={15} color="white" />}
            buttonStyle={{
              backgroundColor: "#a82e2b",
            }}
            title="  Login"
            style={styles.button}
            onPress={() => this.onLogin()}
          />
          <Text
            style={{ color: "blue" }}
            onPress={() =>
              Linking.openURL(
                "https://account.arena.net/login?redirect_uri=%2Fapplications"
              )
            }
          >
            Vous n'avez pas de clé API ? Cliquez ici
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    backgroundColor: "white",
    paddingBottom: 100,
  },
  logo: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  button: {
    padding: 13,
    width: 200,
    height: 84,
    borderRadius: 5,
    fontSize: 26,
  },
});
