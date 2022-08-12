import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { toSize } from "../globalStyle";
import { AntDesign } from "@expo/vector-icons";

const RecentView = ({ content }) => {
  return (
    <View style={styles.rowView}>
      <Text style={styles.MainText}>{content}</Text>
      <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
        <AntDesign name="closecircle" size={toSize(11)} color="#8F9098" />
      </TouchableOpacity>
    </View>
  );
};
export default RecentView;
const styles = StyleSheet.create({
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: toSize(16),
  },
  MainText: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
