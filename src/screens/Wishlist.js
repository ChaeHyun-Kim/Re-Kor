import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import Header from "../components/Header";
import Bottom from "../components/Bottom";

export default function Wishlist() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <View style={styles.mainview}>
        <Text style={styles.main_text}>Wish Travel List</Text>
      </View>
      <Bottom num={4} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainview: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 43,
    paddingVertical: 31,
  },
  main_text: {
    fontSize: 24,
    fontWeight: "700",
    color: "black",
  },
});
