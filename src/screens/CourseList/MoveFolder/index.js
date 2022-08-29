import React, { useEffect, useState, Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FolderView from "../../../components/Course/FolderView";
import { toSize } from "../../../globalStyle";
import CourseBackHeader from "../../../components/CourseBackHeader";
import AutoScrollView from "react-native-auto-scroll-view";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MoveFolder = ({ route }) => {
  //  courselist async로 get함
  const courselist = [
    {
      folder: "Recent travel courses",
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
      folder: "My Trip in Korea~",
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
  ];

  const [onlyone, setOnlyone] = useState(Array(courselist.length).fill(false));
  const handleClick = (index) => {
    const newArr = Array(courselist.length).fill(false);
    newArr[index] = true;
    setOnlyone(newArr);
    setConfirmCheck(true);
    console.log(index);
    // 해당 인덱스의 폴더의 가장 마지막에... push / concat
  };
  const navigation = useNavigation();
  const [confirmCheck, setConfirmCheck] = useState(false);
  //   console.log("폴더 이동:  ", courselist);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CourseBackHeader title="Move to a different folder" />
      <AutoScrollView style={styles.MainView}>
        {courselist.map((item, index) => {
          return (
            <FolderView
              courselist={courselist}
              folder_name={item.folder}
              index={index}
              confirmCheck={confirmCheck}
              setConfirmCheck={setConfirmCheck}
              isSelected={onlyone[index]}
              handleClick={handleClick}
            />
          );
        })}
        <View style={{ height: toSize(50) }}></View>
      </AutoScrollView>
      <View style={{ width: "100%", alignItems: "center" }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.BottomView,
            confirmCheck
              ? { backgroundColor: "#FFCC00" }
              : { borderColor: "#FFCC00", borderWidth: 2 },
          ]}
          onPress={() => {
            confirmCheck && navigation.navigate("CourseList");
          }}
        >
          <Text
            style={[
              styles.BottomButtonText,
              confirmCheck ? { color: "#FFFFFF" } : { color: "#FFCC00" },
            ]}
          >
            Select
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MoveFolder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  MainView: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: toSize(22),
    paddingTop: toSize(22),
  },
  main_text: {
    fontSize: toSize(24),
    fontWeight: "700",
    color: "black",
  },
  BottomView: {
    backgroundColor: "#fff",
    width: "90%",
    height: toSize(48),
    marginVertical: toSize(24),
    borderRadius: 12,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  BottomButtonText: {
    fontSize: toSize(16),
    fontWeight: "600",
  },
});
