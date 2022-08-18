import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { toSize } from "../../globalStyle";
import { WithLocalSvg } from "react-native-svg";
import TagForm from "../PlaceForm/TagForm";
import heart from "../../icons/heart.svg";
import star from "../../icons/star.svg";
import { useNavigation } from "@react-navigation/native";
const place = require("../../../src/images/place1.png");
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import CategoryColorForm from "../PlaceForm/CategoryColorForm";
import * as CategoryColor from "../../function/Categorycolor";
const SelectedPlaceList = ({
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
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginRight: toSize(9),
          }}
        >
          {cancel && (
            <Entypo
              name="circle-with-minus"
              size={15}
              color="#FF7272"
              style={{ paddingTop: toSize(11) }}
            />
          )}
        </View>
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
                  : "search"
              }
              size={toSize(10)}
              color={
                CategoryColor.IconColor(category)
                // type === "Heart"
                //   ? "#F88E8E"
                //   : type === "good"
                //   ? "#A593E0"
                //   : "#FFFFFF"
              }
            />
            <View
              style={[
                styles.circle,
                { backgroundColor: CategoryColor.IconColor(category) },
                // type === "Heart"
                //   ? { backgroundColor: "#FF7272" }
                //   : type === "good"
                //   ? { backgroundColor: "#A593E0" }
                //   : { backgroundColor: "#A3DAFF" },
              ]}
            >
              <Text style={styles.text}>{num}</Text>
            </View>
          </View>
        )}
        <Image style={styles.picture} source={place} />
        <View style={styles.PlaceView}>
          <Text style={styles.Place_Text}>{place_name}</Text>

          <Text style={styles.Region_Text}>{region}</Text>
          <CategoryColorForm category={category}></CategoryColorForm>
          <View style={styles.ScoreView}>
            {tag.map((item, index) => {
              return <TagForm tag={item} key={index}></TagForm>;
            })}
          </View>
          {heartScore && (
            <View style={styles.ScoreView}>
              <AntDesign
                name="heart"
                style={{ fontSize: toSize(12) }}
                color="#FF7272"
              />
              <Text style={styles.Score_Text}>{heartScore}</Text>
              <AntDesign
                name="star"
                style={{ fontSize: toSize(13) }}
                color="#FDB600"
              />
              <Text style={styles.Score_Text}>{starScore}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </>
  );
};
export default SelectedPlaceList;

const styles = StyleSheet.create({
  CategoryView: {
    width: "100%",
    height: toSize(85),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: toSize(10),
  },
  picture: {
    width: toSize(96),
    height: "100%",
    borderRadius: 7,
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
    marginVertical: toSize(1),
  },
  Place_Text: {
    fontSize: toSize(12),
    fontWeight: "800",
  },
  Region_Text: {
    fontSize: toSize(10),
    color: "#71727A",
    fontWeight: "400",
    marginVertical: toSize(1),
  },
  Score_Text: {
    marginLeft: 5,
    marginRight: 10,
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
