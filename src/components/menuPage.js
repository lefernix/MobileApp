import React, { Component } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/Fontisto";

export default class MenuPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: false || "hello",
      key: this.props.route.params.key,
    };
  }
  componentDidMount() {
    fetch(
      `https://api.guildwars2.com/v2/account?access_token=${this.props.route.params.key}`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson,
        });
      })
      .catch((error) => console.log(error)); //to catch the errors if any
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text
            style={styles.headerText}
          >{`Bienvenue ${this.state.dataSource.name}`}</Text>
          <Button
            icon={<Icons name="person" size={15} color="white" />}
            buttonStyle={{
              backgroundColor: "#a82e2b",
              height: 50,
            }}
            title="  Account"
            style={styles.button}
            onPress={() =>
              this.props.navigation.push("Account", {
                key: this.state.key,
              })
            }
          />
          <Button
            icon={<Icons name="persons" size={15} color="white" />}
            buttonStyle={{
              backgroundColor: "#a82e2b",
              height: 50,
            }}
            title="  Characters"
            style={styles.button}
            onPress={() =>
              this.props.navigation.push("Menu", { key: this.state.key })
            }
          />
          <Button
            icon={<Icons name="bitcoin" size={15} color="white" />}
            buttonStyle={{
              backgroundColor: "#a82e2b",
              height: 50,
            }}
            title="  Commerce"
            style={styles.button}
            onPress={() => this.props.navigation.push("Menu")}
          />
          <Button
            icon={<Icon name="shield" size={15} color="white" />}
            buttonStyle={{
              backgroundColor: "#a82e2b",
              height: 50,
            }}
            title="  Guild"
            style={styles.button}
            onPress={() => this.props.navigation.push("Menu")}
          />
          <Button
            icon={<Icons name="bandage" size={15} color="white" />}
            buttonStyle={{
              backgroundColor: "#a82e2b",
              height: 50,
            }}
            title="  PvP"
            style={styles.button}
            onPress={() => this.props.navigation.push("Menu")}
          />
          <Button
            icon={<Icons name="electronjs" size={15} color="white" />}
            buttonStyle={{
              backgroundColor: "#a82e2b",
              height: 50,
            }}
            title="  WvW"
            style={styles.button}
            onPress={() => this.props.navigation.push("Menu")}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  headerText: {
    textAlign: "center",
    margin: 10,
    fontSize: 24,
  },
  button: {
    margin: 30,
    borderRadius: 5,
  },
});
