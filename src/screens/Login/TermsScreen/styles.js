import { StyleSheet } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { toSize } from "../../../globalStyle";

export const styles = StyleSheet.create({
  fullscreen: {
    backgroundColor: "white",
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    alignItems: "center",
    flex: 1,
  },
  container: {
    width: responsiveScreenWidth(100) - toSize(48),
    flex: 1,
  },
  MainText: {
    alignItems: "flex-start",
    fontSize: toSize(25),
    color: "#1F2024",
    fontWeight: "800",
    lineHeight: toSize(27),
  },
  MainSubText: {
    fontSize: toSize(20),
    color: "#000000",
    fontWeight: "700",
    marginBottom: toSize(8),
  },
  subText: {
    fontSize: toSize(14),
    color: "#000000",
    fontWeight: "700",
  },
  normalText: {
    fontSize: toSize(14),
    color: "#000000",
    fontWeight: "400",
  },
  borderline: {
    borderColor: "#EAECF2",
    width: "100%",
    borderWidth: 0.8,
    marginVertical: toSize(15),
  },
});
