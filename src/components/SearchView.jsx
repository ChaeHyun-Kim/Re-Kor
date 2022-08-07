import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { toSize } from "../globalStyle";
import { FontAwesome } from "@expo/vector-icons";

const SearchView = ({ search, placeholder, setChangeSearch }) => {
  return (
    <View style={styles.searchView}>
      <TextInput
        style={styles.TextInput}
        onChangeText={setChangeSearch}
        value={search}
        placeholder={placeholder}
      />
      <FontAwesome name="search" size={toSize(16)} color="#2F3036" />
    </View>
  );
};
export default SearchView;
const styles = StyleSheet.create({
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
