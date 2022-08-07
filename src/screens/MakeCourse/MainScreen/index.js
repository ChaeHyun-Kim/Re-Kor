import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import SearchView from "../../../components/SearchView";
import Bottom from "../../../components/Bottom";
import { toSize } from "../../../globalStyle";

const MakeCourseMainScreen = () => {
  const [search, setChangeSearch] = useState("");
  return (
    <View style={styles.fullscreen}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.rowView}>
          <SearchView
            search={search}
            placeholder={"Search"}
            setChangeSearch={setChangeSearch}
          />
        </View>
        <View style={styles.MainView}></View>
      </View>
      <Bottom num={5} />
    </View>
  );
};
export default MakeCourseMainScreen;

const styles = StyleSheet.create({
  fullscreen: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    alignItems: "center",
    flex: 1,
  },
  container: {
    width: "90%",
    marginTop: toSize(44),
    flex: 1,
  },
  MainView: {
    flex: 1,
    backgroundColor: "pink",
    marginHorizontal: toSize(24),
    marginVertical: toSize(22),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
