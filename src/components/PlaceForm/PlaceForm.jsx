import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { toSize } from "../../globalStyle";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { AntDesign } from "@expo/vector-icons";
import TagForm from "./TagForm";
import { useNavigation } from "@react-navigation/native";
const place = require("../../../src/images/place1.png");
const PlaceForm = ({ place_name, region, heartscore, starscore, tag }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate("DetailedScreen", {
          Content_ID: "관광지의 Content_ID",
        })
      }
    >
      <View style={styles.CategoryView}>
        <Image style={styles.picture} source={place} />
        <View style={styles.PlaceView}>
          <View style={styles.PlaceNameView}>
            <Text style={styles.Place_Text}>{place_name}</Text>
          </View>

          <Text style={styles.Region_Text}>{region}</Text>
          <View style={styles.ScoreView}>
            <FlatList
              horizontal={true}
              keyExtractor={(item) => item.toString()}
              data={tag}
              renderItem={({ item }) => <TagForm tag={item}></TagForm>}
            ></FlatList>
          </View>
          <View style={styles.ScoreView}>
            <AntDesign
              name="heart"
              style={{ fontSize: toSize(12) }}
              color="#FF7272"
            />
            <Text style={styles.Score_Text}>{heartscore}</Text>
            <AntDesign
              name="star"
              style={{ fontSize: toSize(13) }}
              color="#FDB600"
            />
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
    width: responsiveScreenWidth(325),
    height: toSize(96),
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
  },
  PlaceView: {
    flex: 1,
    paddingLeft: 16,
    flexDirection: "column",
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
  picture: {
    width: toSize(96),
    height: toSize(96),
    borderRadius: 17,
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
