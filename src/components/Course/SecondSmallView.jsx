import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { toSize } from "../../globalStyle";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import SimplePopupMenu from "react-native-simple-popup-menu";
const SecondSmallView = ({ course_info }) => {
  const place = require("../../images/place1.png");

  return (
    <View style={styles.rowView_space}>
      <View style={styles.rowView}>
        <Image style={styles.picture} source={place} />
        <Image style={styles.picture} source={place} />
        <Image style={styles.picture} source={place} />
      </View>
      <View>
        <View style={styles.rowView}>
          <Feather name="map-pin" size={toSize(12)} color="black" />
          <View style={styles.rowView_place}>
            <Text style={styles.boldText}>3 </Text>
            <Text style={styles.normalText}>places</Text>
          </View>
        </View>
        <View style={styles.border}></View>
        <View style={styles.rowView}>
          <Text style={styles.boldText}>Total </Text>
          <Text style={styles.normalText}>10km</Text>
        </View>
      </View>
    </View>
  );
};
export default SecondSmallView;
const styles = StyleSheet.create({
  ListView: {
    backgroundColor: "#FFFFFF",
    borderRadius: toSize(15),
    paddingHorizontal: toSize(16),
    paddingVertical: toSize(16),
    marginLeft: toSize(8),
    marginTop: toSize(11),
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
