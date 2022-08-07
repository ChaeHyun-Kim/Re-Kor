import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { toSize } from "../../globalStyle";
import { AntDesign } from "@expo/vector-icons";

const SecondView = ({ data }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      // onPress={() => setClick(click === false ? true : false)}
    >
      <View style={styles.ListView}>
        <AntDesign name="right" size={toSize(12)} color="#8F9098" />
        <Text style={styles.mainText}>{data.name}</Text>
        <AntDesign name="ellipsis1" size={toSize(24)} color="#8F9098" />
      </View>
    </TouchableOpacity>
  );
};
export default SecondView;
const styles = StyleSheet.create({
  ListView: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: toSize(25),
    height: toSize(52),
    paddingHorizontal: toSize(16),
    marginLeft: toSize(8),
    marginTop: toSize(11),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  mainText: {
    fontSize: toSize(14),
    color: "#2F3036",
    fontWeight: "700",
    marginLeft: toSize(18),
    flex: 1,
  },
});
