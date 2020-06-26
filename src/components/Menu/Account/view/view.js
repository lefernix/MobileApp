import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import { ListItem } from "react-native-elements";
import { getData } from "../../../../../api";

class AccountData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: this.props.route.params.key,
      uri: this.props.route.params.uri,
      data: [],
      bankItems: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://api.guildwars2.com/v2/account/${this.props.route.params.uri}?access_token=${this.props.route.params.key}`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          data: responseJson,
        });
      });
  }
  componentDidUpdate() {
    const fetchIditem = (dataFiltered) => {
      dataFiltered.forEach((item) =>
        fetch(`https://api.guildwars2.com/v2/items/${item.id}`)
          .then((response) => response.json())
          .then((iconUrl) => {
            this.state.bankItems.push(iconUrl.icon);
          })
      );
    };
    switch (this.state.uri) {
      case "bank":
        const dataFiltered = this.state.data.filter(Boolean);
        fetchIditem(dataFiltered);
        break;

      default:
        break;
    }
  }

  render() {
    const { uri } = this.state;
    console.log("hello", this.state.bankItems);
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {uri === "bank" &&
            this.state.bankItems.map((item, key) => {
              <Text>{item}</Text>;
            })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default AccountData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
