import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../../../components/Header";
import BackHeader from "../../../components/BackHeader";
import Bottom from "../../../components/Bottom";
import ListView from "../../../components/Course/FirstView";
import { toSize } from "../../../globalStyle";
import { AntDesign } from "@expo/vector-icons";
import folder from "../../../icons/folder.svg";
import AutoScrollView from "react-native-auto-scroll-view";
import { WithLocalSvg } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
const CourseListMainScreen = () => {
  const emptyfolder = [{ folder: "", course: [] }];
  const data = [
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

  // const course = AsyncStorage.getItem("@courselist", (err, result) => {
  //   return JSON.parse(result);
  // });

  const [courselist, setCourselist] = useState(data);
  const [confirmCheck, setConfirmCheck] = useState(false);
  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

  useEffect(() => {
    AsyncStorage.setItem(
      "@courselist",
      JSON.stringify(data, getCircularReplacer()),
      () => {
        console.log("코스 리스트 재저장");
      }
    );
    console.log("courselist변경됨1");
  }, [courselist]);

  data.myself = data;
  AsyncStorage.setItem(
    "@courselist",
    JSON.stringify(data, getCircularReplacer()),
    () => {
      console.log("코스 리스트 저장 완료");
    }
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" /><Header Title={"CourseList"} />
      <AutoScrollView
        style={styles.MainView}
        onScrollEndDrag={() => {
          console.log(
            "현재 페이지와 마지막 페이지 값이 같다면 데이터 불러오기 중단하라 !"
          );
        }}
      >
        {courselist.map((item, index) => {
          return (
            <ListView
              courselist={courselist}
              partdata={item}
              index={index}
              setCourselist={setCourselist}
            />
          );
        })}
        <View style={{ height: toSize(50) }}></View>
      </AutoScrollView>

      
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setCourselist(courselist.concat(emptyfolder));
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
    backgroundColor: "#fff",
    paddingHorizontal: toSize(22),
    paddingTop: toSize(22),
  },
  main_text: {
    fontSize: toSize(24),
    fontWeight: "700",
    color: "black",
  },
});
