import { StyleSheet } from "react-native";
import { toSize } from "../../../globalStyle";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  toastBack: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    zIndex: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  toastContainer: {
    backgroundColor: "#FFFFFF",
    width: toSize(328),
    height: toSize(100),
    paddingVertical: toSize(20),
    paddingHorizontal: toSize(16),
    borderRadius: 15,
    zIndex: 100,
  },
  TitleText: {
    fontWeight: "700",
    fontSize: toSize(17),
  },
  subText: {
    fontWeight: "400",
    fontSize: toSize(13),
  },
});
