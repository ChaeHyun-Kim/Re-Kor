import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { toSize } from "../../globalStyle";
import { AntDesign } from "@expo/vector-icons";
import TagForm from "./TagForm";
import { useNavigation } from "@react-navigation/native";
const place = require("../../../src/images/place1.png");

const PlaceForm = ({ place_name, region, heartScore, starScore, tag }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate("DetailedScreen", {
          Content_ID: "관광지의 Content_ID",
        })
      }
      style={styles.CategoryView}
    >
      <Image style={styles.picture} source={place} />
      <View style={styles.PlaceView}>
        <View style={styles.InfoView}>
          <Text style={styles.Place_Text}>{place_name}</Text>
          <Text style={styles.Region_Text}>{region}</Text>

          <View style={styles.ScoreView}>
            <AntDesign
              name="heart"
              style={{ fontSize: toSize(13) }}
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
        </View>

        <View style={styles.tagView}>
          {tag.map((item, index) => {
            return <TagForm key={index} tag={item} />;
          })}
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default PlaceForm;

const styles = StyleSheet.create({
  CategoryView: {
    width: "100%",
    flexDirection: "row",
    marginBottom: toSize(15),
    backgroundColor: "#fff",
    borderRadius: 17,
    borderWidth: 0.5,
    borderColor: "#F5F5F5",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  picture: {
    width: toSize(105),
    height: toSize(124),
    borderRadius: 17,
  },
  PlaceView: {
    flex: 1,
    paddingLeft: toSize(12),
    justifyContent: "center",
  },
  InfoView: {
    marginBottom: toSize(11),
  },
  Place_Text: {
    fontSize: toSize(14),
    fontWeight: "700",
    color: "#1F2024",
  },
  Region_Text: {
    fontSize: toSize(12),
    color: "#71727A",
    fontWeight: "400",
    marginVertical: toSize(1),
  },
  ScoreView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  Score_Text: {
    marginLeft: toSize(5),
    marginRight: toSize(8),
    fontSize: toSize(12),
    color: "#000000",
    fontWeight: "700",
  },
  tagView: {
    flexDirection: "row",
  },
});
