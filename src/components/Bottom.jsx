import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import { WithLocalSvg } from "react-native-svg";

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import mapicon from "../icons/map.svg";

export default function Bottom({ num }) {
  const navigation = useNavigation();
  return (
    <View style={styles.fullscreen}>
      <View style={styles.menuview}>
        <View style={styles.leftview}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Explore")}
          >
            <View style={styles.iconview}>
              <MaterialIcons
                name="explore"
                style={{ fontSize: responsiveScreenFontSize(2.5) }}
                color={num === 1 ? "#FFCC00" : "#D4D6DD"}
              />
              <Text
                style={
                  num === 1 ? styles.menutext_check : styles.menutext_nocheck
                }
              >
                Explore
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Categories")}
          >
            <View style={styles.iconview}>
              <AntDesign
                name="appstore1"
                style={{ fontSize: responsiveScreenFontSize(2.5) }}
                color={num === 2 ? "#FFCC00" : "#D4D6DD"}
              />
              <Text
                style={
                  num === 2 ? styles.menutext_check : styles.menutext_nocheck
                }
              >
                Categories
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.rightview}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Courselist")}
          >
            <View style={styles.iconview}>
              <Octicons
                name="list-unordered"
                style={{ fontSize: responsiveScreenFontSize(2.5) }}
                color={num === 3 ? "#FFCC00" : "#D4D6DD"}
              />
              <Text
                style={
                  num === 3 ? styles.menutext_check : styles.menutext_nocheck
                }
              >
                Courselist
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Wishlist")}
          >
            <View style={styles.iconview}>
              <MaterialCommunityIcons
                name="account-heart-outline"
                style={{ fontSize: responsiveScreenFontSize(2.5) }}
                color={num === 4 ? "#FFCC00" : "#D4D6DD"}
              />
              <Text
                style={
                  num === 4 ? styles.menutext_check : styles.menutext_nocheck
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

const styles = StyleSheet.create({
  fullscreen: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAFAFA",
  },
  menuview: {
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 88,
    padding: 16,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#EEEEEE",
    borderTopWidth: 1.4,
    borderStartWidth: 1.4,
    borderEndWidth: 1.4,
  },
  leftview: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  rightview: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  iconview: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: responsiveScreenWidth(20),
  },
  menutext_check: {
    fontSize: responsiveScreenFontSize(1.5),
    marginTop: 8,
    fontWeight: "bold",
    color: "#FFCC00",
  },
  menutext_nocheck: {
    fontSize: responsiveScreenFontSize(1.5),
    marginTop: 8,
    color: "#71727A",
  },
});
