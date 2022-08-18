import { StyleSheet } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { toSize } from "../../../globalStyle";

export const styles = StyleSheet.create({
  fullscreen: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    alignItems: "center",
    flex: 1,
  },
  fullOpacity: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    alignItems: "center",
    opacity: 0.4,
    flex: 1,
  },
  container: {
    width: responsiveScreenWidth(100) - toSize(48),
    marginTop: toSize(68),
    flex: 1,
  },
  MainText: {
    alignItems: "flex-start",
    fontSize: toSize(20),
    color: "#1F2024",
    fontWeight: "800",
    lineHeight: toSize(27),
  },
  MainSubText: {
    fontSize: toSize(14),
    color: "#71727A",
    fontWeight: "400",
    marginTop: toSize(8),
  },
  FormView: { marginTop: toSize(34) },
  RowView: {
    flexDirection: "row",
  },
  BottomTextView: {
    marginLeft: toSize(12),
  },
  BottomView: {
    width: "100%",
    height: toSize(48),
    marginVertical: toSize(24),
    borderRadius: 12,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  BottomButtonText: {
    fontSize: toSize(16),
    fontWeight: "600",
  },
});
