import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { toSize } from "../../globalStyle.js";
import { Fontisto } from "@expo/vector-icons";
import PlaceList from "./PlaceList.jsx";
import { MapStyles } from "../../styles/MapView";

export default function SetMakeCourse({ SelectView, setSelectView }) {
  const arr = [
    {
      place_name: "Gapyeong Rail Park1",
      region: "Gapyeong123",
      heartscore: 1,
      starscore: 4.5,
      category: "K-POP",
      tag: [
        { tag_name: "#Fun3", tag_category: "A" },
        { tag_name: "#Fun32", tag_category: "C" },
      ],
    },
    {
      place_name: "Gapyeong1 Rail Park1",
      region: "Gapyeong1234",
      heartscore: 1000,
      starscore: 4.5,
      category: "K-DRAMA",
      tag: [
        { tag_name: "#Fun3", tag_category: "A" },
        { tag_name: "#Fun32", tag_category: "C" },
      ],
    },
  ];
  return (
    <View style={MapStyles.container}>
      <View style={MapStyles.line} />
      <View style={MapStyles.textInputView}>
        <TextInput
          style={MapStyles.inputText}
          // onChangeText={setChangeSearch}
          // value={search}
          placeholder={"Set the name of the course"}
        />
        <Text style={MapStyles.completeText}>Complete</Text>
      </View>
      {arr.map((item, index) => {
        return (
          <PlaceList
            key={index}
            place_name={item.place_name}
            region={item.region}
            category={item.category}
            tag={item.tag}
            num={index + 1}
            type={"Heart"}
            cancel={true}
          />
        );
      })}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setSelectView(SelectView === false ? true : false)}
        style={MapStyles.SelectBtn}
      >
        <Text style={MapStyles.btnText}>Select</Text>
      </TouchableOpacity>
    </View>
  );
}
