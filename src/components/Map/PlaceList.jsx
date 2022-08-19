import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
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
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CategoryColorForm from "../PlaceForm/CategoryColorForm";
const PlaceList = ({
  place_name,
  region,
  heartScore,
  starScore,
  category,
  num,
  selecttype,
  screentype,
  km,
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
            marginVertical: toSize(5),
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: toSize(30),
              width: toSize(2),
              backgroundColor: "#E9E9E9",
              marginHorizontal: toSize(5),
            }}
          />
          <Text
            style={{
              fontSize: toSize(12),
              fontWeight: "700",
              color: "#71727A",
            }}
          >
            {km}km
          </Text>
        </View>
      )}
      <TouchableOpacity
        activeOpacity={screentype === "complete" ? 0.8 : 1}
        style={styles.CategoryView}
        onPress={
          screentype === "complete"
            ? () =>
                navigation.navigate("DetailedScreen", {
                  Content_ID: "관광지의 Content_ID",
                })
            : null
        }
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginRight: toSize(9),
          }}
        >
          {screentype === "edit" && (
            <TouchableOpacity
              TouchableOpacity={0.8}
              onPress={() => {
                Alert.alert(
                  "Deleting Place",
                  "Are you sure you want to clear the selected place?",
                  [
                    {
                      text: "Action",
                      onPress: () => {
                        console.log("현재 관광지 지우기");
                      },
                    },
                    { text: "Cancel" },
                  ],
                  { cancelable: false }
                );
              }}
            >
              <Entypo
                name="circle-with-minus"
                size={15}
                color="#FF7272"
                style={{ paddingTop: toSize(11) }}
              />
            </TouchableOpacity>
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
                selecttype === "Heart"
                  ? "heart"
                  : selecttype === "good"
                  ? "thumbs-up"
                  : "eye"
              }
              size={toSize(11)}
              color={
                selecttype === "Heart"
                  ? "#F88E8E"
                  : selecttype === "good"
                  ? "#A593E0"
                  : "#FFFFFF"
              }
            />
            <View
              style={[
                styles.circle,
                selecttype === "Heart"
                  ? { backgroundColor: "#FF7272" }
                  : selecttype === "good"
                  ? { backgroundColor: "#A593E0" }
                  : { backgroundColor: "#A3DAFF" },
              ]}
            >
              <Text style={styles.text}>{num}</Text>
            </View>
          </View>
        )}
        <View style={styles.borderView}>
          <Image
            style={[
              styles.picture,
              screentype === "info"
                ? {
                    width: toSize(92),
                    height: toSize(88),
                  }
                : {
                    width: toSize(83),
                    height: toSize(79),
                  },
            ]}
            source={place}
          />
          <View style={styles.PlaceView}>
            <Text style={styles.Place_Text}>{place_name}</Text>

            <Text style={styles.Region_Text}>{region}</Text>
            <CategoryColorForm category={category}></CategoryColorForm>

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
          {screentype === "info" && (
            <TouchableOpacity
              activeOpacity={0.8}
              // style={styles.CategoryView}
              onPress={() =>
                navigation.navigate("DetailedScreen", {
                  Content_ID: "관광지의 Content_ID",
                })
              }
            >
              <MaterialCommunityIcons
                name="information"
                size={20}
                color="#D4D6DD"
                style={{ margin: toSize(10) }}
              />
            </TouchableOpacity>
          )}
        </View>

        {screentype === "edit" && (
          <SimpleLineIcons
            style={{ paddingLeft: toSize(12) }}
            name="menu"
            size={14}
            color="#D4D6DD"
          />
        )}
      </TouchableOpacity>
    </>
  );
};
export default PlaceList;

const styles = StyleSheet.create({
  CategoryView: {
    width: "100%",
    // height: toSize(85),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: toSize(10),
    flex: 1,
  },
  picture: {
    borderRadius: 17,
  },
  borderView: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    borderRadius: 17,
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: toSize(1),
  },
  Place_Text: {
    fontSize: toSize(14),
    fontWeight: "800",
    marginBottom: toSize(1),
  },
  Region_Text: {
    fontSize: toSize(12),
    color: "#71727A",
    fontWeight: "400",
    marginBottom: toSize(11),
  },
  Score_Text: {
    marginLeft: 5,
    marginRight: 10,
  },
  circle: {
    width: toSize(18),
    height: toSize(18),
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
