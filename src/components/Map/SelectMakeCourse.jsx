import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { toSize } from "../../globalStyle.js";
import { Fontisto } from "@expo/vector-icons";
import PlaceList from "./PlaceList.jsx";

export default function SelectMakeCourse({ SelectView, setSelectView }) {
  const arr = {
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
  };

  const handelSelect = () => {
    setSelectView(SelectView + 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <PlaceList
        place_name={arr.place_name}
        region={arr.region}
        category={arr.category}
        tag={arr.tag}
        num={1}
        selecttype={arr.selecttype}
        screentype={"info"}
        km={1}
      />
      <TouchableOpacity
        activeOpacity={1}
        onPress={handelSelect}
        style={styles.SelectBtn}
      >
        <Text style={styles.btnText}>Select</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    width: "100%",
    paddingBottom: toSize(30),
    paddingHorizontal: toSize(24),
    alignItems: "center",
    borderTopStartRadius: 45,
    borderTopEndRadius: 45,
  },
  line: {
    backgroundColor: "#DADADA",
    width: toSize(50),
    height: toSize(4),
    borderRadius: 100 / 2,
    marginTop: toSize(10),
    marginBottom: toSize(28),
  },
  SelectBtn: {
    marginTop: toSize(26),
    width: "100%",
    borderColor: "#FFCC00",
    borderWidth: 1,
    backgroundColor: "#fff",
    paddingVertical: toSize(12),
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontWeight: "600",
    fontSize: toSize(12),
    color: "#FFCC00",
  },
});
