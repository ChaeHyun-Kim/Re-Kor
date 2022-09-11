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
    height: toSize(428),
    paddingTop: toSize(40),
    paddingBottom: toSize(24),
    paddingHorizontal: toSize(20),
    borderRadius: 15,
    zIndex: 100,
    alignItems: "center",
  },
  clickView: {
    width: "100%",
    marginVertical: toSize(30),
  },
  mainText: {
    fontWeight: "800",
    fontSize: toSize(20),
    color: "#1F2024",
    marginBottom: toSize(2),
  },
  subText: {
    fontWeight: "400",
    fontSize: toSize(14),
    color: "#71727A",
  },
  FullTermsView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: toSize(8),
  },
  FullTermsText: {
    fontWeight: "700",
    fontSize: toSize(14),
    color: "#2C2C2E",
    marginLeft: toSize(8),
  },
  TermsView: {
    flexDirection: "row",
    paddingLeft: toSize(8),
    marginBottom: toSize(10),
    alignItems: "center",
  },
  TermsText: {
    fontWeight: "400",
    fontSize: toSize(14),
    color: "#2C2C2E",
    marginLeft: toSize(8),
  },

  BottomView: {
    width: "100%",
    height: toSize(48),
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: toSize(20),
  },
  BottomButtonText: {
    fontSize: toSize(14),
    fontWeight: "600",
  },
  borderline: {
    backgroundColor: "#EAECF2",
    height: 1,
    marginBottom: toSize(13),
  },
  w_100: {
    width: "100%",
  },
  Row: {
    flexDirection: "row",
  },
  redText: {
    color: "red",
    fontSize: toSize(16),
  },
});
