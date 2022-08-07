import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { toSize } from "../../../globalStyle";
import SearchView from "../../../components/SearchView";
import RecentView from "../../../components/RecentView";

const SearchTravelScreen = () => {
  const [search, setChangeSearch] = useState("");
  const SearchArray = [
    { num: 1, content: "Gapyeong Rail Park" },
    { num: 2, content: "Kwangwoon University" },
  ];
  return (
    <View style={styles.fullscreen}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <SearchView search={search} setChangeSearch={setChangeSearch} />
        {search == "" && (
          <View style={styles.RecentSearchView}>
            <Text style={styles.recentMainText}>Recent Search</Text>
            {SearchArray.map((array) => (
              <RecentView content={array.content} />
            ))}
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
  recentMainText: {
    fontWeight: "600",
    fontSize: toSize(12),
    color: "#5F5F5F",
    paddingVertical: toSize(7),
  },
});
