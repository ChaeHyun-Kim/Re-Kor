import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { toSize } from "../globalStyle";
import Constants from "expo-constants";

export default function Header({ title }) {
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
        <Text style={styles.titleText}>{title}</Text>
        <Ionicons
          name="ios-search"
          style={{ fontSize: toSize(20) }}
          color="#FFFF"
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
    marginTop: Constants.statusBarHeight,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    fontWeight: "700",
    fontSize: toSize(16),
    color: "#1F2024",
  },
});
