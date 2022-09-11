import { StyleSheet } from "react-native";
import { toSize } from "../../../globalStyle";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
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
    opacity: 2,
    height: toSize(418),
    width: toSize(328),
    padding: toSize(20),
    paddingTop: toSize(40),
    borderRadius: 15,
    zIndex: 100,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  mainText: {
    fontWeight: "800",
    fontSize: toSize(20),
    color: "#1F2024",
    marginBottom: toSize(4),
  },
  subText: {
    fontWeight: "400",
    fontSize: toSize(14),
    color: "#71727A",
  },
  FullTermsView: {
    flexDirection: "row",
    width: toSize(277),
    alignItems: "center",
    marginVertical: toSize(5),
    marginTop: toSize(31),
  },
  TermsView: {
    flexDirection: "row",
    width: toSize(277),
    alignItems: "center",
    marginVertical: toSize(5),
    paddingLeft: toSize(10),
    width: toSize(288),
  },
  TermsText: {
    fontWeight: "400",
    fontSize: toSize(14),
    color: "#2C2C2E",
    marginLeft: toSize(8),
    flexShrink: 1,
    width: toSize(199),
  },
  FullTermsText: {
    fontWeight: "700",
    fontSize: toSize(14),
    color: "#2C2C2E",
    marginLeft: toSize(8),
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
  borderline: {
    borderColor: "#EAECF2",
    width: toSize(288),
    borderWidth: 0.8,
    marginBottom: toSize(5),
  },
});
