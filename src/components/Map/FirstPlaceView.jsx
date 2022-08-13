import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { toSize } from "../../globalStyle.js";
import { Fontisto } from "@expo/vector-icons";

export default function FirstPlaceView({ FirstPlace, setFirstPlace }) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => setFirstPlace(FirstPlace === false ? true : false)}
      style={styles.container}
    >
      <View style={styles.line} />
      <View style={styles.SelectBtn}>
        <Fontisto name="map-marker-alt" size={toSize(15)} color="black" />
        <Text style={styles.btnText}>Select the first place</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: toSize(108),
    width: "100%",
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
