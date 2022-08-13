import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { toSize } from "../../globalStyle.js";
import { Fontisto } from "@expo/vector-icons";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";
import { Entypo } from "@expo/vector-icons";
import FirstPlaceView from "./FirstPlaceView.jsx";
import { ScrollView } from "react-native-gesture-handler";
import PlaceTitle from "./PlaceTitle.jsx";

export default function FullMakeCourse({ FirstPlace, setFirstPlace }) {
  const [HeartViewClick, setHeartViewClick] = useState(false);
  const [HandViewClick, setHandViewClick] = useState(false);

  return (
    <View style={styles.container}>
      <FirstPlaceView FirstPlace={FirstPlace} setFirstPlace={setFirstPlace} />
      <Entypo name="dots-three-vertical" size={toSize(17)} color="#D9D9D9" />

      <View style={styles.line} />
      <ScrollView style={styles.ScrollView}>
        <PlaceTitle
          title={"Recommended tourist destination"}
          state={HeartViewClick}
          handleState={setHeartViewClick}
          leftIcon={"heart-o"}
          rightIcon={"refresh"}
        />

        <PlaceTitle
          title={"Wish Travel List"}
          state={HandViewClick}
          handleState={setHandViewClick}
          leftIcon={"thumbs-o-up"}
        />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: responsiveScreenHeight(70),
    width: "100%",
    alignItems: "center",
    borderTopStartRadius: 45,
    borderTopEndRadius: 45,
  },
  line: {
    backgroundColor: "#F3F3F3",
    width: "100%",
    height: toSize(5),
    borderRadius: 100 / 2,
    marginTop: toSize(17),
  },
  ScrollView: {
    width: "100%",
  },
});
