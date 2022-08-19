import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../../../components/Header";
import Bottom from "../../../components/Bottom";
import ListView from "../../../components/Course/FirstView";
import { toSize } from "../../../globalStyle";
import { AntDesign } from "@expo/vector-icons";
import folder from "../../../icons/folder.svg";
import AutoScrollView from "react-native-auto-scroll-view";
import { WithLocalSvg } from "react-native-svg";
const CourseListMainScreen = () => {
  const emptyfolder = { folder: "", course: [] };
  const data = [
    {
      folder: "Recent travel courses created",
      course: [
        {
          course_name: "My First Trip",
          course_info: [
            {
              place_name: "Gapyeong Rail Park1",
              region: "Gapyeong123",
              heartscore: 1,
              starscore: 4.5,
              category: "K-POP",
              tag: [
                { tag_name: "#Fun3", tag_category: "A" },
                { tag_name: "#Fun32", tag_category: "C" },
              ],
              selecttype: "",
            },
            {
              place_name: "Gapyeong Rail Park1",
              region: "Gapyeong123",
              heartscore: 1,
              starscore: 4.5,
              category: "K-DRAMA",
              tag: [
                { tag_name: "#Fun3", tag_category: "A" },
                { tag_name: "#Fun32", tag_category: "C" },
              ],
              selecttype: "Heart",
              km: 5,
            },
          ],
        },
        {
          course_name: "My Second Trip",
          course_info: [
            {
              place_name: "Gapyeong Rail Park1",
              region: "Gapyeong123",
              heartscore: 1,
              starscore: 4.5,
              category: "K-POP",
              tag: [
                { tag_name: "#Fun3", tag_category: "A" },
                { tag_name: "#Fun32", tag_category: "C" },
              ],
              selecttype: "good",
            },
          ],
        },
      ],
    },
    {
      folder: "Recent travel courses created",
      course: [
        {
          course_name: "My First Trip",
          course_info: [
            {
              place_name: "Gapyeong Rail Park1",
              region: "Gapyeong123",
              heartscore: 1,
              starscore: 4.5,
              category: "K-POP",
              tag: [
                { tag_name: "#Fun3", tag_category: "A" },
                { tag_name: "#Fun32", tag_category: "C" },
              ],
              selecttype: "Heart",
            },
            {
              place_name: "Gapyeong Rail Park1",
              region: "Gapyeong123",
              heartscore: 1,
              starscore: 4.5,
              category: "K-DRAMA",
              tag: [
                { tag_name: "#Fun3", tag_category: "A" },
                { tag_name: "#Fun32", tag_category: "C" },
              ],
              selecttype: "good",
              km: 50,
            },
          ],
        },
      ],
    },

    { folder: "", course: [] },
    { folder: "", course: [] },
  ];

  const [courselist, setCourselist] = useState(data);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header Title={"CourseList"} />
      <AutoScrollView style={styles.MainView}>
        {courselist.map((item, index) => {
          return (
            <ListView folder={item.folder} course={item.course} key={index} />
          );
        })}
        <View style={{ height: toSize(50) }}></View>
      </AutoScrollView>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          courselist.push(emptyfolder);
          setCourselist(courselist),
            console.log("===================================="),
            console.log(courselist);
        }}
      >
        <WithLocalSvg
          style={{
            fontSize: toSize(60),

            position: "absolute",
            bottom: toSize(28),
            right: toSize(23),
          }}
          asset={folder}
        />
      </TouchableOpacity>
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
    paddingHorizontal: toSize(22),
    paddingTop: toSize(22),
  },
  main_text: {
    fontSize: toSize(24),
    fontWeight: "700",
    color: "black",
  },
});
