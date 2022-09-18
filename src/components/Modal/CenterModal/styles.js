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
    fontSize: toSize(17),
    fontWeight: "700",
    marginBottom: toSize(6),
  },
  buttonContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomStartRadius: 14,
    borderBottomEndRadius: 14,
    borderColor: "#B0B0B6",
    borderTopWidth: 1,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  leftView: {
    color: "#676767",
    fontSize: 16,
    paddingVertical: toSize(11),
  },
  rightView: {
    fontSize: 16,
    color: "#0A7AFF",
    paddingVertical: toSize(11),
  },
  line: {
    backgroundColor: "#B0B0B6",
    width: 0.5,
    height: "100%",
  },
});
