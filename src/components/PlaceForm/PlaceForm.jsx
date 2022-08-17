import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
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
        <View style={styles.PlaceNameView}>
          <Text style={styles.Place_Text}>{place_name}</Text>
        </View>

        <Text style={styles.Region_Text}>{region}</Text>
        <View style={styles.ScoreView}>
          {tag.map((item, index) => {
            return <TagForm key={index} tag={item} />;
          })}
        </View>
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
      </View>
    </TouchableOpacity>
  );
};
export default PlaceForm;

const styles = StyleSheet.create({
  CategoryView: {
    width: "100%",
    height: toSize(96),
    flexDirection: "row",
    marginBottom: toSize(10),
  },
  picture: {
    width: toSize(96),
    height: "100%",
    borderRadius: 17,
  },
  PlaceView: {
    flex: 1,
    paddingLeft: toSize(16),
    justifyContent: "center",
  },
  PlaceNameView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: toSize(1),
  },
  ScoreView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: toSize(1),
  },

  Place_Text: {
    fontSize: toSize(14),
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
});
