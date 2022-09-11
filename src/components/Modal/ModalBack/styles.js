import { StyleSheet } from "react-native";
import { toSize } from "../../../globalStyle";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  toastBack: {
    backgroundColor: "(0, 0, 0, 0.5)",
    position: "absolute",
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    zIndex: 50,
  },
});
