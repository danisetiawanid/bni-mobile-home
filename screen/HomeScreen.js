import { Text, StyleSheet, View } from "react-native";
import TopBarComponent from "../TopBarComponent";
import Profile from "../ProfileComponent";
import BalanceComponent from "../BalanceComponent";
import MenuComponent from "../MenuComponent";
import { ScrollView } from "react-native-gesture-handler";
import CategoryChipComponent from "../CategoryChipComponent";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.headerBackgroud}>
        <View style={styles.content}>
          <TopBarComponent />
          <Profile name={"Muhamad Dani Setiawan"} />
          <BalanceComponent
            balance={"100.000.000"}
            accountNo={"1234567890"}
            poin={"100.000"}
          />
        </View>
      </View>
      <CategoryChipComponent />
      <MenuComponent />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerBackgroud: {
    backgroundColor: "#FEE0CD",
  },

  content: {
    marginHorizontal: 20,
    marginTop: 50,
  },
});

export default HomeScreen;
