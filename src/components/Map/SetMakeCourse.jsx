import React, { useState } from "react";
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
import { Entypo } from "@expo/vector-icons";
import { MapStyles } from "../../styles/MapView";
import { WithLocalSvg } from "react-native-svg";

import ic_map from "../../icons/ic_map.svg";
import AutoScrollView from "react-native-auto-scroll-view";

export default function SetMakeCourse({ SelectView, setSelectView }) {
  const [complete, setComplete] = useState("edit");
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
      selecttype: "Heart",
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
      km: 50,
      selecttype: "",
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

      km: 500,
      selecttype: "good",
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
        <TouchableOpacity
          TouchableOpacity={0.8}
          onPress={() =>
            setComplete(complete === "complete" ? "edit" : "complete")
          }
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
      {arr.map((item, index) => {
        return (
          <PlaceList
            key={index}
            place_name={item.place_name}
            region={item.region}
            category={item.category}
            tag={item.tag}
            num={index + 1}
            selecttype={item.selecttype}
            screentype={complete}
            km={item.km}
          />
        );
      })}

      <Entypo
        name="dots-three-vertical"
        size={toSize(17)}
        style={{ marginVertical: toSize(11) }}
        color="#D9D9D9"
      />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setSelectView(SelectView === false ? true : false)}
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
