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

const SelectCategoryScreen = ({ route, navigation }) => {
  const { Category } = route.params;
  const items = [
    { id: "name", label: "Name" },
    { id: "heart", label: "Likes" },
    { id: "star", label: "Rates" },
  ];
  const arr = [
    {
      place_name: "Gapyeong Rail Park1",
      region: "Gapyeong123",
      heartscore: 1,
      starscore: 4.5,
      category: "K-POP",
      tag: [
        // ["Fun3", "A"],
        // ["123", "B"],
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
        // ["#Fun3a", "A"],
        // ["#Fun3ab", "A"],
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
        // ["#Fun3", "A"],
        { tag_name: "#Fun3", tag_category: "A" },
        { tag_name: "#Fun3", tag_category: "B" },
        { tag_name: "#Fun32", tag_category: "C" },
      ],
    },
  ];

  const onMenuPress = (id) => {
    if (id === "heart") {
      // 찜 개수 순으로 정렬된 데이터 받아오기
    } else if (id === "star") {
      // 별점 순으로 정렬된 데이터 받아오기
    } else if (id === "name") {
      // 이름 순으로 정렬된 데이터 받아오기
    }

    console.log(arr);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Category_Header title={Category} />
      <View style={styles.mainview}>
        <View style={styles.FilterView}>
          <SimplePopupMenu
            items={items}
            style={styles.button}
            onSelect={(items) => {
              onMenuPress(items.id);
            }}
            onCancel={() => console.log("onCancel")}
          >
            <View style={styles.FilterText}>
              <Text>Order</Text>
            </View>
          </SimplePopupMenu>
        </View>
        <FlatList
          keyExtractor={(item) => item.toString()}
          data={arr}
          renderItem={({ item, key }) => (
            <PlaceForm
              place_name={item.place_name}
              region={item.region}
              heartscore={item.heartscore}
              starscore={item.starscore}
              category={item.category}
              tag={item.tag}
              key={key}
            />
          )}
        />
      </View>
    </View>
  );
};

export default SelectCategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  mainview: {
    width: "90%",
    flex: 1,
    backgroundColor: "#FAFAFA",
    alignItems: "center",
  },
  FilterView: {
    width: "90%",
    backgroundColor: "#FAFAFA",
    alignItems: "flex-end",
    marginVertical: 10,
  },
  FilterText: {
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderColor: "#E9E9E9",
    borderWidth: 2,
  },
});
