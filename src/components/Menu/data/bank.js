import React, { Component } from "react";
import { SafeAreaView, ScrollView, Alert, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class Bank extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account: "Pas disponible",
      accountPath: this.props.route.params.key,
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
          account: responseJson,
        });
      })
      .catch((error) => console.log(error)); //to catch the errors if any
  }

  render() {
    const list = [
      {
        category: "Bank",
        avatar_url:
          "https://render.guildwars2.com/file/B497533A51E879284D029DD10A2CDE23D04F6A4D/102494.png",
      },
      {
        category: "Emotes",
        avatar_url:
          "https://render.guildwars2.com/file/0BA90BAA02D468ABF8CB9FD90AEB4DFCC1F1D43A/102363.png",
      },
      {
        category: "Finishers",
        avatar_url:
          "https://wiki.guildwars2.com/images/0/00/Basic_Finisher.png",
      },
      {
        category: "Luck",
        avatar_url:
          "https://wiki.guildwars2.com/images/8/8a/Magic_Find_Boost.png",
      },
      {
        category: "Outfits",
        avatar_url: "https://wiki.guildwars2.com/images/7/79/Mursaat_Robes.png",
      },
      {
        category: "Titles",
        avatar_url:
          "https://wiki.guildwars2.com/images/a/a0/Champion%27s_Crown_%28effect%29.png",
      },
      {
        category: "WorldBoss Timer",
        avatar_url:
          "https://wiki.guildwars2.com/images/thumb/b/b0/Red_Boss.png/20px-Red_Boss.png",
      },
    ];
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.category}
              bottomDivider
              rightIcon={<Icon name="chevron-right" size={24} color="black" />}
              onPress={() => Alert.alert(l.category)}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Bank;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
