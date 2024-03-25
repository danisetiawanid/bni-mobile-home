import { Button, Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image
          source={require("../assets/logo_bni_content.png")}
          style={styles.imageLogo}
        />
      </TouchableOpacity>

      <View style={styles.spacer}></View>
      <View style={styles.footer}>
        <Image source={require("../assets/logo_lps.png")} />
        <Text style={styles.subtitle}>
          PT Bank Negara Indonesia (Persero) Tbk. berizin dan diawasi{"\n"}
          oleh Otoritas Jasa Keuangan (OJK) serta merupakan peserta{"\n"}
          penjaminan Lembaga Penjamin Simpanan (LPS)
        </Text>
      </View>

      <Text style={styles.titleVersion}>v5.11.1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: "#F4FCFF",
    justifyContent: "center",
  },

  imageLogo: {
    marginTop: 200,
    width: 250,
    height: 100,
    resizeMode: "contain",
  },

  spacer: {
    height: 300,
  },

  subtitle: {
    textAlign: "center",
    color: "gray",
    fontSize: 10,
    letterSpacing: 0.4,
    lineHeight: 12,
    marginTop: 10,
  },
  titleVersion: {
    textAlign: "center",
    marginTop: 10,
    color: "gray",
    fontSize: 10,
  },

  footer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SplashScreen;
