import { StyleSheet } from "react-native";
import { toSize } from "../globalStyle";

export const FormStyles = StyleSheet.create({
  FormOneView: {
    width: "100%",
    marginBottom: toSize(13),
  },
  FormTitleText: {
    fontSize: toSize(12),
    color: "#000000",
    fontWeight: "700",
    marginBottom: toSize(8),
  },
  EssentialText: {
    fontSize: toSize(12),
    color: "#0033FF",
    fontWeight: "700",
    marginBottom: toSize(8),
    marginLeft: toSize(4),
  },
  FormItemSelectView: {
    borderColor: "#8F9098",
    borderWidth: 1.5,
    borderRadius: 12,
    height: toSize(48),
    paddingHorizontal: toSize(16),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  DefaultText: {
    fontSize: toSize(14),
    color: "#8F9098",
  },
  ClickText: {
    fontSize: toSize(14),
    color: "#FFCC00",
  },
  BirthInputText: {
    fontSize: toSize(14),
    color: "#000000",
  },
  FormPoint: {
    color: "#FFCC00",
  },
  FormInput: {
    borderColor: "#8F9098",
    borderWidth: 1.5,
    borderRadius: 12,
    height: toSize(48),
    paddingLeft: toSize(16),
    fontSize: toSize(14),
    color: "#000000",
  },
  RowView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  GenderView: {
    borderColor: "#8F9098",
    borderWidth: 1.5,
    borderRadius: toSize(12),
    height: toSize(48),
    width: "47%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  GenderClickView: {
    borderColor: "#FFCC00",
    borderWidth: 1.5,
    borderRadius: toSize(12),
    height: toSize(48),
    width: "47%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
