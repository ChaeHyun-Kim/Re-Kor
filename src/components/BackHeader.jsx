import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import { toSize } from "../globalStyle";
import Constants from "expo-constants";

import no_heart from "../icons/icon_NoHeart.svg";
import heart from "../icons/icon_Heart.svg";
import go_map from "../icons/go_map.svg";

export default function Header({ heartClick, ClickHeart }) {
  const navigation = useNavigation();
  return (
    <View style={styles.fullscreen}>
      <View style={styles.container}>
        <AntDesign
          name="left"
          style={{ fontSize: toSize(20) }}
          color="#2F3036"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.iconView}>
          <TouchableOpacity activeOpacity={0.8} onPress={heartClick}>
            <WithLocalSvg
              width={toSize(30)}
              height={toSize(30)}
              asset={!ClickHeart ? no_heart : heart}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.left}
            onPress={() => navigation.navigate("MakeCourse")}
          >
            <WithLocalSvg
              width={toSize(30)}
              height={toSize(30)}
              asset={go_map}
            />
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
  },
  container: {
    width: "90%",
    marginTop: Constants.statusBarHeight,
    paddingVertical: toSize(12),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  iconView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    marginLeft: toSize(7),
  },
});
