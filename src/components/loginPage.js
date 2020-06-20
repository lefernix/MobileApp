import React, { Component } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { CheckBox, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      checked: false,
    };
  }

  onLogin() {
    const { username } = this.state;

    Alert.alert("Vous êtes connecté");
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          // icon={<Icon name="key" size={15} color="white" />}
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={"API KEY"}
          style={styles.input}
          leftIcon={<Icon name="user" size={24} color="black" />}
        />
        <CheckBox
          title="Se souvenir de ma clé"
          checked={this.state.checked}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
        <Button
          icon={<Icon name="send-o" size={15} color="white" />}
          title="Login"
          style={styles.button}
          onPress={() => this.props.navigation.push("Menu")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    alignSelf: "stretch",
    backgroundColor: "#f44336",
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
  },
});
