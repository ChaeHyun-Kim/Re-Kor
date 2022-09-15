import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../../../components/Header";
import BackHeader from "../../../components/BackHeader";
import Bottom from "../../../components/Bottom";
import ListView from "../../../components/Course/FirstView";
import { toSize } from "../../../globalStyle";
import { AntDesign } from "@expo/vector-icons";
import AutoScrollView from "react-native-auto-scroll-view";
import { WithLocalSvg } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CourseListAPI, AddFolderAPI } from "../../../api/Courselist";
import TitleInfo from "../../../components/common/TitleInfoScreen";
const CourseListMainScreen = () => {
  const emptyfolder = [{ folderName: "New Folder", courseList: [] }];
  const [courselist, setCourselist] = useState([]);
  const [confirmCheck, setConfirmCheck] = useState(false);

  const handleList = async () => {
    CourseListAPI()
      .then((response) => {
        if (response != null) {
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

  useEffect(() => {
    console.log("데이터", courselist);
  }, [courselist]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header Title={"CourseList"} />
      <AutoScrollView
        style={styles.MainView}
        // onScrollEndDrag={() => {
        //   console.log(
        //     "현재 페이지와 마지막 페이지 값이 같다면 데이터 불러오기 중단하라 !"
        //   );
        // }}
      >
        <TitleInfo
          title={"Courselist"}
          content={"Check out the course that was made"}
        />
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

      {/* <TouchableOpacity
        activeOpacity={0.8}
        style={{
          fontSize: toSize(60),
          position: "absolute",
          bottom: toSize(110),
          right: toSize(23),
          zIndex: 100,
        }}
        onPress={() => {
          console.log("터치");
          setCourselist(courselist.concat(emptyfolder));
          AddFolder();
          handleList();
        }}
      >
        <View
          style={{
            padding: toSize(18),
            borderRadius: 50,
            borderWidth: 1,
            borderColor: "#D4D6DD",
            backgroundColor: "#FFF",
          }}
        >
          <AntDesign name="addfolder" size={28} color="#5F5F5F" />
        </View>
      </TouchableOpacity> */}
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
