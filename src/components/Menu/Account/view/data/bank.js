import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

class Bank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.key,
    };
  }

  //   componentDidMount() {
  //     fetch(
  //       `https://api.guildwars2.com/v2/account/${this.props.route.params.uri}?access_token=${this.props.route.params.key}`
  //     )
  //       .then((response) => response.json())
  //       .then((responseJson) => {
  //         this.setState({
  //           loading: false,
  //           data: responseJson,
  //         });
  //       })
  //       .catch((error) => console.log(error)); //to catch the errors if any
  //   }

  render() {
    return <Text>{this.state.key}</Text>;
  }
}

export default Bank;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
