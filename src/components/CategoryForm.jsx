// 사용안함
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { toSize } from "../globalStyle";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { WithLocalSvg } from "react-native-svg";

const CategoryForm = ({ icon, category }) => {
  return (
    <View style={styles.CategoryView}>
      <WithLocalSvg asset={{ icon }} />
      <Text>{category}</Text>
    </View>
  );
};
export default CategoryForm;

const styles = StyleSheet.create({
  CategoryView: {
    width: toSize(125),
    height: toSize(125),
    borderRadius: 25,
    paddingHorizontal: toSize(45),
    paddingVertical: toSize(33),
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
});
