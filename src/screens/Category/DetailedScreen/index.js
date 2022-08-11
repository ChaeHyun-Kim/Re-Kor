import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import AutoScrollView from "react-native-auto-scroll-view";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import BackHeader from "../../../components/BackHeader";
import PlaceForm from "../../../components/PlaceForm";
import TagForm from "../../../components/TagForm";

import heart from "../../../icons/heart.svg";
import star from "../../../icons/star.svg";
import no_heart from "../../../icons/no_heart.svg";
import yes_heart from "../../../icons/yes_heart.svg";
import go_map from "../../../icons/go_map.svg";
import { toSize } from "../../../globalStyle";
const CategoryColorChage = (category) => {
  switch (category) {
    case "K-LANDSCAPE":
      return styles.Landscape_Category;
    case "K-CULTURE":
      return styles.Drama_Category;
    case "K-FOOD":
      return styles.Food_Category;
    case "K-SHOPPING":
      return styles.Shopping_Category;
    case "K-POP":
      return styles.Pop_Category;
    case "K-DRAMA":
      return styles.Drama_Category;
    case "K-FESTIVAL":
      return styles.Festival_Category;
    case "K-LEISURE":
      return styles.Leisure_Category;
  }
};

const DetailedScreen = ({ route, navigation }) => {
  const { Content_ID } = route.params;
  // Content_ID로 데이터 받아옴
  const arr = [
    {
      place_name: "Gapyeong Rail Park1",
      region: "Gapyeong",
      user_heart: 0,
      heartscore: 1,
      starscore: 4.5,
      category: "K-POP",
      tag: [
        { tag_name: "#Fun3", tag_category: "A" },
        { tag_name: "#Fun32", tag_category: "C" },
      ],
      image: [],
      intro: "인트로입니다.",
      location_info: [
        { adress: "주소", phone: "031-582-7768", honmapge: "https://www.~" },
      ],
      special_tip: ["First Tip", "Second Tip", "Third Tip", "Fourth Tip"],
      review: [
        {
          reviewer: "닉네임",
          review_tag: [
            { tag_name: "#so fun", tag_category: "A" },
            { tag_name: "#soso fun", tag_category: "C" },
          ],
          review_image: [],
          review_text: "리뷰 글",
        },
      ],
    },
  ];

  // const [heartState, setHeartState] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BackHeader />
      <View style={styles.mainview}>
        <View style={styles.firstView}>
          <Text style={styles.Place_text}>{arr[0].place_name}</Text>
          <View style={styles.iconView}>
            <WithLocalSvg asset={no_heart}></WithLocalSvg>
            <WithLocalSvg asset={go_map}></WithLocalSvg>
          </View>
        </View>
        <View style={styles.secondView}>
          <View style={styles.region_score_View}>
            <Text style={styles.Region_Text}>{arr[0].region}</Text>
            <View style={styles.ScoreView}>
              <WithLocalSvg asset={heart}></WithLocalSvg>
              <Text style={styles.Score_Text}>{arr[0].heartscore}</Text>
              <WithLocalSvg asset={star}></WithLocalSvg>
              <Text style={styles.Score_Text}>{arr[0].starscore}</Text>
            </View>
          </View>
          <View style={styles.tagView}>
            <Text style={CategoryColorChage(arr[0].category)}>
              {arr[0].category}
            </Text>
          </View>
          <View style={styles.tagView}>
            <FlatList
              horizontal={true}
              keyExtractor={(item) => item.toString()}
              data={arr[0].tag}
              renderItem={({ item }) => <TagForm tag={item}></TagForm>}
            ></FlatList>
          </View>
        </View>
      </View>

      <AutoScrollView>
        <Text>123</Text>
      </AutoScrollView>
    </View>
  );
};

export default DetailedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  mainview: {
    width: "90%",
    height: "15%",
    // flex: 1,
    // backgroundColor: "#FAFAFA",
    backgroundColor: "#FAFAFA",
    alignItems: "center",
    // alignContent: "space-between",
    // justifyContent: "space-between",
  },
  firstView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 1,
  },
  secondView: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  region_score_View: {
    width: "100%",
    flexDirection: "row",
    // alignItems: "flex-start",
    justifyContent: "space-between",
  },
  iconView: {
    width: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  Place_text: {
    paddingTop: 4,
    fontSize: toSize(18),
    fontWeight: "800",
    color: "#1F2024",
  },
  Region_Text: {
    color: "#71727A",
    fontWeight: "400",
  },
  Score_Text: {
    marginLeft: 5,
    marginRight: 10,
  },
  ScoreView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tagView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  Drama_Category: {
    color: "#FFF",
    backgroundColor: "#FDD692",
    fontWeight: "600",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  Landscape_Category: {
    color: "#FFF",
    backgroundColor: "#CFF09E",
    fontWeight: "600",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  Culture_Category: {
    color: "#FFF",
    backgroundColor: "#D09E88",
    fontWeight: "600",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  Food_Category: {
    color: "#FFF",
    backgroundColor: "#F26D5B",
    fontWeight: "600",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  Pop_Category: {
    color: "#FFF",
    backgroundColor: "#A593E0",
    fontWeight: "600",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  Festival_Category: {
    color: "#FFF",
    backgroundColor: "#F7AA97",
    fontWeight: "600",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  Leisure_Category: {
    color: "#FFF",
    backgroundColor: "#52616A",
    fontWeight: "600",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  Shopping_Category: {
    color: "#FFF",
    backgroundColor: "#A3DAFF",
    fontWeight: "600",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
});
