import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { toSize } from "../../globalStyle.js";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function PlaceTitle({
  leftIcon,
  title,
  rightIcon,
  state,
  handleState,
}) {
  return (
    <View style={styles.TitleView}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          handleState(state === false ? true : false);
        }}
      >
        <View style={styles.leftView}>
          <Entypo
            name={state === false ? "chevron-down" : "chevron-up"}
            size={toSize(17)}
            color="#2F3036"
          />
          <FontAwesome
            name={leftIcon}
            size={toSize(14)}
            color="#2F3036"
            style={{ marginLeft: toSize(12) }}
          />
          <Text style={styles.Title}>{title}</Text>
        </View>
      </TouchableOpacity>
      {rightIcon && (
        <MaterialCommunityIcons
          name="refresh"
          size={toSize(20)}
          color="#2F3036"
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  TitleView: {
    height: toSize(39),
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: toSize(24),
    borderBottomColor: "#ECECEC",
    borderBottomWidth: 0.5,
  },
  leftView: {
    flexDirection: "row",
    alignItems: "center",
  },
  Title: {
    fontWeight: "500",
    fontSize: toSize(14),
    color: "#2F3036",
    marginLeft: toSize(8),
  },
});
