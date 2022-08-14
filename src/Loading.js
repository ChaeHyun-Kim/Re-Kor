import React from "react";
import { Image, ImageBackground, StyleSheet } from "react-native";
import { toSize } from "../src/globalStyle";
import { StatusBar } from "expo-status-bar";

import background from "./images/loading_background.png";
import logo from "./icons/logo_back.png";

function Loading() {
  return (
    <ImageBackground
      source={background}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar style="auto" />
      <Image style={styles.picture} source={logo} />
    </ImageBackground>
  );
}

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  picture: {
    width: toSize(172),
    height: toSize(190),
    marginTop: toSize(235),
  },
});
