import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { EvilIcons } from "@expo/vector-icons";
import { toSize } from "../../globalStyle";
import { WithLocalSvg } from "react-native-svg";
import logo_kakao from "../../icons/logo_kakao.svg";
import logo_rekor from "../../icons/rekor_logo.svg";

export default function LoginTypeSelect({ type }) {
  const navigation = useNavigation();
  return (
    // <TouchableOpacity
    //   activeOpacity={0.8}
    //   onPress={() =>
    //     type === "kakao"
    //       ? navigation.navigate("LoginKakaoScreen")
    //       : navigation.navigate("SignUpScreen")
    //   }
    <View
      style={[
        styles.ButtonView,
        type === "kakao" ? { backgroundColor: "#FFE812" } : null,
      ]}
    >
      <WithLocalSvg
        asset={type === "kakao" ? logo_kakao : logo_rekor}
        width={toSize(27)}
        height={toSize(25)}
      />
      <Text
        style={[
          styles.ButtonText,
          type === "kakao" ? { color: "#FFF" } : { color: "#757575" },
        ]}
      >
        Continue with {type}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ButtonView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 50,
    padding: toSize(16),
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  ButtonText: {
    fontSize: toSize(14),
    fontWeight: "700",
    marginLeft: toSize(8),
  },
});
