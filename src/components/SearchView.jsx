import React from "react";
import { StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import { toSize } from "../globalStyle";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const SearchView = ({
  search,
  placeholder,
  setChangeSearch,
  rightIcon,
  text,
  onclick,
}) => {
  const navigation = useNavigation();
  const handelClick = () => {
    if (text) {
      navigation.navigate("SearchTravelScreen");
    }
  };
  return (
    <>
      {placeholder && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          style={{ marginRight: toSize(3) }}
        >
          <AntDesign name={rightIcon} size={toSize(22)} color="#2F3036" />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        activeOpacity={1}
        style={styles.searchView}
        onPress={handelClick}
      >
        {text ? <Text style={styles.TextInput}>{text}</Text> : null}
        {placeholder ? (
          <TextInput
            style={styles.TextInput}
            onChangeText={setChangeSearch}
            value={search}
            placeholder={placeholder}
          />
        ) : null}
        <TouchableOpacity activeOpacity={0.8} onPress={onclick}>
          <FontAwesome name="search" size={toSize(16)} color="#2F3036" />
        </TouchableOpacity>
      </TouchableOpacity>
    </>
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
    backgroundColor: "#fff",
  },
  TextInput: {
    fontSize: toSize(14),
    color: "#8F9098",
    flex: 1,
  },
});
