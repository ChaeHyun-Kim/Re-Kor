import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { toSize } from "../../globalStyle.js";
import { Fontisto } from "@expo/vector-icons";
import { WithLocalSvg } from "react-native-svg";

import ic_map from "../../icons/ic_map.svg";

export default function FirstPlaceView({ SelectView, setSelectView, back }) {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setSelectView(back ? SelectView - 1 : SelectView + 1)}
        style={styles.SelectBtn}
      >
        <WithLocalSvg width={toSize(15)} height={toSize(15)} asset={ic_map} />
        <Text style={styles.btnText}>Select the first place</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
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
    marginVertical: toSize(10),
  },
  SelectBtn: {
    width: "100%",
    shadowColor: "#000",
    backgroundColor: "#FFF",
    shadowOffset: {
      width: toSize(3),
      height: toSize(3),
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    flexDirection: "row",
    height: toSize(59),
    borderRadius: 100 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontWeight: "500",
    fontSize: toSize(12),
    color: "#5E6169",
    marginLeft: toSize(9),
  },
});
