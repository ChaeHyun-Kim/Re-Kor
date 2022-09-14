import React from "react";
import { Image, ImageBackground, StyleSheet } from "react-native";
import { toSize } from "../src/globalStyle";
import { StatusBar } from "expo-status-bar";

import lb0 from "./images/loading_background.png";
import lb1 from "./images/loading_background1.png";
import logo from "./icons/logo_back.png";
import logo1 from "./icons/logo_back_white.png";
import logo2 from "./icons/logo_back_line.png";
import logo_character from "./images/logo_character.png";

const Loading = () => {
  const random = Math.floor(Math.random() * 3);
  return (
    <ImageBackground
      source={random === 0 ? lb0 : random === 1 ? lb1 : null}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar style="auto" />
      <Image
        style={random === 2 ? styles.picture1 : styles.picture}
        source={random == 0 ? logo : random === 1 ? logo1 : logo2}
      />
      {random === 2 && (
        <Image style={styles.character} source={logo_character} />
      )}
    </ImageBackground>
  );
};

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
  picture1: {
    width: "100%",
    height: toSize(190),
    marginTop: toSize(235),
  },
  character: {
    width: toSize(358),
    height: toSize(192),
    marginTop: toSize(58),
  },
});
