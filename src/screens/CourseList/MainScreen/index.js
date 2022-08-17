import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../../components/Header";
import Bottom from "../../../components/Bottom";
import ListView from "../../../components/Course/FirstView";
import { toSize } from "../../../globalStyle";
import { AntDesign } from "@expo/vector-icons";
import folder from "../../../icons/folder.svg";
import { WithLocalSvg } from "react-native-svg";
const CourseListMainScreen = () => {
  const data = [
    {
      folder: "Recent travel courses created",
      course: [
        { course_name: "My First Trip", course_info: "" },
        { course_name: "My Second Trip", course_info: "" },
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header Title={"CourseList"} />
      <View style={styles.MainView}>
        <WithLocalSvg
          style={{
            fontSize: toSize(60),
            position: "absolute",
            bottom: toSize(28),
            right: toSize(23),
          }}
          asset={folder}
        />
        {data.map((item, index) => {
          return (
            <ListView folder={item.folder} course={item.course} key={index} />
          );
        })}
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
    backgroundColor: "#FFFFFF",
    padding: toSize(22),
  },
  main_text: {
    fontSize: toSize(24),
    fontWeight: "700",
    color: "black",
  },
});
