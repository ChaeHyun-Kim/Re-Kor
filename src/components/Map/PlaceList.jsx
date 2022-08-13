import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { toSize } from "../../globalStyle";
import { WithLocalSvg } from "react-native-svg";
import TagForm from "../../components/TagForm";
import heart from "../../icons/heart.svg";
import star from "../../icons/star.svg";
import { useNavigation } from "@react-navigation/native";
const place = require("../../../src/images/place1.png");
import { FontAwesome } from "@expo/vector-icons";

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

const PlaceList = ({
  place_name,
  region,
  heartScore,
  starScore,
  category,
  tag,
  num,
  type,
  km,
  cancel,
}) => {
  const navigation = useNavigation();
  return (
    <>
      {km && (
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            paddingLeft: toSize(10),
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: toSize(30),
              width: toSize(3),
              backgroundColor: "#E9E9E9",
              marginHorizontal: toSize(5),
            }}
          />
          <Text
            style={{
              fontSize: toSize(8),
              fontWeight: "600",
              color: "#71727A",
            }}
          >
            {km}km
          </Text>
        </View>
      )}
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.CategoryView}
        onPress={() =>
          navigation.navigate("DetailedScreen", {
            Content_ID: "관광지의 Content_ID",
          })
        }
      >
        {cancel && (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginRight: toSize(12),
            }}
          >
            <View style={[styles.circle, { backgroundColor: "#FF7272" }]}>
              <Text style={styles.text}>ㅡ</Text>
            </View>
          </View>
        )}
        {num && (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginRight: toSize(12),
            }}
          >
            <FontAwesome
              name={
                type === "Heart"
                  ? "heart"
                  : type === "good"
                  ? "thumbs-up"
                  : null
              }
              size={toSize(10)}
              color={
                type === "Heart"
                  ? "#F88E8E"
                  : type === "good"
                  ? "#A593E0"
                  : null
              }
            />
            <View
              style={[
                styles.circle,
                type === "Heart"
                  ? { backgroundColor: "#FF7272" }
                  : type === "good"
                  ? { backgroundColor: "#A593E0" }
                  : { backgroundColor: "#A3DAFF" },
              ]}
            >
              <Text style={styles.text}>{num}</Text>
            </View>
          </View>
        )}
        <Image style={styles.picture} source={place} />
        <View style={styles.PlaceView}>
          <View style={styles.Category_Place_View}>
            <Text style={styles.Place_Text}>{place_name}</Text>
            <Text style={CategoryColorChage(category)}>{category}</Text>
          </View>
          <Text style={styles.Region_Text}>{region}</Text>
          <View style={styles.ScoreView}>
            {tag.map((item, index) => {
              return <TagForm tag={item} key={index}></TagForm>;
            })}
          </View>
          {heartScore && (
            <View style={styles.ScoreView}>
              <WithLocalSvg asset={heart} />
              <Text style={styles.Score_Text}>{heartScore}</Text>
              <WithLocalSvg asset={star} />
              <Text style={styles.Score_Text}>{starScore}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </>
  );
};
export default PlaceList;

const styles = StyleSheet.create({
  CategoryView: {
    width: "100%",
    height: toSize(85),
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingVertical: toSize(10),
  },
  picture: {
    width: toSize(96),
    height: "100%",
    borderRadius: toSize(7),
  },
  PlaceView: {
    flex: 1,
    marginLeft: toSize(9),
    justifyContent: "center",
  },
  Category_Place_View: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  ScoreView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  Place_Text: {
    fontSize: toSize(12),
    fontWeight: "800",
  },
  Region_Text: {
    color: "#71727A",
    fontWeight: "400",
  },
  Score_Text: {
    marginLeft: 5,
    marginRight: 10,
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
  circle: {
    width: toSize(17),
    height: toSize(17),
    borderRadius: toSize(100) / 2,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: toSize(3),
  },
  text: {
    fontWeight: "600",
    fontSize: toSize(10),
    color: "#FFF",
  },
});
