import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { toSize } from "../../globalStyle";
import { AntDesign } from "@expo/vector-icons";
import SecondView from "./SecondView";
import SimplePopupMenu from "react-native-simple-popup-menu";
import { FontAwesome } from "@expo/vector-icons";

const CourseListView = ({
  courselist, //전체 데이터
  partdata, // 한 인덱스 데이터
  folderindex, //인덱스
  setCourselist, //코스 리스트 관리하는 함수
}) => {
  const folder_name = partdata.folder;
  const coursedata = partdata.course;
  const [click, setClick] = useState(false);
  const [rename, setRename] = useState(false);
  const [foldername, setFoldername] = useState(false);
  const [coursepart, setCoursepart] = useState(coursedata);
  const items = [{ id: "rename", label: "Rename a folder" }];
  const onMenuPress = (id) => {
    if (id === "rename") {
      setRename(true);
    }
  };
  useEffect(() => {
    // AsyncStorage.setItem("@courselist", JSON.stringify(courselist), () => {
    //   console.log("코스 리스트 저장 완료", courselist);
    // });
    partdata.course = coursepart;
    courselist[folderindex] = partdata;
    setCourselist(courselist);
  }, [coursepart]);

  return (
    <View style={{ padding: toSize(2), marginBottom: toSize(16) }}>
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
            value={folder_name}
            editable={rename}
            style={styles.mainText}
            placeholder={"Text"}
            onChangeText={(text) => {
              setFoldername(text);
            }}
            onBlur={() => {
              setRename(false);
              partdata.folder = foldername;
              courselist[folderindex] = partdata;
              setCourselist(courselist);
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
      {click === true &&
        coursedata.map((item, index) => (
          <SecondView
            partdata={partdata}
            folderindex={folderindex}
            courselist={courselist}
            partcoursedata={item}
            courseindex={index}
            setCoursepart={setCoursepart}
            setCourselist={setCourselist}
          />
        ))}
    </View>
  );
};
export default CourseListView;
const styles = StyleSheet.create({
  ListView: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: toSize(25),
    height: toSize(52),
    paddingHorizontal: toSize(16),
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
