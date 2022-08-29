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
import pop from "../../../icons/icon_pop.svg";
import drama from "../../../icons/icon_drama.svg";
import festival from "../../../icons/icon_festival.svg";
import leisure from "../../../icons/icon_leisure.svg";

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
                  Category: "K-POP",
                })
              }
            >
              <WithLocalSvg asset={pop} />
              <Text style={styles.Category_text}>K-POP</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.CategoryView}
              onPress={() =>
                navigation.navigate("SelectCategoryScreen", {
                  Category: "K-DRAMA",
                })
              }
            >
              <WithLocalSvg asset={drama} />
              <Text style={styles.Category_text}>K-DRAMA</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.HorizontalView}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.CategoryView}
              onPress={() =>
                navigation.navigate("SelectCategoryScreen", {
                  Category: "K-FESTIVAL",
                })
              }
            >
              <WithLocalSvg asset={festival} />
              <Text style={styles.Category_text}>K-FESTIVAL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.CategoryView}
              onPress={() =>
                navigation.navigate("SelectCategoryScreen", {
                  Category: "K-LEISURE",
                })
              }
            >
              <WithLocalSvg asset={leisure} />
              <Text style={styles.Category_text}>K-LEISURE</Text>
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
    width: "45%",
    height: toSize(110),
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 3,
  },

  Category_text: {
    paddingTop: toSize(6),
    fontSize: toSize(12),
    fontWeight: "400",
    color: "#6C6C6C",
  },
});
