// 코스에 넣을지 선택하는 컴포넌트
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { toSize } from "../../globalStyle.js";
import PlaceList from "./PlaceList.jsx";
import { useNavigation } from "@react-navigation/native";
export default function SelectMakeCourse({ params, handleInputCheck }) {
  const navigation = useNavigation();
  const handelSelectButton = () => {
    handleInputCheck(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.titleText}>Do you want to select this location?</Text>
      <PlaceList params={params} num={1} />
      <View style={styles.buttonView}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.navigate("MakeCourse", { params: [] });
          }}
          style={styles.CancelBtn}
        >
          <Text style={styles.CancelBtnText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          onPress={handelSelectButton}
          style={styles.SelectBtn}
        >
          <Text style={styles.SelectBtnText}>Select</Text>
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
  buttonView: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
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
  CancelBtnText: {
    fontWeight: "600",
    fontSize: toSize(12),
    color: "#71727A",
  },
  SelectBtnText: {
    fontWeight: "600",
    fontSize: toSize(12),
    color: "#FFCC00",
  },
});
