// import React from "react";
// import { Text } from "react-native";

// export const getData = (id) =>
//   fetch(`https://api.guildwars2.com/v2/items/${id}`)
//     .then((response) => response.json())
//     .then((responseJson) => {
//       return responseJson.icon;
//     });

const axios = require("axios");

export const getData = (id) =>
  axios.get(`https://api.guildwars2.com/v2/items/${id}`).then((resp) => {
    return resp.data.icon.toString();
  });
