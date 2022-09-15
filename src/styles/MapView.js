import { StyleSheet } from "react-native";
import { toSize } from "../globalStyle";

export const MapStyles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    width: "100%",
    maxHeight: "100%",
    paddingBottom: toSize(30),
    paddingHorizontal: toSize(24),
    alignItems: "center",
    borderTopStartRadius: 45,
    borderTopEndRadius: 45,
    justifyContent: "flex-end",
  },
  line: {
    backgroundColor: "#DADADA",
    width: toSize(50),
    height: toSize(4),
    borderRadius: 100 / 2,
    marginTop: toSize(10),
    marginBottom: toSize(14),
  },
  textInputView: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#D4D6DD",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: toSize(15),
  },
  inputText: {
    fontSize: toSize(14),
    fontWeight: "400",
  },
  TextValue: {
    fontSize: toSize(18),
    fontWeight: "700",
  },
  completeText: {
    color: "#FFCC00",
    fontSize: toSize(12),
    fontWeight: "600",
  },
  editText: {
    color: "#D4D6DD",
    fontSize: toSize(12),
    fontWeight: "600",
  },
  SelectBtn: {
    marginTop: toSize(26),
    width: "100%",
    borderColor: "#FFCC00",
    borderWidth: 1,
    backgroundColor: "#fff",
    paddingVertical: toSize(12),
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontWeight: "600",
    fontSize: toSize(12),
    color: "#FFCC00",
  },
});
