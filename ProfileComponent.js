import { View, Image, Text, StyleSheet } from "react-native";

const Profile = ({ name }) => {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/ic_avatar.png")} />
      <View style={styles.cardName}>
        <Text style={styles.title}>Selamat Datang</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    flexDirection: "row",
  },

  cardName: {
    marginLeft: 12,
  },

  title: {
    color: "#796b6d",
  },

});

export default Profile;
