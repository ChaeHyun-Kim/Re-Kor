import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import { toSize } from "../../globalStyle.js";
import { Fontisto } from "@expo/vector-icons";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Entypo } from "@expo/vector-icons";
import FirstPlaceView from "./FirstPlaceView.jsx";
import { ScrollView } from "react-native-gesture-handler";
import PlaceTitle from "./PlaceTitle.jsx";
import PlaceList from "./PlaceList.jsx";

export default function FullMakeCourse({ SelectView, setSelectView }) {
  const [HeartViewClick, setHeartViewClick] = useState(false);
  const [HandViewClick, setHandViewClick] = useState(false);
  const arr = [
    {
      place_name: "Gapyeong Rail Park1",
      region: "Gapyeong123",
      heartscore: 1,
      starscore: 4.5,
      category: "K-POP",
      tag: [
        { tag_name: "#Fun3", tag_category: "A" },
        { tag_name: "#Fun32", tag_category: "C" },
      ],
    },
    {
      place_name: "Gapyeong1 Rail Park1",
      region: "Gapyeong1234",
      heartscore: 1000,
      starscore: 4.5,
      category: "K-DRAMA",
      tag: [
        { tag_name: "#Fun3", tag_category: "A" },
        { tag_name: "#Fun32", tag_category: "C" },
      ],
    },
    {
      place_name: "Gapyeong1 Rail Park1",
      region: "Gapyeong1234",
      heartscore: 400,
      starscore: 4.5,
      category: "K-DRAMA",
      tag: [
        { tag_name: "#Fun3", tag_category: "A" },
        { tag_name: "#Fun3", tag_category: "B" },
        { tag_name: "#Fun32", tag_category: "C" },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <FirstPlaceView
        SelectView={SelectView}
        setSelectView={setSelectView}
        back={true}
      />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setSelectView(SelectView + 1)}
      >
        <Entypo name="dots-three-vertical" size={toSize(17)} color="#D9D9D9" />
      </TouchableOpacity>

      <View style={styles.line} />
      <ScrollView contentContainerStyle={styles.ScrollView}>
        <PlaceTitle
          title={"Recommended tourist destination"}
          state={HeartViewClick}
          handleState={setHeartViewClick}
          leftIcon={"heart-o"}
          rightIcon={"refresh"}
        />
        {!HeartViewClick && (
          <View style={styles.PlaceListView}>
            {/* placelist 말고 */}
            {/* {arr.map((item, index) => {
              return (
                <PlaceList
                  key={index}
                  place_name={item.place_name}
                  region={item.region}
                  heartScore={item.heartscore}
                  starScore={item.starscore}
                  category={item.category}
                  selecttype={""}
                  screentype={"info"}
                  tag={item.tag}
                />
              );
            })} */}
          </View>
        )}

        <PlaceTitle
          title={"Wish Travel List"}
          state={HandViewClick}
          handleState={setHandViewClick}
          leftIcon={"thumbs-o-up"}
        />
        {!HandViewClick && (
          <View style={styles.PlaceListView}>
            {/* {arr.map((item, index) => {
              console.log(item.heartscore);
              return (
                <PlaceList
                  key={index}
                  place_name={item.place_name}
                  region={item.region}
                  heartScore={item.heartscore}
                  starScore={item.starscore}
                  category={item.category}
                  tag={item.tag}
                />
              );
            })} */}
          </View>
        )}
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
    flexGrow: 1,
    paddingBottom: toSize(20),
  },
  PlaceListView: {
    width: responsiveScreenWidth(100),
    paddingHorizontal: toSize(24),
    backgroundColor: "#fff",
  },
});
