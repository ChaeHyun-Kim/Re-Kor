import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.fullscreen}>
      <View style={styles.container}>
        <EvilIcons
          name="search"
          style={{ fontSize: responsiveScreenFontSize(3) }}
          color="black"
        />

        <Text style={styles.maintext}>Re-Kor</Text>

        <Ionicons
          name="menu"
          style={{ fontSize: responsiveScreenFontSize(3) }}
          color="black"
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
    height: 40,
    marginTop: 50,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
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
