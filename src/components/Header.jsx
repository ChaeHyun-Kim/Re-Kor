import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { WithLocalSvg } from "react-native-svg";

import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import Logo from "../icons/rekor_logo.svg";
import { toSize } from "../globalStyle";

export default function Header({ Title }) {
  return (
    <View style={styles.fullscreen}>
      <View style={styles.container}>
        <Ionicons
          name="ios-search"
          style={{ fontSize: toSize(20) }}
          color="#2F3036"
        />
        {Title ? (
          <Text style={styles.TabTitleText}>{Title}</Text>
        ) : (
          <WithLocalSvg style={{ fontSize: toSize(23) }} asset={Logo} />
        )}

        <Octicons
          name="person"
          style={{ fontSize: toSize(20) }}
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
    borderBottomWidth: toSize(1.4),
  },
  container: {
    width: "90%",
    height: toSize(63),
    marginTop: toSize(44),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  TabTitleText: {
    fontWeight: "800",
    fontSize: toSize(18),
    color: "#1F2024",
  },
});
