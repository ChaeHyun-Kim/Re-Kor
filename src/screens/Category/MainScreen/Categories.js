import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import Header from "../../../components/Header";
import Bottom from "../../../components/Bottom";

import { toSize } from "../../../globalStyle";
export default function Categories() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <View style={styles.mainview}>
        <Text style={styles.main_text}>Choose category</Text>

        <View style={styles.HorizontalView}>
          <View style={styles.CategoryView}></View>

          <View style={styles.CategoryView}></View>
        </View>
      </View>
      <Bottom num={2} />
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
    fontSize: 18,
    fontWeight: "700",
    color: "#71727A",
  },
  HorizontalView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  CategoryView: {
    width: toSize(125),
    height: toSize(125),
    borderRadius: 25,
    paddingHorizontal: toSize(45),
    paddingVertical: toSize(33),
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
});
