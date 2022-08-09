import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import Category_Header from "../../../components/Category_Header";
import SimplePopupMenu from "react-native-simple-popup-menu";
import PlaceForm from "../../../components/PlaceForm";
const ExploreMainScreen = ({ route, navigation }) => {
  const { Category } = route.params;
  const filterList = [
    { id: "abc", label: "가나다순" },
    { id: "age", label: "나이순" },
  ];
  const arr = [
    {
      place_name: "Gapyeong Rail Park1",
      region: "Gapyeong123",
      heartscore: 100,
      starscore: 4.5,
      category: "K-POP",
      tag: [
        { tag_name: "#Fun1", tag_category: "A" },
        { tag_name: "#Fun1", tag_category: "B" },
        { tag_name: "#Fun1", tag_category: "C" },
      ],
    },
    {
      place_name: "Gapyeong1 Rail Park1",
      region: "Gapyeong1234",
      heartscore: 100,
      starscore: 4.5,
      category: "K-DRAMA",
      tag: [
        { tag_name: "#Fun2", tag_category: "A" },
        { tag_name: "#Fun2", tag_category: "B" },
        { tag_name: "#Fun2", tag_category: "C" },
      ],
    },
    {
      place_name: "Gapyeong1 Rail Park1",
      region: "Gapyeong1234",
      heartscore: 100,
      starscore: 4.5,
      category: "K-DRAMA",
      tag: [
        { tag_name: "#Fun3", tag_category: "A" },
        { tag_name: "#Fun3", tag_category: "B" },
        { tag_name: "#Fun3", tag_category: "C" },
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Category_Header title={Category} />
      <View style={styles.mainview}>
        <SimplePopupMenu
          // style={styles.margin}
          items={[
            { id: "abc", label: "가나다순" },
            { id: "age", label: "나이순" },
          ]}
          cancelLabel={"취소"}
          onSelect={(items) => {
            // this.onMenuPress(items.id);
          }}
          onCancel={() => console.log("onCancel")}
        ></SimplePopupMenu>
        <Text>필터자리</Text>

        <FlatList
          keyExtractor={(item) => item.toString()}
          data={arr}
          renderItem={({ item }) => (
            <PlaceForm
              place_name={item.place_name}
              region={item.region}
              heartscore={item.heartscore}
              starscore={item.starscore}
              category={item.category}
              tag={item.tag}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ExploreMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainview: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    alignItems: "center",
  },
});
