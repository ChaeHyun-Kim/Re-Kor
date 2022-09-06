import { StyleSheet } from "react-native";
import { toSize } from "../globalStyle";

export const styles = StyleSheet.create({
  CategoryView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: toSize(10),
    flex: 1,
  },
  picture: {
    borderRadius: 17,
  },
  borderView: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    borderRadius: 17,
  },
  PlaceView: {
    flex: 1,
    marginLeft: toSize(9),
    justifyContent: "center",
  },
  Category_Place_View: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  ScoreView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: toSize(1),
  },
  Place_Text: {
    fontSize: toSize(14),
    fontWeight: "800",
    marginBottom: toSize(1),
  },
  Region_Text: {
    fontSize: toSize(12),
    color: "#71727A",
    fontWeight: "400",
    marginBottom: toSize(11),
  },
  Score_Text: {
    marginLeft: 5,
    marginRight: 10,
  },
  circle: {
    width: toSize(18),
    height: toSize(18),
    borderRadius: toSize(100) / 2,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: toSize(3),
  },
  text: {
    fontWeight: "600",
    fontSize: toSize(10),
    color: "#FFF",
  },
});
