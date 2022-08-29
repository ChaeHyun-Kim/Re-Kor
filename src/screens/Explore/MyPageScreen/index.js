import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "../../../components/MyHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { toSize } from "../../../globalStyle";
import { AntDesign } from "@expo/vector-icons";
import SettingView from "../../../components/Explore/SettingView.jsx";

const MyPageScreen = () => {
  const [userName, getUserName] = useState("");
  const getUserData = async () => {
    const userNickName = await AsyncStorage.getItem("userNickName");
    getUserName(JSON.parse(userNickName));
  };
  getUserData();
  const place = require("../../../images/place1.png");
  return (
    <View style={styles.fullscreen}>
      <StatusBar style="auto" />
      <Header Title={"My Page"} />
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <Image style={styles.picture} source={place} />
          <View style={styles.userView}>
            <View style={styles.iconView}>
              <AntDesign name="setting" size={toSize(20)} color="black" />
            </View>
            <Text style={styles.Nickname}>{userName}</Text>
          </View>
        </View>
        <View style={styles.settingView}>
          <View style={styles.lineView} />
          <SettingView
            icon={"setting"}
            content={"Recommended tourist destination"}
          />
          <SettingView icon={"arrowright"} content={"Re-Kor Instructions"} />
        </View>
      </View>
    </View>
  );
};
export default MyPageScreen;

const styles = StyleSheet.create({
  fullscreen: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  container: {
    width: "100%",
    alignItems: "center",
  },
  userInfo: {
    marginTop: toSize(11),
    height: toSize(321),
    justifyContent: "flex-end",
    width: toSize(327),
    position: "relative",
    marginBottom: toSize(20),
  },
  userView: {
    height: toSize(281),
    borderRadius: 20,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    padding: toSize(18),
  },
  picture: {
    position: "absolute",
    resizeMode: "cover",
    top: 0,
    left: toSize(327) / 2 - toSize(100) / 2,
    width: toSize(100),
    height: toSize(100),
    borderRadius: 50,
    zIndex: 100,
  },
  Nickname: {
    marginTop: toSize(25),
    fontWeight: "700",
    fontSize: toSize(15),
    color: "#2F3036",
    textAlign: "center",
  },
  iconView: {
    width: "100%",
    alignItems: "flex-end",
  },
  settingView: {
    width: "100%",
  },
  lineView: {
    backgroundColor: "#F3F3F3",
    width: "100%",
    height: toSize(30),
  },
});
