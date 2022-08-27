import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { WithLocalSvg } from "react-native-svg";
import Constants from "expo-constants";

import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { toSize } from "../globalStyle";

import Logo from "../icons/rekor_logo.svg";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.fullscreen}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("SearchTravelScreen")}
        >
          <Ionicons
            name="ios-search"
            style={{ fontSize: toSize(22) }}
            color="#2F3036"
          />
        </TouchableOpacity>

        <WithLocalSvg style={{ fontSize: toSize(23) }} asset={Logo} />

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("MyPageScreen")}
        >
          <Octicons
            name="person"
            style={{ fontSize: toSize(22) }}
            color="#2F3036"
          />
        </TouchableOpacity>
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
    height: toSize(63),
    marginTop: Constants.statusBarHeight,
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
