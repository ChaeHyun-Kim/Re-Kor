import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { WithLocalSvg } from "react-native-svg";

import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import logo from "../icons/rekor_logo.svg";

export default function Header() {
  return (
    <View style={styles.fullscreen}>
      <View style={styles.container}>
        <Ionicons
          name="ios-search"
          style={{ fontSize: responsiveScreenFontSize(3) }}
          color="#2F3036"
        />
        <WithLocalSvg
          style={{ fontSize: responsiveScreenFontSize(3) }}
          asset={logo}
        />
        <Octicons
          name="person"
          style={{ fontSize: responsiveScreenFontSize(3) }}
          color="#2F3036"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#EEEEEE",
    borderBottomWidth: 1.4,
  },
  container: {
    width: "90%",
    height: 63,
    marginTop: 44,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  maintext: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2.48),
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },
});
