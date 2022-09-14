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

import ToastMessage from "../Modal/Toast";

export default function SetMakeCourse({ params, setSelectView }) {
  const navigation = useNavigation();
  const [complete, setComplete] = useState("edit");
  const [courseName, setCourseName] = useState("");
  const [courseData, setCourseData] = useState([]);
  const [confirmWait, setConfirmWait] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const makeCourse = () => {
    var newList = [];
    if (courseName.length > 0) {
      courseData.map((data) => {
        var emptyData = { spotId: "", isWished: "", isRecommend: "" };
        emptyData.spotId = data.id;
        emptyData.isRecommend = data.type === "recommend" ? "true" : "false";
        emptyData.isWished = data.type === "wish" ? "true" : "false";
        newList = newList.concat(emptyData);
      });
      MakeCourseAPI(courseName, newList)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      navigation.navigate("CourseList");
    } else {
      console.log("팝업창");
      setConfirmWait(1);
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
      if (!isLoading) {
        setIsLoading(true);
        const data = await AsyncStorage.getItem("@makeCourse");
        if (data === null) {
          setCourseData(params);
          console.log("파라미터를 makeCourse에 저장해야함");
        } else {
          console.log(JSON.stringify(data));
          console.log("이미 저장된 값이 있을 경우");
        }

        // const courseList = JSON.parse(data);
        // if (courseList !== null) {
        //   const finalcourseList = courseList.concat(params[0]);
        //   setCourseData(finalcourseList);
        // } else {
        //   setCourseData(params);
        // }
        // await AsyncStorage.setItem("@makeCourse", JSON.stringify(params), () => {
        //   console.log("코스 만드는 중");
        // });
      }
    }
    fetchData();
  }, [params]);

  return (
    <>
      <ToastMessage
        visible={confirmWait}
        handleFunction={setConfirmWait}
        title={"Wait!"}
        content={"Please write down the name of the course"}
        fail
        course
      />
      <View style={MapStyles.container}>
        <View style={MapStyles.line} />
        <View style={MapStyles.textInputView}>
          <TextInput
            style={MapStyles.inputText}
            onChangeText={(text) => setCourseName(text)}
            value={courseName}
            placeholder={"Set the name of the course"}
          />
          <TouchableOpacity TouchableOpacity={0.8} onPress={() => makeCourse()}>
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
          onPress={() => storeCourse()}
          style={styles.SelectBtn}
        >
          <WithLocalSvg width={toSize(15)} height={toSize(15)} asset={ic_map} />
          <Text style={styles.btnText}>Select the next place</Text>
        </TouchableOpacity>
      </View>
    </>
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
