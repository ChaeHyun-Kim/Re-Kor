import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { toSize } from "../../globalStyle";
import { FontAwesome } from "@expo/vector-icons";

const FolderView = ({
  courselist,
  folder_name,
  item,
  index,
  isSelected,
  handleClick,
}) => {
  const checkfunc = () => {
    handleClick(index);
  };
  return (
    <View style={{ padding: toSize(2), marginBottom: toSize(16) }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => checkfunc()}
        style={[
          styles.ListView,
          isSelected
            ? { backgroundColor: "#EAEAEA" }
            : { backgroundColor: "#FFFFFF" },
        ]}
      >
        <FontAwesome name="folder" size={20} color="#71727A" />

        <View style={styles.textView}>
          <Text style={styles.mainText}>{folder_name}</Text>

          {/* <Text style={styles.numText}>{item.length}</Text> */}
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default FolderView;
const styles = StyleSheet.create({
  ListView: {
    flexDirection: "row",
    borderRadius: toSize(25),
    height: toSize(52),
    paddingHorizontal: toSize(16),
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
  textView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  mainText: {
    fontSize: toSize(14),
    color: "#1F2024",
    fontWeight: "400",
    marginLeft: toSize(18),
    marginRight: toSize(8),
  },
  numText: {
    fontSize: toSize(14),
    color: "#000",
    fontWeight: "700",
  },
});
