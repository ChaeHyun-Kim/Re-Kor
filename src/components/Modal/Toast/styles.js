import { StyleSheet } from "react-native";
import { toSize } from "../../../globalStyle";

export const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: "#ECFFF2",
    position: "absolute",
    left: toSize(48),
    right: toSize(48),
    height: toSize(71),
    padding: toSize(16),
    borderRadius: 16,
    zIndex: 100,
    justifyContent: "center",
  },
  WaittoastContainer: {
    backgroundColor: "#FFE2E5",
    position: "absolute",
    left: toSize(48),
    right: toSize(48),
    height: toSize(71),
    padding: toSize(16),
    borderRadius: 16,
    zIndex: 100,
    justifyContent: "center",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  textView: {
    paddingLeft: toSize(16),
  },
  mainText: {
    fontWeight: "800",
    fontSize: toSize(16),
    color: "#1F2024",
    marginBottom: toSize(4),
  },
  subText: {
    fontWeight: "400",
    fontSize: toSize(12),
    color: "#71727A",
  },
});
