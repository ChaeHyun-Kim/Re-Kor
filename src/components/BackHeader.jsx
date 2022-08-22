import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { responsiveScreenFontSize } from "react-native-responsive-dimensions";
import { AntDesign } from "@expo/vector-icons";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.fullscreen}>
      <View style={styles.container}>
        <AntDesign
          name="left"
          style={{ fontSize: responsiveScreenFontSize(3) }}
          color="#2F3036"
          onPress={() => {
            navigation.goBack();
          }}
        />
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
    height: 63,
    marginTop: 44,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});
