import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import Header from "../../../components/Header";
import Bottom from "../../../components/Bottom";
// import CategoryForm from "../../../components/CategoryForm";
import { toSize } from "../../../globalStyle";

import { WithLocalSvg } from "react-native-svg";
import landscape from "../../../icons/icon_landscape.svg";
import culture from "../../../icons/icon_culture.svg";
import food from "../../../icons/icon_food.svg";
import shopping from "../../../icons/icon_shopping.svg";
import pop from "../../../icons/icon_pop.svg";
import drama from "../../../icons/icon_drama.svg";
import festival from "../../../icons/icon_festival.svg";
import leisure from "../../../icons/icon_leisure.svg";

import AutoScrollView from "react-native-auto-scroll-view";

export default function Categories({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <AutoScrollView style={styles.mainview}>
        <Text style={styles.main_text}>Choose category</Text>

        <View style={styles.HorizontalView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("SelectCategoryScreen", {
                Category: "K-LANDSCAPE",
              })
            }
          >
            <View style={styles.CategoryView}>
              <WithLocalSvg asset={landscape} />
              <Text style={styles.Category_text}>K-LANDSCAPE</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("SelectCategoryScreen", {
                Category: "K-CULTURE",
              })
            }
          >
            <View style={styles.CategoryView}>
              <WithLocalSvg asset={culture} />
              <Text style={styles.Category_text}>K-CULTURE</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.HorizontalView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("SelectCategoryScreen", {
                Category: "K-FOOD",
              })
            }
          >
            <View style={styles.CategoryView}>
              <WithLocalSvg asset={food} />
              <Text style={styles.Category_text}>K-FOOD</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("SelectCategoryScreen", {
                Category: "K-SHOPPING",
              })
            }
          >
            <View style={styles.CategoryView}>
              <WithLocalSvg asset={shopping} />
              <Text style={styles.Category_text}>K-SHOPPING</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.HorizontalView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("SelectCategoryScreen", {
                Category: "K-POP",
              })
            }
          >
            <View style={styles.CategoryView}>
              <WithLocalSvg asset={pop} />
              <Text style={styles.Category_text}>K-POP</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("SelectCategoryScreen", {
                Category: "K-DRAMA",
              })
            }
          >
            <View style={styles.CategoryView}>
              <WithLocalSvg asset={drama} />
              <Text style={styles.Category_text}>K-DRAMA</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.HorizontalView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("SelectCategoryScreen", {
                Category: "K-FESTIVAL",
              })
            }
          >
            <View style={styles.CategoryView}>
              <WithLocalSvg asset={festival} />
              <Text style={styles.Category_text}>K-FESTIVAL</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("SelectCategoryScreen", {
                Category: "K-LEISURE",
              })
            }
          >
            <View style={styles.CategoryView}>
              <WithLocalSvg asset={leisure} />
              <Text style={styles.Category_text}>K-LEISURE</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 50 }}></View>
      </AutoScrollView>

      <Bottom num={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainview: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingVertical: 31,
    paddingHorizontal: 43,
  },
  main_text: {
    fontSize: 18,
    fontWeight: "700",
    color: "#71727A",
  },
  HorizontalView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 13,
    marginHorizontal: 3,
  },
  CategoryView: {
    width: toSize(125),
    height: toSize(125),
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    elevation: 3,
  },

  Category_text: {
    paddingTop: 4,
    fontSize: 12,
    fontWeight: "500",
    color: "#6C6C6C",
  },
  picture: {
    width: responsiveScreenWidth(70),
    height: responsiveScreenWidth(70),
    borderRadius: 20,
    position: "relative",
    paddingTop: 20,
    justifyContent: "space-between",
  },
});
