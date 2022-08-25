import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";

import { SimpleLineIcons } from "@expo/vector-icons";
import { toSize } from "../../../globalStyle";
import filter_arrow from "../../../icons/filter_arrow.svg";
import Category_Header from "../../../components/Category_Header";
import SimplePopupMenu from "react-native-simple-popup-menu";
import PlaceForm from "../../../components/PlaceForm/PlaceForm";

const SelectCategoryScreen = ({ route }) => {
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
        { tag_name: "#Fun3", tag_category: "B" },
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
      <View style={styles.MainView}>
        <ScrollView contentContainerStyle={styles.listView}>
          <View style={styles.FilterView}>
            <SimplePopupMenu
              items={items}
              style={styles.button}
              onSelect={(items) => {
                onMenuPress(items.id);
              }}
              onCancel={() => console.log("onCancel")}
            >
              <View style={styles.filterMenuView}>
                <WithLocalSvg asset={filter_arrow} />
                <Text style={styles.filterMenuText}>Order</Text>
                <SimpleLineIcons
                  name="arrow-down"
                  size={toSize(10)}
                  color="#C5C6CC"
                />
              </View>
            </SimplePopupMenu>
          </View>
          {arr.map((item, index) => {
            return (
              <PlaceForm
                place_name={item.place_name}
                region={item.region}
                heartScore={item.heartscore}
                starScore={item.starscore}
                category={item.category}
                tag={item.tag}
                key={index}
              />
            );
          })}
        </ScrollView>
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
  MainView: {
    flex: 1,
    backgroundColor: "#fff",
    width: responsiveScreenWidth(100),
    alignItems: "center",
    marginVertical: toSize(4),
  },
  FilterView: {
    marginBottom: toSize(13),
  },
  button: { alignItems: "flex-end" },
  filterMenuView: {
    paddingHorizontal: toSize(12),
    paddingVertical: toSize(8),
    flexDirection: "row",
    borderColor: "#E9E9E9",
    borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  filterMenuText: {
    color: "#1F2024",
    fontSize: toSize(12),
    fontWeight: "400",
    paddingRight: toSize(12),
    paddingLeft: toSize(8),
  },
  listView: {
    backgroundColor: "#fff",
    paddingHorizontal: responsiveScreenWidth(5),
    flexGrow: 1,
    width: "100%",
  },
});
