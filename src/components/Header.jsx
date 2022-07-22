import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { WithLocalSvg } from "react-native-svg";

import search from "../icons/Search.svg";
import user from "../icons/user.svg";
import logo from "../icons/rekor_logo.svg";

export default function Header() {
  return (
    <View style={styles.fullscreen}>
      <View style={styles.container}>
        <WithLocalSvg
          style={{ fontSize: responsiveScreenFontSize(4) }}
          asset={search}
        />
        <WithLocalSvg
          style={{ fontSize: responsiveScreenFontSize(3) }}
          asset={logo}
        />
        <WithLocalSvg
          style={{ fontSize: responsiveScreenFontSize(4) }}
          asset={user}
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
