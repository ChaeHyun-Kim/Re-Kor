import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { toSize } from "../../globalStyle";
import SecondView from "./SecondView";
import SimplePopupMenu from "react-native-simple-popup-menu";
import { RenameFolderAPI, RemoveFolderAPI } from "../../api/Courselist";

import { FontAwesome, AntDesign } from "@expo/vector-icons";
const CourseListView = ({
  courseList, //전체 데이터
  partdata, // 한 인덱스 데이터
  folderindex, //인덱스
  setCourseList, //코스 리스트 관리하는 함수
  // setRemove,
}) => {
  var change_data = courseList;
  const coursedata = partdata.courseList;
  const [click, setClick] = useState(false);
  const [rename, setRename] = useState(false);
  const [foldername, setFoldername] = useState(partdata.folderName);
  const [coursepart, setCoursepart] = useState(coursedata);
  const items = [
    { id: "rename", label: "Rename a folder" },
    // { id: "delete", label: "delete folder and course" },
  ];
  const onMenuPress = (id) => {
    if (id === "rename") {
      setRename(true);
    }
    // else if (id === "delete") {
    //   change_data.splice(folderindex, 1);
    //   setCourseList(change_data);
    //   console.log("코스 리스트", courseList);
    //   console.log(folderindex);
    //   setRemove([courseList[folderindex].folderId.id]);
    //   // RemoveFolderAPI(courseList[folderindex].folderId.id);
    // }
  };
  useEffect(() => {
    partdata.courseList = coursepart;
    courseList[folderindex] = partdata;
    setCourseList(courseList);
  }, [coursepart]);
  return (
    <View>
      {foldername != "" && (
        <>
          <View
            style={{
              padding: toSize(2),
              marginBottom: toSize(16),
              marginHorizontal: toSize(15),
            }}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setClick(click === false ? true : false)}
            style={styles.ListView}
          >
            {(click && (
              <FontAwesome name="folder-open" size={20} color="#71727A" />
            )) || <FontAwesome name="folder" size={20} color="#71727A" />}

            <View style={styles.textView}>
              <TextInput
                value={foldername}
                editable={rename}
                style={styles.mainText}
                placeholder={"Folder Name"}
                onChangeText={(text) => {
                  setFoldername(text);
                }}
                onBlur={() => {
                  setRename(false);
                  if (foldername === "") {
                    partdata.folderName = "Folder";
                    setFoldername("Folder");
                    Alert.alert(
                      "Folder Name Error",
                      "Folder name is not entered.\nReplace with the default.",
                      [
                        {
                          text: "OK",
                          onPress: () => {
                            console.log("폴더 이름 초기화");
                          },
                        },
                      ]
                    );
                  }
                  courseList[folderindex] = partdata;
                  setCourseList(courseList);
                  RenameFolderAPI(partdata.folderId.id, foldername);
                }}
              />

              <Text style={styles.numText}>{coursedata.length}</Text>
            </View>
            <SimplePopupMenu
              items={items}
              style={styles.button}
              onSelect={(items) => {
                onMenuPress(items.id);
              }}
              onCancel={() => console.log("onCancel")}
            >
              <AntDesign name="ellipsis1" size={toSize(24)} color="#8F9098" />
            </SimplePopupMenu>
          </TouchableOpacity>
        </>
      )}

      {foldername === "" &&
        coursedata.map((item, index) => (
          <SecondView
            key={index}
            partdata={partdata}
            folderindex={folderindex}
            courseList={courseList}
            partcoursedata={item}
            courseindex={index}
            setCoursepart={setCoursepart}
            setCourseList={setCourseList}
          />
        ))}
      {foldername != "" &&
        click === true &&
        coursedata.map((item, index) => (
          <SecondView
            key={index}
            partdata={partdata}
            folderindex={folderindex}
            courseList={courseList}
            partcoursedata={item}
            courseindex={index}
            setCoursepart={setCoursepart}
            setCourseList={setCourseList}
          />
        ))}
    </View>
  );
};
export default CourseListView;
const styles = StyleSheet.create({
  ListView: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: toSize(25),
    height: toSize(52),
    paddingHorizontal: toSize(16),
    marginHorizontal: toSize(3),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  textView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  mainText: {
    fontSize: toSize(14),
    color: "#1F2024",
    fontWeight: "400",
    marginLeft: toSize(18),
    marginRight: toSize(8),
  },
  numText: {
    fontSize: toSize(14),
    color: "#000",
    fontWeight: "700",
  },
});
