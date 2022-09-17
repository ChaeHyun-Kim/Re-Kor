import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "../../../components/Header";
import Bottom from "../../../components/Bottom";
import ListView from "../../../components/Course/FirstView";
import { toSize } from "../../../globalStyle";
import { CourseListAPI, AddFolderAPI } from "../../../api/Courselist";
import TitleInfo from "../../../components/common/TitleInfoScreen";
const CourseListMainScreen = () => {
  const [courseList, setCourseList] = useState([]);

  const handleList = async () => {
    CourseListAPI()
      .then((response) => {
        if (response != null) {
          setCourseList(response);
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
      <ScrollView style={styles.MainView}>
        <TitleInfo
          title={"CourseList"}
          content={"Check out the course that was made"}
        />

        {courseList.map((item, index) => {
          return (
            <ListView
              key={index}
              courselist={courseList}
              partdata={item}
              folderindex={index}
              setCourselist={setCourseList}
            />
          );
        })}
        <View style={{ height: toSize(50) }} />
      </ScrollView>

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
