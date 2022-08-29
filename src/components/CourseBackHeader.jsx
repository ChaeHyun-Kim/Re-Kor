import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { toSize } from "../globalStyle";
import Constants from "expo-constants";

export default function CourseBackHeader({ title }) {
  const navigation = useNavigation();
  return (
    <View style={styles.fullscreen}>
      <View style={styles.container}>
        <AntDesign
          name="left"
          style={{ fontSize: toSize(20) }}
          color="#2F3036"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
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
    paddingVertical: toSize(12),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  iconView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    marginLeft: toSize(7),
  },
  titleView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontWeight: "600",
    fontSize: toSize(14),
    color: "#1F2024",
  },
});
