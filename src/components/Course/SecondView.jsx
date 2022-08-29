import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { toSize } from "../../globalStyle";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import SimplePopupMenu from "react-native-simple-popup-menu";
import SecondSmallView from "./SecondSmallView";
import SecondBigView from "./SecondBigView";

import { useNavigation } from "@react-navigation/native";
const SecondView = ({
  courselist, //전체 코스리스트
  partcoursedata, //한 인덱스 코스 데이터
  index, //인덱스
  setCoursepart, //코스 정보 관리
  setMovefolder,
  setCourselist,
}) => {
  const navigation = useNavigation();
  const course_name = partcoursedata.course_name;
  const course_info = partcoursedata.course_info;

  const [click, setClick] = useState(false);
  const place = require("../../images/place1.png");
  const items = [
    { id: "move", label: "Move to a different folder" },
    { id: "rename", label: "Rename a course" },
    { id: "order", label: "change the order" },
  ];
  const [rename, setRename] = useState(false);
  const [coursename, setCoursename] = useState(course_name);
  const onMenuPress = (id) => {
    if (id === "rename") {
      setRename(true);
    } else if (id === "move") {
      setMovefolder(true);
      // navigation.navigate("MoveFolder", {
      //   // Data: courselist,
      //   setCourselist: setCourselist,
      // });
    } else if (id === "order") {
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.ListView}
      onPress={() => setClick(click === false ? true : false)}
    >
      <View style={styles.courseNameView}>
        {(click && (
          <AntDesign name="down" size={toSize(12)} color="#8F9098" />
        )) || <AntDesign name="right" size={toSize(12)} color="#8F9098" />}
        <TextInput
          value={coursename}
          editable={rename}
          style={styles.mainText}
          placeholder={"Text"}
          onChangeText={(text) => {
            setCoursename(text);
          }}
          onBlur={() => {
            setRename(false);
            partcoursedata.course_name = coursename;
            courselist[index] = partcoursedata;
            console.log("코스 전체 데이터:", courselist);
            setCoursepart(courselist);
            // setCourselist(data);
          }}
        />

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
      </View>

      {(click && <SecondBigView course_info={course_info}></SecondBigView>) || (
        <SecondSmallView course_info={course_info}></SecondSmallView>
      )}
    </TouchableOpacity>
  );
};
export default SecondView;
const styles = StyleSheet.create({
  ListView: {
    backgroundColor: "#FFFFFF",
    borderRadius: toSize(15),
    paddingHorizontal: toSize(16),
    paddingVertical: toSize(16),
    marginHorizontal: toSize(8),
    marginTop: toSize(9),
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
  courseNameView: {
    flexDirection: "row",
    marginBottom: toSize(20),
    alignItems: "center",
  },
  mainText: {
    fontSize: toSize(14),
    color: "#2F3036",
    fontWeight: "700",
    marginLeft: toSize(18),
    flex: 1,
  },
  picture: {
    width: toSize(65),
    height: toSize(65),
    marginRight: toSize(10),
    borderRadius: 7,
  },
  border: {
    borderColor: "#D4D6DD",
    borderWidth: toSize(1),
    marginVertical: toSize(4),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  rowView_place: {
    marginLeft: toSize(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  rowView_space: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  boldText: {
    fontSize: toSize(10),
    fontWeight: "700",
  },
  normalText: {
    fontSize: toSize(10),
    fontWeight: "400",
  },
});
