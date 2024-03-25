import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const BalanceComponent = ({ balance, accountNo, poin}) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <View style={styles.container}>
      <View style={[styles.horizontal, styles.spacer]}>
        <Text style={styles.textWhite}>Taplus Pegawai BNI</Text>
        <Image source={require("./assets/ic_visibility.png")} />
      </View>

      <View style={styles.horizontal}>
        <Text style={styles.textWhite}>
          {isShow ? "Rp " + balance : "*** *** ***"}
        </Text>
        <TouchableOpacity onPress={() => setIsShow(!isShow)}>
          <Image source={require("./assets/ic_arrow.png")} />
        </TouchableOpacity>
      </View>

      <View style={[styles.horizontal, styles.spacer]}>
        <View style={styles.horizontal}>
          <Text style={styles.textWhite}>{accountNo}</Text>
          <Image source={require("./assets/ic_copy.png")} />
        </View>
        <View style={[styles.horizontal, styles.badge]}>
          <Image source={require("./assets/logo_poin.png")} />
          <Text style={styles.textOrange}>{poin}</Text>
          <Image source={require("./assets/ic_arrow_right.png")} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    backgroundColor: "#FF6600",
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  textWhite: {
    color: "white",
  },
  textOrange: {
    color: "#FF6600",
  },
  horizontal: {
    flexDirection: "row",
    alignItems: "center",
  },
  spacer: {
    justifyContent: "space-between",
  },
  badge: {
    alignItems: "center",
    backgroundColor: "#FFE0CD",
    borderRadius: 50,
    padding: 8,
  },
});

export default BalanceComponent;
