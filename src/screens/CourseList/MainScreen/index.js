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
import { CourseListAPI, AddFolderAPI } from "../../../api/Courselist";
const CourseListMainScreen = () => {
  const emptyfolder = [{ folderName: "New Folder", courseList: [] }];
  const [courselist, setCourselist] = useState([]);
  const [confirmCheck, setConfirmCheck] = useState(false);

  const handleList = async () => {
    CourseListAPI()
      .then((response) => {
        if (response != null) {
          console.log(response);
          setCourselist(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const AddFolder = async () => {
    AddFolderAPI()
      .then((response) => {
        console.log("폴더 추가", response);
      })
      .catch((error) => {
        console.log("에러", error);
      });
  };

  useEffect(() => {
    handleList();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header Title={"CourseList"} />
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
              key={index}
              courselist={courselist}
              partdata={item}
              folderindex={index}
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
          AddFolder();
          handleList();
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
