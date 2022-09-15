import React, { useEffect, useState, Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FolderView from "../../../components/Course/FolderView";
import { toSize } from "../../../globalStyle";
import CourseBackHeader from "../../../components/CourseBackHeader";
import AutoScrollView from "react-native-auto-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { MoveFolderAPI } from "../../../api/Courselist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MoveFolder = ({ route }) => {
  const Courseid = route.params.Courseid;
  const Folderid = route.params.Folderid;
  const courseindex = route.params.Courseindex;
  const folderindex = route.params.Folderindex;
  const courselist = route.params.courselist;
  const [onlyone, setOnlyone] = useState(Array(courselist.length).fill(false));

  const handleClick = (index) => {
    const newArr = Array(courselist.length).fill(false);
    newArr[index] = true;
    setSelectindex(index);
    setOnlyone(newArr);
    setConfirmCheck(true);
  };
  const [selectindex, setSelectindex] = useState(-1);
  const handleSelect = () => {
    var destid = onlyone.indexOf(true);
    destid = courselist[destid].folderId.id;
    MoveFolderAPI(Courseid, Folderid, destid);
    navigation.navigate("CourseList");
  };

  const navigation = useNavigation();
  const [confirmCheck, setConfirmCheck] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CourseBackHeader title="Move to a different folder" />
      <AutoScrollView style={styles.MainView}>
        {courselist.map((item, index) => {
          return (
            <FolderView
              index={index}
              item={item}
              courselist={courselist}
              folder_name={item.folderName}
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
            confirmCheck && handleSelect();
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
    marginBottom: toSize(80),
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
