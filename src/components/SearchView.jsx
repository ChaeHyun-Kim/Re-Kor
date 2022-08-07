import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { toSize } from "../globalStyle";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const SearchView = ({ search, setChangeSearch }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.rowView}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={toSize(24)} color="#2F3036" />
      </TouchableOpacity>
      <View style={styles.searchView}>
        <TextInput
          style={styles.TextInput}
          onChangeText={setChangeSearch}
          value={search}
          placeholder="Search for tags or travel destinations"
        />
        <FontAwesome name="search" size={toSize(16)} color="#2F3036" />
      </View>
    </View>
  );
};
export default SearchView;
const styles = StyleSheet.create({
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchView: {
    flexDirection: "row",
    borderColor: "#E9E9E9",
    borderWidth: 1,
    borderRadius: toSize(24),
    height: toSize(44),
    paddingHorizontal: toSize(16),
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    fontSize: toSize(14),
    color: "#000000",
    flex: 1,
  },
});
