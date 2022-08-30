import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { toSize } from "../../globalStyle";
import { AntDesign } from "@expo/vector-icons";
import SecondSmallView from "./SecondSmallView";
import { SimpleLineIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
const CourseView = ({
  partcoursedata, //한 인덱스 코스 데이터
  courseindex, //인덱스
}) => {
  const course_name = partcoursedata.course_name;
  const course_info = partcoursedata.course_info;

  const place = require("../../images/place1.png");

  return (
    <View style={styles.ListView}>
      <View style={styles.courseNameView}>
        <AntDesign name="right" size={toSize(12)} color="#8F9098" />
        <Text style={styles.mainText}>{course_name}</Text>

        {/* style={styles.button} */}
        <SimpleLineIcons
          style={{ paddingLeft: toSize(12) }}
          name="menu"
          size={14}
          color="#D4D6DD"
        />
      </View>

      <SecondSmallView course_info={course_info}></SecondSmallView>
    </View>
  );
};
export default CourseView;
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
