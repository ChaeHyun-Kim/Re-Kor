import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Header from "../../../components/MyHeader";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { toSize } from "../../../globalStyle";

const MyPageScreen = () => {
  return (
    <View style={styles.fullscreen}>
      <StatusBar style="auto" />
      <Header Title={"My Page"} />
      <View style={styles.container}></View>
    </View>
  );
};
export default MyPageScreen;

const styles = StyleSheet.create({
  fullscreen: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    alignItems: "center",
  },
  container: {
    width: "90%",
    marginTop: toSize(44),
  },
  RecentSearchView: {
    marginTop: toSize(22),
  },
});
