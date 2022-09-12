import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import { WithLocalSvg } from "react-native-svg";
import { toSize } from "../../globalStyle.js";

import cat_shoppingLover from "../../icons/cat_shoppingLover.svg";
import cat_foodFighting from "../../icons/cat_foodFighting.svg";
import cat_hanbokyi from "../../icons/cat_hanbokyi.svg";
import cat_suffer from "../../icons/cat_suffer.svg";
import cat_viewer from "../../icons/cat_viewer.svg";

export default function UserInfo({ userNickName, catNum }) {
  const HomeLine = require("../../icons/ic_homeLine.png");
  const noImage = require("../../images/noImageTitle.png");
  return (
    <View style={styles.user_information}>
      <View style={styles.textView}>
        <Text style={styles.title_text}>Hi, {userNickName}</Text>
        <Text style={styles.welcome_text}>I'll recommend it to you again!</Text>
      </View>
      <WithLocalSvg
        height={toSize(67)}
        width={toSize(67)}
        style={styles.character_View}
        asset={
          catNum === 0
            ? cat_shoppingLover
            : catNum === 1
            ? cat_foodFighting
            : catNum === 2
            ? cat_hanbokyi
            : catNum === 3
            ? cat_suffer
            : catNum === 4
            ? cat_viewer
            : noImage
        }
      />
      <Image source={HomeLine} style={styles.lineView} />
    </View>
  );
}
const styles = StyleSheet.create({
  user_information: {
    width: responsiveScreenWidth(100),
    height: toSize(110),
  },
  lineView: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    marginLeft: -responsiveScreenWidth(55),
    width: responsiveScreenWidth(110),
  },
  textView: {
    paddingHorizontal: toSize(36),
    paddingTop: toSize(10),
  },
  title_text: {
    fontSize: toSize(22),
    fontWeight: "700",
    color: "#2F3036",
    marginBottom: toSize(5),
  },
  welcome_text: {
    fontSize: toSize(14),
    fontWeight: "300",
    color: "#5F5F5F",
  },
  character_View: {
    position: "absolute",
    right: toSize(47),
    bottom: toSize(7),
  },
});
