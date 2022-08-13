import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import { toSize } from "../../globalStyle";
import { AntDesign } from "@expo/vector-icons";

export default function SettingView({ icon, content }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <AntDesign name={icon} size={toSize(20)} color="#2F3036" />
      <Text style={styles.ButtonText}>{content}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: toSize(24),
    paddingVertical: toSize(10),
    backgroundColor: "#ffffff",
    borderBottomColor: "#ECECEC",
    borderBottomWidth: 1,
    alignItems: "center",
    marginBottom: toSize(1),
  },
  ButtonText: {
    fontSize: toSize(14),
    fontWeight: "500",
    marginLeft: toSize(14),
  },
});
