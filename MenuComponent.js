import { useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const data = [
  {
    id: 1,
    name: "Transfer",
    image: require("./assets/ic_transfer.png"),
  },
  {
    id: 2,
    name: "E-Wallet",
    image: require("./assets/ic_ewallet.png"),
  },
  {
    id: 3,
    name: "Pembayaran",
    image: require("./assets/ic_pembayaran.png"),
  },
  {
    id: 4,
    name: "Pembelian",
    image: require("./assets/ic_pembelian.png"),
  },
  {
    id: 5,
    name: "Investasi",
    image: require("./assets/ic_investasi.png"),
  },
  {
    id: 6,
    name: "Lifestyle",
    image: require("./assets/ic_lifestyle.png"),
  },
  {
    id: 7,
    name: "Life Goals",
    image: require("./assets/ic_life_goals.png"),
  },
  {
    id: 8,
    name: "Gaming",
    image: require("./assets/ic_gaming.png"),
  },
];

const MenuComponent = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.contentMenu}>
        <Image source={item.image} style={styles.imageMenu} />
        <Text>{item.name}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={4}
        columnWrapperStyles={{ justifyContent: "space-between" }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  contentMenu: {
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageMenu: {
    width: 60,
    height: 60,
    marginBottom: 10,
    alignSelf: "center",
    marginTop: 20,
  },
});

export default MenuComponent;
