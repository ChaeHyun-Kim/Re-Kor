import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { toSize } from "../../globalStyle";
import { AntDesign } from "@expo/vector-icons";
import SecondView from "./SecondView";

const CourseListView = ({ data }) => {
  const dataLength = useState(data.length);
  const [click, setClick] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setClick(click === false ? true : false)}
    >
      <View style={styles.ListView}>
        <AntDesign name="right" size={toSize(12)} color="#8F9098" />
        <Text style={styles.mainText}>
          Recent travel courses created{"  "}
          <Text style={styles.numText}>{dataLength}</Text>
        </Text>
        <AntDesign name="ellipsis1" size={toSize(24)} color="#8F9098" />
      </View>
      {click === true && data.map((data, key) => <SecondView data={data} />)}
    </TouchableOpacity>
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
  mainText: {
    fontSize: toSize(14),
    color: "#1F2024",
    fontWeight: "400",
    marginLeft: toSize(18),
    flex: 1,
  },
  numText: {
    fontSize: toSize(14),
    color: "#000",
    fontWeight: "700",
  },
});
