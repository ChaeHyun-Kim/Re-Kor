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
    color: "#FF4444",
    fontWeight: "700",
    marginBottom: toSize(8),
    marginLeft: toSize(4),
  },
  FormInput: {
    borderWidth: 1.5,
    borderRadius: 12,
    height: toSize(48),
    paddingHorizontal: toSize(16),
    fontSize: toSize(14),
    color: "#2F3036",
    fontWeight: "400",
  },
  FormItemSelectView: {
    borderColor: "#8F9098",
    borderWidth: 1.5,
    borderRadius: 12,
    height: toSize(48),
    paddingHorizontal: toSize(16),
    justifyContent: "center",
  },
  GenderView: {
    borderColor: "#8F9098",
    borderWidth: 1.5,
    borderRadius: 12,
    width: toSize(155),
    height: toSize(48),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  GenderClickView: {
    borderColor: "#FFCC00",
    borderWidth: 1.5,
    borderRadius: 12,
    width: toSize(155),
    height: toSize(48),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ClickText: {
    fontSize: toSize(14),
    fontWeight: "400",
    color: "#FFCC00",
  },
  DefaultText: {
    fontSize: toSize(14),
    fontWeight: "400",
    color: "#8F9098",
  },
  InfoText: {
    fontSize: toSize(12),
    fontWeight: "400",
    color: "#71727A",
  },
  BirthInputText: {
    fontSize: toSize(14),
    color: "#000000",
  },
  FormPoint: {
    color: "#FFCC00",
    fontWeight: "600",
  },
  RowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkNickName: {
    width: toSize(84),
    height: toSize(19),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DCDCDC",
    borderRadius: 15,
  },
  checkText: {
    fontWeight: "700",
    fontSize: toSize(8),
    color: "#FFF",
  },
  hideView: {
    marginTop: toSize(8),
  },
  hideText: {
    fontWeight: "400",
    fontSize: toSize(12),
    color: "#FF453A",
  },
});
