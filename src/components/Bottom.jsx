import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { WithLocalSvg } from "react-native-svg";
import MapIcon from "../icons/map.svg";
import MapNoIcon from "../icons/MapNoIcon.svg";

import {
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";

import { toSize } from "../globalStyle";
import { BottomStyles } from "../styles/Bottom";

export default function Bottom({ num, nextPage, visible }) {
  const navigation = useNavigation();
  return (
    <View style={BottomStyles.fullscreen}>
      <View style={BottomStyles.MenuView}>
        <View style={BottomStyles.LeftView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              num === 5
                ? nextPage(true) && visible(true)
                : navigation.navigate("Explore");
            }}
          >
            <View style={BottomStyles.IconView}>
              <MaterialIcons
                name="explore"
                style={{ fontSize: toSize(20) }}
                color={num === 1 ? "#FFCC00" : "#D4D6DD"}
              />
              <Text
                style={
                  num === 1
                    ? BottomStyles.MenuText_check
                    : BottomStyles.MenuText_NoCheck
                }
              >
                Explore
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              num === 5
                ? nextPage(true) && visible(true)
                : navigation.navigate("Categories");
            }}
          >
            <View style={BottomStyles.IconView}>
              <AntDesign
                name="appstore1"
                style={{ fontSize: toSize(20) }}
                color={num === 2 ? "#FFCC00" : "#D4D6DD"}
              />
              <Text
                style={
                  num === 2
                    ? BottomStyles.MenuText_check
                    : BottomStyles.MenuText_NoCheck
                }
              >
                Categories
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={BottomStyles.MapIconView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              num === 5
                ? null
                : navigation.navigate("MakeCourse", { params: [] });
            }}
          >
            <View style={BottomStyles.MapBackGround}>
              <WithLocalSvg
                style={{ fontSize: toSize(55) }}
                asset={num === 5 ? MapIcon : MapNoIcon}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={BottomStyles.RightView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              num === 5
                ? nextPage(true) && visible(true)
                : navigation.navigate("CourseList");
            }}
          >
            <View style={BottomStyles.IconView}>
              <Octicons
                name="list-unordered"
                style={{ fontSize: toSize(20) }}
                color={num === 3 ? "#FFCC00" : "#D4D6DD"}
              />
              <Text
                style={
                  num === 3
                    ? BottomStyles.MenuText_check
                    : BottomStyles.MenuText_NoCheck
                }
              >
                CourseList
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              num === 5
                ? nextPage(true) && visible(true)
                : navigation.navigate("WishList");
            }}
          >
            <View style={BottomStyles.IconView}>
              <MaterialCommunityIcons
                name="account-heart-outline"
                style={{ fontSize: toSize(20) }}
                color={num === 4 ? "#FFCC00" : "#D4D6DD"}
              />
              <Text
                style={
                  num === 4
                    ? BottomStyles.MenuText_check
                    : BottomStyles.MenuText_NoCheck
                }
              >
                Wishlist
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
