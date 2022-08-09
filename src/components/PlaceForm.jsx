import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { toSize } from "../globalStyle";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { WithLocalSvg } from "react-native-svg";
import TagForm from "../components/TagForm";
import heart from "../icons/heart.svg";
import star from "../icons/star.svg";
const place = require("../../src/images/place1.png");
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
const PlaceForm = ({
  place_name,
  region,
  heartscore,
  starscore,
  category,
  tag,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      // onPress={() =>
      // navigation.navigate("SelectCategoryScreen", {
      //   Category: "K-SHOPPING",
      // })
      // }
    >
      <View style={styles.CategoryView}>
        <Image style={styles.picture} source={place} />
        <View style={styles.PlaceView}>
          <View style={styles.Category_Place_View}>
            <Text style={styles.Place_Text}>{place_name}</Text>
            <Text style={CategoryColorChage(category)}>{category}</Text>
          </View>
          <Text style={styles.Region_Text}>{region}</Text>
          <View style={styles.ScoreView}>
            <FlatList
              horizontal={true}
              keyExtractor={(item) => item.toString()}
              data={tag}
              renderItem={({ item }) => (
                <TagForm
                  tag_name={item.tag_name}
                  tag_category={item.tag_category}
                ></TagForm>
              )}
            ></FlatList>
          </View>
          <View style={styles.ScoreView}>
            <WithLocalSvg asset={heart}></WithLocalSvg>
            <Text style={styles.Score_Text}>{heartscore}</Text>
            <WithLocalSvg asset={star}></WithLocalSvg>
            <Text style={styles.Score_Text}>{starscore}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default PlaceForm;

const styles = StyleSheet.create({
  CategoryView: {
    width: toSize(328),
    height: toSize(96),
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
  },
  PlaceView: {
    flex: 1,
    paddingLeft: 16,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  Category_Place_View: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ScoreView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  picture: {
    width: 96,
    height: 96,
    borderRadius: 17,
  },
  Place_Text: {
    fontSize: responsiveScreenFontSize(2),
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
});
