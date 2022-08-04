import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Header from "../../../components/Header";
import Bottom from "../../../components/Bottom";
import { toSize } from "../../../globalStyle";

const WishListMainScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header Title={"Wishlist"} />
      <View style={styles.MainView}></View>
      <Bottom num={4} />
    </View>
  );
};
export default WishListMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  MainView: {
    flex: 1,
    backgroundColor: "pink",
    marginHorizontal: toSize(24),
    marginVertical: toSize(22),
  },
  main_text: {
    fontSize: 24,
    fontWeight: "700",
    color: "black",
  },
});
