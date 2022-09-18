import { StyleSheet } from "react-native";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import { toSize } from "../../../globalStyle";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  MainView: {
    width: responsiveScreenWidth(100),
    marginTop: toSize(7),
    alignItems: "center",
    flex: 1,
  },
  placeInfoView: {
    width: "100%",
    paddingHorizontal: responsiveScreenWidth(5),
    paddingBottom: toSize(28),
    borderColor: "#E7E7E7",
    borderBottomWidth: 2,
    borderEndWidth: 2,
    borderStartWidth: 2,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  Place_text: {
    width: "100%",
    justifyContent: "flex-start",
    textAlign: "left",
    fontSize: toSize(20),
    fontWeight: "700",
    color: "#1F2024",
  },
  Region_Text: {
    width: "100%",
    fontSize: toSize(16),
    color: "#71727A",
    fontWeight: "400",
  },
  ScoreView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  Score_Text: {
    fontSize: toSize(14),
    color: "#000000",
    fontWeight: "700",
    marginLeft: toSize(4),
    marginRight: toSize(10),
  },
  CategoryView: {
    paddingTop: toSize(22),
    width: "100%",
  },
  tagView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: toSize(6),
  },
  //ScrollView 1
  informationView: {
    width: "100%",
    paddingHorizontal: responsiveScreenWidth(5),
    marginBottom: toSize(22),
  },
  //ScrollView 2
  PictureInfoView: {
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  picture: {
    width: responsiveScreenWidth(40),
    height: responsiveScreenWidth(40),
    marginRight: toSize(10),
    borderRadius: 17,
  },
  infoView: {
    width: "100%",
    marginTop: toSize(17),
    flex: 1,
  },
  TitleText: {
    fontSize: toSize(18),
    fontWeight: "700",
    marginBottom: toSize(8),
  },
  IntroText: { fontSize: toSize(14), fontWeight: "400" },
  separator: {
    backgroundColor: "#ECECEC",
    height: toSize(2),
    width: responsiveScreenWidth(90),
    marginTop: toSize(11),
  },
  placeMap: {
    borderRadius: 25,
    width: responsiveScreenWidth(90),
    marginBottom: toSize(8),
  },
  mapRadius: {
    height: toSize(140),
    zIndex: -1,
    borderRadius: 12,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    height: "100%",
    width: "100%",
  },
  mapInfoView: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: toSize(4),
    paddingVertical: toSize(6),
  },
  mapInfoText: {
    fontSize: toSize(14),
    fontWeight: "700",
    color: "#2F3036",
    marginHorizontal: toSize(10),
  },
  subInfoText: {
    fontSize: toSize(12),
    fontWeight: "400",
    color: "#929292",
    textAlignVertical: "top",
    width: "70%",
  },

  shadow: {
    width: "100%",
    height: toSize(2),
    marginBottom: toSize(2),
    backgroundColor: "#FAFAFA",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10.32,
    elevation: 10,
  },
  TipTitleText: {
    width: toSize(125),
    paddingLeft: toSize(9),
    fontSize: toSize(18),
    fontWeight: "800",
    marginBottom: toSize(11),
  },
  FinalInfoView: {
    paddingTop: toSize(21),
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recommendInfoView: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
    paddingTop: toSize(21),
  },

  recommendView: {
    flexDirection: "row",
    marginTop: toSize(10),
    flex: 1,
  },
  recommendImage: {
    paddingLeft: toSize(14),
    paddingBottom: toSize(12),
    width: toSize(185),
    height: toSize(115),
    marginRight: toSize(11),
    justifyContent: "flex-end",
  },
  recommend_Place: {
    color: "#FFFFFF",
    fontSize: toSize(16),
    fontWeight: "700",
  },
  recommend_Region: {
    color: "#FFFFFF",
    fontSize: toSize(14),
    fontWeight: "400",
    marginTop: toSize(3),
  },
});

export const textUnderlineStyle = () =>
  StyleSheet.create({
    container: {
      backgroundColor: "#FEDE8C",
      width: toSize(125),
      height: toSize(13),
      position: "absolute",
      bottom: 12,
      left: 5,
      zIndex: -10,
    },
  });
