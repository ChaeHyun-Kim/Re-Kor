// 코스 최종 완성 화면
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { toSize } from "../../globalStyle.js";
import PlaceList from "./PlaceList.jsx";
import { Entypo } from "@expo/vector-icons";
import { MapStyles } from "../../styles/MapView";
import { WithLocalSvg } from "react-native-svg";

import ic_map from "../../icons/ic_map.svg";
import { useNavigation } from "@react-navigation/native";
import { MakeCourseAPI } from "../../api/MakeCourse";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AutoScrollView from "react-native-auto-scroll-view";

import WaitToastMessage from "../Modal/Toast/WaitToast";
var newlist = [];
export default function SetMakeCourse({ params, setSelectView }) {
  const navigation = useNavigation();
  const [complete, setComplete] = useState("edit");
  const [coursename, setCoursename] = useState("");
  const [courseData, setCourseData] = useState([]);
  const [confirmWait, setconfirmWait] = useState(false);
  const makeCourse = () => {
    if (coursename.length > 0) {
      courseData.map((data) => {
        var emptydata = { spotId: "", isWished: "", isRecommend: "" };
        emptydata.spotId = data.id;
        emptydata.isRecommend = data.type === "recommend" ? "true" : "false";
        emptydata.isWished = data.type === "wish" ? "true" : "false";
        newlist = newlist.concat(emptydata);
      });
      MakeCourseAPI(coursename, newlist)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      navigation.navigate("CourseList");
    } else {
      setconfirmWait(true);
    }
  };

  const storeCourse = () => {
    AsyncStorage.setItem("@makeCourse", JSON.stringify(courseData), () => {
      // console.log("코스저장", courseData);
    });
    // navigation.navigate("SelectPlaceScreen", { params: params });

    // navigation.navigate("SelectPlaceScreen");
  };

  useEffect(() => {
    async function fetchData() {
      const data = await AsyncStorage.getItem("@makeCourse");
      const courseList = JSON.parse(data);
      if (courseList !== null) {
        const finalcourseList = courseList.concat(params[0]);
        setCourseData(finalcourseList);
      } else {
        setCourseData(params);
      }
      // await AsyncStorage.setItem("@makeCourse", JSON.stringify(params), () => {
      //   console.log("코스 만드는 중");
      // });
    }
    fetchData();
  }, []);

  return (
    <View style={MapStyles.container}>
      {/* <WaitToastMessage
        visible={confirmWait}
        handleFunction={setconfirmWait}
        title={"Wait!"}
        content={"Please write down the name of the course"}
      /> */}
      <View style={MapStyles.line} />
      <View style={MapStyles.textInputView}>
        <TextInput
          style={MapStyles.inputText}
          onChangeText={(text) => setCoursename(text)}
          value={coursename}
          placeholder={"Set the name of the course"}
        />
        <TouchableOpacity
          TouchableOpacity={0.8}
          onPress={() => {
            makeCourse();
          }}
        >
          <Text
            style={
              complete === "complete"
                ? MapStyles.editText
                : MapStyles.completeText
            }
          >
            {complete === "complete" ? "Edit" : "Complete"}
          </Text>
        </TouchableOpacity>
      </View>
      <AutoScrollView style={{ width: "100%" }}>
        {courseData.map((item, index) => {
          return (
            <PlaceList
              key={index}
              params={item}
              num={index + 1}
              screenType={complete}
            />
          );
        })}
      </AutoScrollView>
      <Entypo
        name="dots-three-vertical"
        size={toSize(17)}
        style={{ marginVertical: toSize(11) }}
        color="#D9D9D9"
      />
      <TouchableOpacity
        activeOpacity={1}
        onPress={storeCourse()}
        style={styles.SelectBtn}
      >
        <WithLocalSvg width={toSize(15)} height={toSize(15)} asset={ic_map} />
        <Text style={styles.btnText}>Select the next place</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  SelectBtn: {
    width: "100%",
    shadowColor: "#000",
    backgroundColor: "#FFF",
    shadowOffset: {
      width: toSize(3),
      height: toSize(3),
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    flexDirection: "row",
    height: toSize(59),
    borderRadius: 100 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontWeight: "500",
    fontSize: toSize(12),
    color: "#5E6169",
    marginLeft: toSize(9),
  },
});
