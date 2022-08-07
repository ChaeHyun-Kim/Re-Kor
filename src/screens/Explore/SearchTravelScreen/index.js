import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { toSize } from "../../../globalStyle";
import SearchView from "../../../components/SearchView";

const SearchTravelScreen = () => {
  const [search, setChangeSearch] = useState("");
  const SearchArray = [
    { num: 1, content: "Ga" },
    { num: 1, content: "YA" },
  ];
  return (
    <View style={styles.fullscreen}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <SearchView search={search} setChangeSearch={setChangeSearch} />
        {search == "" && (
          <View style={styles.RecentSearchView}>
            <Text style={styles.recentMainText}>Recent Search</Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default SearchTravelScreen;

const styles = StyleSheet.create({
  fullscreen: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    alignItems: "center",
  },
  container: {
    width: "90%",
    marginTop: toSize(44),
  },
  RecentSearchView: {
    marginTop: toSize(22),

  },
});
