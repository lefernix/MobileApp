import React, { Component } from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";

class AccountData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: this.props.route.params.key,
      bankUri: this.props.route.params.uri,
      data: "Aucune donnée",
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
      })
      .catch((error) => console.log(error)); //to catch the errors if any
  }

  render() {
    // const loop = (data) => {
    //   for (let i = 0; i < data.length; i++) {
    //     if (data[i] !== null) {
    //       <>
    //         <Text>{data[i].id}</Text>
    //         <Text>{data[i].count}</Text>
    //       </>;
    //     } else {
    //       <Text>null</Text>;
    //     }
    //   }
    // };
    const newArr = [];
    const { data } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text>{data["0"].id}</Text>
          <Text>{data["1"].id}</Text>
          <Text>{data["2"].id}</Text>
          {console.log(data)}
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
