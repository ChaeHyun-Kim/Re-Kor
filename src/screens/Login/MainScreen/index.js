import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { EvilIcons } from "@expo/vector-icons";

const LoginMainScreen = ({ navigation }) => {
  return (
    <View style={styles.fullscreen}>
      <StatusBar style="auto" />
      <View style={styles.margin} />
      <Text style={styles.Maintext}>Re-Kor</Text>
      <View style={styles.margin} />

      <Text style={styles.Subtext}>Log in</Text>
      <View style={styles.margin} />

      <View style={styles.btnview}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("SignUpScreen")}
        >
          <View style={styles.btn}>
            <EvilIcons
              name="search"
              style={{ fontSize: responsiveScreenFontSize(3) }}
              color="black"
            />
            <Text style={styles.btntext}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.btn}>
          <EvilIcons
            name="search"
            style={{ fontSize: responsiveScreenFontSize(3) }}
            color="black"
          />
          <Text style={styles.btntext}>Continue with Naver</Text>
        </View>
        <View style={styles.btn}>
          <EvilIcons
            name="search"
            style={{ fontSize: responsiveScreenFontSize(3) }}
            color="black"
          />
          <Text style={styles.btntext}>Continue with KaKao</Text>
        </View>
        <View style={styles.selectview}>
          <Text style={styles.selectext}>Don’t you have an account? </Text>
          <Text style={styles.selectext}>Log in as a Guest</Text>
        </View>
      </View>
      <View style={styles.margin}></View>
    </View>
  );
};

export default LoginMainScreen;

export const styles = StyleSheet.create({
  fullscreen: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    alignItems: "center",
  },
  btnview: {
    width: "80%",
    justifyContent: "space-between",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 60,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    marginBottom: 20,
    padding: 10,
  },
  Maintext: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(4),
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },
  Subtext: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(3),
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },
  btntext: { fontSize: responsiveScreenFontSize(2) },
  selectext: { fontSize: responsiveScreenFontSize(1.5) },
  margin: {
    height: responsiveScreenHeight(10),
  },
  selectview: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
});
