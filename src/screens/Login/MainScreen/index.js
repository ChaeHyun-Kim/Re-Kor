import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { toSize } from "../../../globalStyle";
import LoginTypeSelect from "../../../components/Login/LoginTypeSelect";

const LoginMainScreen = () => {
  return (
    <View style={styles.fullscreen}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.pictureView} />
        <View style={styles.bottomView}>
          <Text style={styles.Welcome}>Welcome!</Text>
          <View style={styles.BtnView}>
            <LoginTypeSelect type={"kakao"} />
            <LoginTypeSelect type={"Re-Kor"} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginMainScreen;

export const styles = StyleSheet.create({
  fullscreen: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    alignItems: "center",
    backgroundColor: "#fff",
  },
  container: {
    width: "100%",
    marginTop: toSize(44),
  },
  pictureView: {
    height: responsiveScreenHeight(50),
    width: "100%",
    backgroundColor: "#EAF2FF",
  },
  bottomView: {
    marginHorizontal: toSize(24),
    marginVertical: toSize(27),
  },
  Welcome: {
    fontWeight: "800",
    fontSize: toSize(24),
    color: "#000",
  },
  BtnView: {
    marginTop: toSize(18),
  },
});
