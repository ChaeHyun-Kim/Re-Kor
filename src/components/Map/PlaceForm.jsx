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
import TagForm from "../PlaceForm/TagForm";
import { useNavigation } from "@react-navigation/native";
import CategoryColorForm from "../PlaceForm/CategoryColorForm";
const place = require("../../../src/images/noImage.png");
import { Foundation } from "@expo/vector-icons";

const PlaceForm = ({ data, type, params }) => {
  const navigation = useNavigation();
  const handleNextScreen = () => {
    const newParams = {
      id: data.spotId.id,
      placeName: data.title,
      addr: data.address.addr1.split(" ")[1],
      cat: data.rekorCategory,
      img: data.images[0] ? { uri: data.images[0] } : place,
      type: type,
      mapx: parseFloat(data.address.mapx),
      mapy: parseFloat(data.address.mapy),
    };
    params.push(newParams);

    navigation.navigate("MakeCourse", { params: params });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handleNextScreen}
      style={styles.CategoryView}
    >
      <Image
        style={styles.picture}
        source={data.images[0] ? { uri: data.images[0] } : place}
      />
      <View style={styles.PlaceView}>
        <View style={styles.InfoView}>
          <View style={styles.rowView}>
            <Text numberOfLines={1} style={styles.Place_Text}>
              {data.title}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate("DetailedScreen", {
                  Content_ID: data.spotId.id,
                })
              }
            >
              <Foundation name="info" size={toSize(20)} color="#D4D6DD" />
            </TouchableOpacity>
          </View>
          <Text style={styles.Region_Text}>
            {data.address.addr1.split(" ")[1]}
          </Text>

          <View style={styles.ScoreView}>
            <AntDesign
              name="heart"
              style={{ fontSize: toSize(13) }}
              color="#FF7272"
            />
            <Text style={styles.Score_Text}>{data.likeCount}</Text>
            <AntDesign
              name="star"
              style={{ fontSize: toSize(13) }}
              color="#FDB600"
            />
            <Text style={styles.Score_Text}>{data.rating}</Text>
          </View>
        </View>
        {data.rekorCategory && (
          <CategoryColorForm category={data.rekorCategory} />
        )}

        <View style={styles.tagView}>
          {data.tagList.map((item, index) => {
            if (index < 3) {
              return <TagForm key={index} tag={item.engTagName} />;
            }
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
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  picture: {
    width: toSize(105),
    height: toSize(124),
    borderRadius: 17,
  },
  PlaceView: {
    flex: 1,
    paddingHorizontal: toSize(12),
    justifyContent: "center",
  },
  InfoView: {
    marginBottom: toSize(6),
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
    marginTop: toSize(4),
  },
});
