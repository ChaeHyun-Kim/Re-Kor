import { StyleSheet } from "react-native";
import { toSize } from "../../../globalStyle";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: toSize(270),
    borderRadius: 14,
    alignSelf: "center",
  },
  contentContainer: {
    paddingVertical: toSize(19),
    paddingHorizontal: toSize(16),
  },
  titleText: {
    fontSize: 17,
    fontWeight: "700",
  },
  buttonContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomStartRadius: 14,
    borderBottomEndRadius: 14,
    paddingVertical: toSize(11),
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  leftView: {
    color: "#0A7AFF",
    fontSize: 16,
  },
  rightView: {
    fontSize: 16,
    color: "#0A7AFF",
  },
  line: {
    backgroundColor: "#B0B0B6",
    width: 0.5,
    height: toSize(44),
  },
  lineRow: {
    backgroundColor: "#B0B0B6",
    height: 0.5,
    width: "100%",
  },
});
