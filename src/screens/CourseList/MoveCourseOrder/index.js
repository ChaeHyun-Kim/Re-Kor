// import React, { useEffect, useState } from "react";
// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   ScrollView,
//   View,
//   Image,
//   ImageBackground,
//   TouchableOpacity,
// } from "react-native";
// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import MarkerCustom from "../../../components/Map/MarkerCustom";
// import { WithLocalSvg } from "react-native-svg";
// import {
//   responsiveScreenHeight,
//   responsiveScreenWidth,
//   responsiveScreenFontSize,
// } from "react-native-responsive-dimensions";
// import BackHeader from "../../../components/BackHeader";
// import SpecialTipForm from "../../../components/SpecialTipForm";
// import TagForm from "../../../components/PlaceForm/TagForm";
// import { AntDesign } from "@expo/vector-icons";

// import no_heart from "../../../icons/icon_NoHeart.svg";
// import heart from "../../../icons/icon_Heart.svg";
// import { Feather } from "@expo/vector-icons";
// import { Octicons } from "@expo/vector-icons";
// import go_map from "../../../icons/go_map.svg";
// import { toSize } from "../../../globalStyle";
// import CategoryColorForm from "../../../components/PlaceForm/CategoryColorForm";

// import { useNavigation } from "@react-navigation/native";
// const MoveCourseOrder = ({ route }) => {
//   const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       <BackHeader />
//       <View style={styles.mainview}></View>
//     </View>
//   );
// };

// export default MoveCourseOrder;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//   },
//   mainview: {
//     width: "100%",
//     height: toSize(130),
//     // flex: 1,
//     backgroundColor: "#FFFFFF",
//     alignItems: "center",
//     borderBottomColor: "rgba(213, 213, 213, 0.2)",
//     borderBottomWidth: 5,
//   },
//   firstView: {
//     width: "90%",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingBottom: toSize(6),
//   },
// });
