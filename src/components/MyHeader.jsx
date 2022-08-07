import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { WithLocalSvg } from "react-native-svg";

import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Logo from "../icons/rekor_logo.svg";
import { toSize } from "../globalStyle";

export default function MyHeader({ Title }) {
  const navigation = useNavigation();
  return (
    <View style={styles.fullscreen}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons
            name="arrow-back-ios"
            style={{ fontSize: toSize(20) }}
            color="#2F3036"
          />
        </TouchableOpacity>

        <Text style={styles.TabTitleText}>{Title}</Text>

        <MaterialIcons
          name="arrow-back-ios"
          style={{ fontSize: toSize(20) }}
          color="#FFF"
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
