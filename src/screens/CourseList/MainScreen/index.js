import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../../components/Header";
import Bottom from "../../../components/Bottom";
import ListView from "../../../components/Course/FirstView";
import { toSize } from "../../../globalStyle";

const CourseListMainScreen = () => {
  const data = [{ name: "My First Trip" }, { name: "My Second Trip" }];
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header Title={"CourseList"} />
      <View style={styles.MainView}>
        <ListView data={data} />
      </View>
      <Bottom num={3} />
    </View>
  );
};
export default CourseListMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  MainView: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    padding: toSize(22),
  },
  main_text: {
    fontSize: toSize(24),
    fontWeight: "700",
    color: "black",
  },
});
