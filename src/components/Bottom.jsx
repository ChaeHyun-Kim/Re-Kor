import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { WithLocalSvg } from "react-native-svg";

import icon1 from "../icons/explore.svg";
import icon2 from "../icons/categories.svg";
import icon3 from "../icons/courselist.svg";
import icon4 from "../icons/wishlist.svg";
import mapicon from "../icons/map.svg";

export default function Bottom({ num }) {
  return (
    <View style={styles.fullscreen}>
      <View style={styles.menuview}>
        <View style={styles.leftview}>
          <View style={styles.iconview}>
            <WithLocalSvg
              style={{ fontSize: responsiveScreenFontSize(4) }}
              asset={icon1}
            />
            <Text
              style={
                num === 1 ? styles.menutext_check : styles.menutext_nocheck
              }
            >
              Explore
            </Text>
          </View>
          <View style={styles.iconview}>
            <WithLocalSvg
              style={{ fontSize: responsiveScreenFontSize(4) }}
              asset={icon2}
            />
            <Text
              style={
                num === 2 ? styles.menutext_check : styles.menutext_nocheck
              }
            >
              Categories
            </Text>
          </View>
        </View>

        <View style={styles.rightview}>
          <View style={styles.iconview}>
            <WithLocalSvg
              style={{ fontSize: responsiveScreenFontSize(4) }}
              asset={icon3}
            />
            <Text
              style={
                num === 3 ? styles.menutext_check : styles.menutext_nocheck
              }
            >
              Courselist
            </Text>
          </View>
          <View style={styles.iconview}>
            <WithLocalSvg
              style={{ fontSize: responsiveScreenFontSize(4) }}
              asset={icon4}
            />
            <Text
              style={
                num === 3 ? styles.menutext_check : styles.menutext_nocheck
              }
            >
              Wishlist
            </Text>
          </View>
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
    backgroundColor: "red",
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
