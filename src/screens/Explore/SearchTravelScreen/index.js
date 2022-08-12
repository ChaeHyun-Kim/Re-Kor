import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { toSize } from "../../../globalStyle";
import SearchView from "../../../components/SearchView";
import RecentView from "../../../components/RecentView";

const SearchTravelScreen = () => {
  const navigation = useNavigation();
  const [search, setChangeSearch] = useState("");
  const SearchArray = [
    { num: 1, content: "Gapyeong Rail Park" },
    { num: 2, content: "Kwangwoon University" },
  ];
  return (
    <View style={styles.fullscreen}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.rowView}>
          <SearchView
            search={search}
            placeholder={"Search for tags or travel destinations"}
            setChangeSearch={setChangeSearch}
            rightIcon={"arrowleft"}
          />
        </View>
        {search == "" && (
          <View style={styles.RecentSearchView}>
            <Text style={styles.recentMainText}>Recent Search</Text>
            {SearchArray.map((array, key) => (
              <RecentView content={array.content} key={key} />
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
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
