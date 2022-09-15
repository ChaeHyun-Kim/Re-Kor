import { StatusBar } from "expo-status-bar";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import Header from "../../../components/Header";
import Bottom from "../../../components/Bottom";
import TitleInfo from "../../../components/common/TitleInfoScreen";
import { toSize } from "../../../globalStyle";

import { WithLocalSvg } from "react-native-svg";

import landscape from "../../../icons/icon_landscape.svg";
import culture from "../../../icons/icon_culture.svg";
import food from "../../../icons/icon_food.svg";
import shopping from "../../../icons/icon_shopping.svg";
import pop from "../../../icons/icon_kpop.svg";
import drama from "../../../icons/icon_drama.svg";
import festival from "../../../icons/icon_festival.svg";
import leisure from "../../../icons/icon_enter.svg";

export default function Categories() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header Title={"Category"} />
      <ScrollView contentContainerStyle={styles.MainView}>
        <TitleInfo title={"Category"} content={"Choose your own category"} />
        <View style={styles.ButtonView}>
          <View style={styles.HorizontalView}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.CategoryView}
              onPress={() =>
                navigation.navigate("SelectCategoryScreen", {
                  Category: "K-LANDSCAPE",
                  cat: 0,
                })
              }
            >
              <WithLocalSvg asset={landscape} />
              <Text style={styles.Category_text}>K-LANDSCAPE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.CategoryView}
              onPress={() =>
                navigation.navigate("SelectCategoryScreen", {
                  Category: "K-CULTURE",
                  cat: 1,
                })
              }
            >
              <WithLocalSvg asset={culture} />
              <Text style={styles.Category_text}>K-CULTURE</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.HorizontalView}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.CategoryView}
              onPress={() =>
                navigation.navigate("SelectCategoryScreen", {
                  Category: "K-FOOD",
                  cat: 2,
                })
              }
            >
              <WithLocalSvg asset={food} />
              <Text style={styles.Category_text}>K-FOOD</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.CategoryView}
              onPress={() =>
                navigation.navigate("SelectCategoryScreen", {
                  Category: "K-SHOPPING",
                  cat: 3,
                })
              }
            >
              <WithLocalSvg asset={shopping} />
              <Text style={styles.Category_text}>K-SHOPPING</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.HorizontalView}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.CategoryView}
              onPress={() =>
                navigation.navigate("SelectCategoryScreen", {
                  Category: "K-DRAMA",
                  cat: 5,
                })
              }
            >
              <WithLocalSvg asset={drama} />
              <Text style={styles.Category_text}>K-DRAMA</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.CategoryView}
              onPress={() =>
                navigation.navigate("SelectCategoryScreen", {
                  Category: "K-ENTERTAINMENT",
                  cat: 7,
                })
              }
            >
              <WithLocalSvg asset={leisure} />
              <Text style={styles.Category_text}>K-ENTERTAINMENT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Bottom num={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: responsiveScreenWidth(100),
    alignItems: "center",
  },
  MainView: {
    flexGrow: 1,
    backgroundColor: "#fff",
    width: responsiveScreenWidth(90),
    justifyContent: "space-between",
    marginVertical: toSize(9),
  },
  MainText: {
    fontSize: toSize(20),
    fontWeight: "700",
    color: "#1F2024",
  },
  SubText: {
    fontSize: toSize(14),
    fontWeight: "400",
    color: "#71727A",
    marginBottom: toSize(27),
  },
  ButtonView: { flex: 1, marginHorizontal: toSize(9) },
  HorizontalView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: toSize(18),
  },
  CategoryView: {
    width: toSize(140),
    height: toSize(120),
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderColor: "#F8F8F8",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },

  Category_text: {
    paddingTop: toSize(6),
    fontSize: toSize(12),
    fontWeight: "400",
    color: "#6C6C6C",
  },
});
