import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View,
  FlatList,
  ActivityIndicator,
  Modal,
} from "react-native";
import { ListItem } from "react-native-elements";
import { getData } from "../../../../../api";

class AccountData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: "",
      uri: "",
      data: [],
      bankItems: [],
      modalVisible: false,
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
          uri: this.props.route.params.uri,
          key: this.props.route.params.key,
        });
      })
      .then(() => {
        switch (this.state.uri) {
          case "bank":
            const dataFiltered = this.state.data.filter(Boolean);
            // TODO : Revoir les performances
            dataFiltered.forEach((item) =>
              fetch(`https://api.guildwars2.com/v2/items/${item.id}`)
                .then((response) => response.json())
                .then((iconUrl) => {
                  this.setState({
                    bankItems: this.state.bankItems.concat(iconUrl),
                  });
                })
            );

            break;

          default:
            break;
        }
      });
  }

  render() {
    const handleModal = () => {
      this.setState({ modalVisible: !this.state.modalVisible });
    };
    const { bankItems } = this.state;
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Data</Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#a82e2b" }}
                onPress={() => handleModal()}
              >
                <Text style={styles.textStyle}>Fermer</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setState({ modalVisible: true });
          }}
        >
          <FlatList
            data={bankItems}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: "column", margin: 1 }}>
                <Image
                  source={{ uri: item.icon }}
                  style={{ width: 100, height: 100, alignItems: "center" }}
                  PlaceholderContent={<ActivityIndicator />}
                />
              </View>
            )}
            //Setting the number of column
            numColumns={4}
            keyExtractor={(item, index) => index.toString()}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

export default AccountData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 150,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    borderRadius: 20,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
