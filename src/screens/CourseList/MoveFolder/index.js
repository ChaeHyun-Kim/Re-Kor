// import React, { useEffect, useState, Component } from "react";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import ListView from "../../../components/Course/FirstView";
// import { toSize } from "../../../globalStyle";
// import BackHeader from "../../../components/BackHeader";
// import AutoScrollView from "react-native-auto-scroll-view";
// import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default class MoveFolder extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       courselist: [],
//       confirmCheck: false,
//     };
//   }

//   // const MoveFolder = ({ route }) => {

//   async componentDidMount() {
//     const courselist = await AsyncStorage.getItem("@courselist");
//     this.setState({ courselist: JSON.parse(courselist) });

//     const setCourselist = this.props.route.params.setCourselist;
//   }

//   // const {Data} = route.param;
//   //   const courselist = [
//   //     {
//   //       folder: "Recent travel courses",
//   //       course: [
//   //         {
//   //           course_name: "My First Trip",
//   //           course_info: [
//   //             {
//   //               place_name: "Gapyeong Rail Park1",
//   //               region: "Gapyeong123",
//   //               heartscore: 1,
//   //               starscore: 4.5,
//   //               category: "K-POP",
//   //               tag: [
//   //                 { tag_name: "#Fun3", tag_category: "A" },
//   //                 { tag_name: "#Fun32", tag_category: "C" },
//   //               ],
//   //               selecttype: "",
//   //             },
//   //             {
//   //               place_name: "Gapyeong Rail Park1",
//   //               region: "Gapyeong123",
//   //               heartscore: 1,
//   //               starscore: 4.5,
//   //               category: "K-DRAMA",
//   //               tag: [
//   //                 { tag_name: "#Fun3", tag_category: "A" },
//   //                 { tag_name: "#Fun32", tag_category: "C" },
//   //               ],
//   //               selecttype: "Heart",
//   //               km: 5,
//   //             },
//   //           ],
//   //         },
//   //         {
//   //           course_name: "My Second Trip",
//   //           course_info: [
//   //             {
//   //               place_name: "Gapyeong Rail Park1",
//   //               region: "Gapyeong123",
//   //               heartscore: 1,
//   //               starscore: 4.5,
//   //               category: "K-POP",
//   //               tag: [
//   //                 { tag_name: "#Fun3", tag_category: "A" },
//   //                 { tag_name: "#Fun32", tag_category: "C" },
//   //               ],
//   //               selecttype: "good",
//   //             },
//   //           ],
//   //         },
//   //       ],
//   //     },
//   //     {
//   //       folder: "My Trip in Korea~",
//   //       course: [
//   //         {
//   //           course_name: "My First Trip",
//   //           course_info: [
//   //             {
//   //               place_name: "Gapyeong Rail Park1",
//   //               region: "Gapyeong123",
//   //               heartscore: 1,
//   //               starscore: 4.5,
//   //               category: "K-POP",
//   //               tag: [
//   //                 { tag_name: "#Fun3", tag_category: "A" },
//   //                 { tag_name: "#Fun32", tag_category: "C" },
//   //               ],
//   //               selecttype: "Heart",
//   //             },
//   //             {
//   //               place_name: "Gapyeong Rail Park1",
//   //               region: "Gapyeong123",
//   //               heartscore: 1,
//   //               starscore: 4.5,
//   //               category: "K-DRAMA",
//   //               tag: [
//   //                 { tag_name: "#Fun3", tag_category: "A" },
//   //                 { tag_name: "#Fun32", tag_category: "C" },
//   //               ],
//   //               selecttype: "good",
//   //               km: 50,
//   //             },
//   //           ],
//   //         },
//   //       ],
//   //     },
//   //   ];

//   //   const navigation = useNavigation();
//   //   const [confirmCheck, setConfirmCheck] = useState(true);
//   //   console.log("폴더 이동:  ", courselist);

//   render() {
//     return (
//       <View style={styles.container}>
//         <StatusBar style="auto" />
//         <BackHeader />
//         <AutoScrollView style={styles.MainView}>
//           {/* firstView를 리턴 */}
//           {/* {this.state.courselist.map((item, index) => {
//             return (
//               <ListView
//                 courselist={this.state.courselist}
//                 partdata={item}
//                 index={index}
//                 setCourselist={setCourselist}
//               />
//             );
//           })} */}
//           <View style={{ height: toSize(50) }}></View>
//         </AutoScrollView>
//         <View style={{ width: "100%", alignItems: "center" }}>
//           <View
//             style={[
//               styles.BottomView,
//               this.state.confirmCheck
//                 ? { backgroundColor: "#FFCC00" }
//                 : { borderColor: "#FFCC00", borderWidth: 2 },
//             ]}
//           >
//             <TouchableOpacity
//               activeOpacity={0.8}
//               // onPress={() => navigation.navigate("CourseList")}
//             >
//               <Text
//                 style={[
//                   styles.BottomButtonText,
//                   this.state.confirmCheck
//                     ? { color: "#FFFFFF" }
//                     : { color: "#FFCC00" },
//                 ]}
//               >
//                 Submit
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// // }
// // export default MoveFolder;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   MainView: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingHorizontal: toSize(22),
//     paddingTop: toSize(22),
//   },
//   main_text: {
//     fontSize: toSize(24),
//     fontWeight: "700",
//     color: "black",
//   },
//   BottomView: {
//     backgroundColor: "#fff",
//     width: "90%",
//     height: toSize(48),
//     marginVertical: toSize(24),
//     borderRadius: 12,
//     position: "absolute",
//     bottom: 0,
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   BottomButtonText: {
//     fontSize: toSize(16),
//     fontWeight: "600",
//   },
// });
