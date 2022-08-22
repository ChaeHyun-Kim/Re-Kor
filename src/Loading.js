import React from "react";
import { Image, ImageBackground, StyleSheet } from "react-native";
import { toSize } from "../src/globalStyle";
import { StatusBar } from "expo-status-bar";

import lb0 from "./images/loading_background.png";
import lb1 from "./images/loading_background1.png";
import logo from "./icons/logo_back.png";
import logo1 from "./icons/logo_back_white.png";
import logo_character from "./images/logo_character.png";

function Loading() {
  const random = Math.floor(Math.random() * 3);
  console.log(random);
  return (
    <ImageBackground
      source={random === 0 ? lb0 : random === 1 ? lb1 : null}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar style="auto" />
      <Image style={styles.picture} source={random != 1 ? logo : logo1} />
      <Image
        style={[
          styles.character,
          random === 1 ? { marginTop: toSize(100) } : null,
        ]}
        source={random != 0 ? logo_character : null}
      />
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
  character: {
    width: toSize(329),
    height: toSize(230),
  },
});
