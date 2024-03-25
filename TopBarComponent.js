import { StyleSheet, Text, View, Image } from "react-native";

const TopBarComponent = (props) => {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/logo_bni_small.png")} />
      <View style={styles.notification}>
        <Image source={require("./assets/ic_notification.png")} />
        <View style={styles.help}>
          <Image source={require("./assets/ic_help.png")} />
          <Text style={{ color: "#FF6600" }}>Bantuan</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    alignItems: "center",
  },
  notification: {
    height: 20,
    flexDirection: "row",
  },

  help: {
    flexDirection: "row",
    marginLeft: 8,
    alignItems: "center",
    backgroundColor: "#FFEDE0",
    borderRadius: 12,
    paddingHorizontal: 8,
  },
});

export default TopBarComponent;
