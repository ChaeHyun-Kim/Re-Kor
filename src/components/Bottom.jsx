import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";

import { WithLocalSvg } from "react-native-svg";
import MapIcon from "../icons/map.svg";

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { toSize } from "../globalStyle";

export default function Bottom({ num, border }) {
  const navigation = useNavigation();
  return (
    <View style={styles.fullscreen}>
      <View
        style={[styles.MenuView, border === false ? null : styles.borderOn]}
      >
        <View style={styles.LeftView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Explore")}
          >
            <View style={styles.IconView}>
              <MaterialIcons
                name="explore"
                style={{ fontSize: toSize(20) }}
                color={num === 1 ? "#FFCC00" : "#D4D6DD"}
              />
              <Text
                style={
                  num === 1 ? styles.MenuText_check : styles.MenuText_NoCheck
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
            <View style={styles.IconView}>
              <AntDesign
                name="appstore1"
                style={{ fontSize: toSize(20) }}
                color={num === 2 ? "#FFCC00" : "#D4D6DD"}
              />
              <Text
                style={
                  num === 2 ? styles.MenuText_check : styles.MenuText_NoCheck
                }
              >
                Categories
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.MapIconView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("MakeCourse")}
          >
            <View
              style={[
                styles.MapBackGround,
                border === false
                  ? { borderColor: "#FFF" }
                  : { borderColor: "#FBFBFB" },
              ]}
            >
              <WithLocalSvg style={{ fontSize: toSize(55) }} asset={MapIcon} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.RightView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("CourseList")}
          >
            <View style={styles.IconView}>
              <Octicons
                name="list-unordered"
                style={{ fontSize: toSize(20) }}
                color={num === 3 ? "#FFCC00" : "#D4D6DD"}
              />
              <Text
                style={
                  num === 3 ? styles.MenuText_check : styles.MenuText_NoCheck
                }
              >
                CourseList
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("WishList")}
          >
            <View style={styles.IconView}>
              <MaterialCommunityIcons
                name="account-heart-outline"
                style={{ fontSize: toSize(20) }}
                color={num === 4 ? "#FFCC00" : "#D4D6DD"}
              />
              <Text
                style={
                  num === 4 ? styles.MenuText_check : styles.MenuText_NoCheck
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
  MenuView: {
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: toSize(20),
    borderTopRightRadius: toSize(20),
    height: toSize(88),
    padding: toSize(16),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  borderOn: {
    borderColor: "#EEEEEE",
    borderTopWidth: toSize(1.4),
    borderStartWidth: toSize(1.4),
    borderEndWidth: toSize(1.4),
  },
  LeftView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  RightView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  IconView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: responsiveScreenWidth(20),
  },
  MenuText_check: {
    fontSize: toSize(10),
    marginTop: toSize(8),
    fontWeight: "bold",
    color: "#FFCC00",
  },
  MenuText_NoCheck: {
    fontSize: toSize(10),
    marginTop: toSize(8),
    color: "#71727A",
  },
  MapIconView: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    bottom: toSize(45),
  },
  MapBackGround: {
    width: toSize(55),
    height: toSize(55),
    borderRadius: toSize(100) / 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: toSize(32),
  },
});
