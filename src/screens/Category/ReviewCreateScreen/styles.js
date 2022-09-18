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
  TitleView: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: toSize(29),
  },
  MainText: {
    fontSize: toSize(18),
    color: "#1F2024",
    fontWeight: "800",
  },
  row: {
    flexDirection: "row",
    marginTop: toSize(9),
  },

  tagSelectView: {
    backgroundColor: "red",
  },
  SelectText: {
    fontSize: toSize(16),
    color: "#1F2024",
    fontWeight: "700",
  },

  separator: {
    backgroundColor: "#ECECEC",
    height: toSize(1),
    marginVertical: toSize(21),
  },

  FormView: { marginTop: toSize(34) },
  FormOneView: {
    borderWidth: 3,
  },
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
  marginTop: {
    marginTop: toSize(10),
  },
});
