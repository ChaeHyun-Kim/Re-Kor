import { StyleSheet } from "react-native";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import { toSize } from "../globalStyle";

export const BottomStyles = StyleSheet.create({
  fullscreen: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAFAFA",
  },
  MenuView: {
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: toSize(20),
    borderTopRightRadius: toSize(20),
    height: toSize(88),
    padding: toSize(16),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#EEEEEE",
    borderTopWidth: toSize(1.4),
    borderStartWidth: toSize(1.4),
    borderEndWidth: toSize(1.4),
  },
  LeftView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  RightView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  IconView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: responsiveScreenWidth(20),
  },
  MenuText_check: {
    fontSize: toSize(12),
    marginTop: toSize(8),
    color: "#FFCC00",
  },
  MenuText_NoCheck: {
    fontSize: toSize(12),
    marginTop: toSize(8),
    color: "#71727A",
  },
  MapIconView: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    bottom: toSize(45),
  },
  MapBackGround: {
    width: toSize(55),
    height: toSize(55),
    borderRadius: toSize(100) / 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: toSize(32),
    borderColor: "#FBFBFB",
  },
});
