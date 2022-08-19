import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { toSize } from "../../globalStyle.js";
import { Fontisto } from "@expo/vector-icons";
import PlaceList from "./PlaceList.jsx";

import { useNavigation } from "@react-navigation/native";
export default function SelectMakeCourse({ SelectView, setSelectView }) {
  const navigation = useNavigation();
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
      <Text style={styles.titleText}>Do you want to select this location?</Text>
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.CancelBtn}
        >
          <Text style={styles.CancelbtnText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={handelSelect}
          style={styles.SelectBtn}
        >
          <Text style={styles.SelectbtnText}>Select</Text>
        </TouchableOpacity>
      </View>
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
  titleText: {
    fontSize: toSize(16),
    fontWeight: "700",
    width: "100%",
    marginBottom: toSize(9),
    paddingLeft: toSize(5),
  },
  line: {
    backgroundColor: "#DADADA",
    width: toSize(50),
    height: toSize(4),
    borderRadius: 100 / 2,
    marginTop: toSize(10),
    marginBottom: toSize(28),
  },
  CancelBtn: {
    marginTop: toSize(26),
    width: toSize(156),
    borderColor: "#71727A",
    borderWidth: 1,
    backgroundColor: "#fff",
    paddingVertical: toSize(12),
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: toSize(16),
  },
  SelectBtn: {
    marginTop: toSize(26),
    width: toSize(156),
    borderColor: "#FFCC00",
    borderWidth: 1,
    backgroundColor: "#fff",
    paddingVertical: toSize(12),
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  CancelbtnText: {
    fontWeight: "600",
    fontSize: toSize(12),
    color: "#71727A",
  },
  SelectbtnText: {
    fontWeight: "600",
    fontSize: toSize(12),
    color: "#FFCC00",
  },
});
