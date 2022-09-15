import { StyleSheet } from "react-native";
import { toSize } from "../../../globalStyle";

export const styles = StyleSheet.create({
  toastBack: {
    backgroundColor: "#fff",
    width: toSize(328),
    borderRadius: 20,
  },
  contentContainer: {
    paddingVertical: toSize(25),
    paddingHorizontal: toSize(22),
    justifyContent: "center",
    alignItems: "center",
  },
  textView: {
    width: toSize(180),
    justifyContent: "center",
  },
  TitleText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: toSize(30),
  },
  imageView: {
    position: "relative",
    justifyContent: "center",
    width: toSize(284),
  },
  logo: {
    position: "absolute",
    left: toSize(70),
    top: 20,
    width: toSize(150),
    resizeMode: "contain",
    zIndex: -10,
  },
  character: {
    marginTop: toSize(100),
    width: toSize(284),
    resizeMode: "contain",
  },
});

export const textUnderlineStyle = () =>
  StyleSheet.create({
    container: {
      backgroundColor: "#FFCC00",
      width: toSize(180),
      height: toSize(20),
      position: "absolute",
      bottom: 5,
      zIndex: -10,
    },
  });
