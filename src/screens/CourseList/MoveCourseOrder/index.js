import React, { useEffect, useState, Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CourseView from "../../../components/Course/CourseView";
import { toSize } from "../../../globalStyle";
import CourseBackHeader from "../../../components/CourseBackHeader";
import AutoScrollView from "react-native-auto-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import DraggableFlatList from "react-native-draggable-flatlist";
const MoveCourseOrder = ({ route }) => {
  const Folderdata = route.params.Folderdata;
  const Coursedata = Folderdata.course;
  const handleSelect = () => {
    navigation.navigate("CourseList");
  };

  const navigation = useNavigation();
  const [changeCheck, setChangeCheck] = useState(false);
  //   const datass = [
  //     { key: 1, label: "a", backgroundColor: "red" },
  //     { key: 2, label: "b", backgroundColor: "pink" },
  //     { key: 3, label: "c", backgroundColor: "yellow" },
  //   ];
  //   const renderItem = ({ item, index, move, moveEnd, isActive }) => {
  //     return (
  //       <TouchableOpacity
  //         style={{
  //           height: 100,
  //           backgroundColor: isActive ? "blue" : item.backgroundColor,
  //           alignItems: "center",
  //           justifyContent: "center",
  //         }}
  //         onLongPress={move}
  //         onPressOut={moveEnd}
  //       >
  //         <Text
  //           style={{
  //             fontWeight: "bold",
  //             color: "white",
  //             fontSize: 32,
  //           }}
  //         >
  //           {item.label}
  //         </Text>
  //       </TouchableOpacity>
  //     );
  //   };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CourseBackHeader title="Change the order" />
      <AutoScrollView style={styles.MainView}>
        <View style={{ padding: toSize(2), marginBottom: toSize(16) }}>
          <View style={styles.ListView}>
            <FontAwesome name="folder" size={20} color="#71727A" />

            <View style={styles.textView}>
              <Text style={styles.mainText}>{Folderdata.folder}</Text>

              <Text style={styles.numText}>{Folderdata.course.length}</Text>
            </View>
          </View>
        </View>
        {/* <DraggableFlatList
          data={datass}
          renderItem={renderItem()}
          keyExtractor={(item, index) => `draggable-item-${item.key}`}
          scrollPercent={5}

          // onMoveEnd={(itemOrder)=>this.dragRelease(itemOrder)}
        /> */}
        {Coursedata.map((item, index) => (
          <CourseView partcoursedata={item} courseindex={index} />
        ))}
        <View style={{ height: toSize(50) }}></View>
      </AutoScrollView>
      <View style={{ width: "100%", alignItems: "center" }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.BottomView,
            changeCheck
              ? { backgroundColor: "#FFCC00" }
              : { borderColor: "#FFCC00", borderWidth: 2 },
          ]}
          onPress={() => {
            changeCheck && handleSelect();
          }}
        >
          <Text
            style={[
              styles.BottomButtonText,
              changeCheck ? { color: "#FFFFFF" } : { color: "#FFCC00" },
            ]}
          >
            Select
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MoveCourseOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ListView: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: toSize(25),
    height: toSize(52),
    paddingHorizontal: toSize(16),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  MainView: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: toSize(22),
    paddingTop: toSize(22),
  },
  mainText: {
    fontSize: toSize(14),
    color: "#1F2024",
    fontWeight: "400",
    marginLeft: toSize(18),
    marginRight: toSize(8),
  },
  numText: {
    fontSize: toSize(14),
    color: "#000",
    fontWeight: "700",
  },
  BottomView: {
    backgroundColor: "#fff",
    width: "90%",
    height: toSize(48),
    marginVertical: toSize(24),
    borderRadius: 12,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  textView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  BottomButtonText: {
    fontSize: toSize(16),
    fontWeight: "600",
  },
});
